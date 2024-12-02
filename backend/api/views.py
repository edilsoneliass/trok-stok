from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import Organization, User, Item, Category, TradeProposal, MembershipRequest
from .serializers import UserSerializer, OrganizationSerializer, ItemSerializer, MembershipRequestSerializer, TradeProposalSerializer, TradeProposalActionSerializer, CategorySerializer, OrganizationDetailSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

# View para login (autenticação)
class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Autentica o usuário
        user = authenticate(request, username=email, password=password)
        if user is not None:
            # Gera tokens JWT
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            })
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# View para cadastro de usuário
class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        data = request.data
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        # Valida se as senhas são iguais
        if password != confirm_password:
            return Response({'detail': 'Passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

        # Cria o usuário
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'detail': 'User created successfully.',
                'user': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# View para listar organizações (para o usuário escolher uma organização)
class OrganizationListView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        organizations = Organization.objects.all()
        serializer = OrganizationSerializer(organizations, many=True)
        return Response(serializer.data)

class OrganizationItemsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Obtém a organização do usuário logado
        user_organization = request.user.organization
        if not user_organization:
            return Response({'error': 'Você não pertence a nenhuma organização.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Busca os itens pertencentes à organização
        items = Item.objects.filter(organization=user_organization)
        
        # Serializa os itens encontrados
        serializer = ItemSerializer(items, many=True)
        return Response({'items': serializer.data}, status=status.HTTP_200_OK)

class ItemCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Verifica se o usuário está associado a uma organização
        user_organization = request.user.organization
        if not user_organization:
            return Response({'error': 'Você precisa pertencer a uma organização para criar itens.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Associa a organização do usuário ao item
        data = request.data.copy()
        data['organization'] = user_organization.id

        serializer = ItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Item criado com sucesso!', 'item': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MembershipRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Vincula o usuário autenticado à solicitação
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = MembershipRequestSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        # Listar todas as solicitações do usuário autenticado
        membership_requests = MembershipRequest.objects.filter(user=request.user)
        serializer = MembershipRequestSerializer(membership_requests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ApproveMembershipRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, request_id):
        try:
            membership_request = MembershipRequest.objects.get(id=request_id)

            # Verifica se o usuário é capitão da organização
            if request.user.role != 'capitão' or request.user.organization != membership_request.organization:
                return Response({"detail": "Você não tem permissão para aprovar essa solicitação."}, status=status.HTTP_403_FORBIDDEN)

            # Atualiza o status da solicitação
            action = request.data.get('action')
            if action == 'approve':
                membership_request.is_approved = True
                membership_request.user.role = membership_request.requested_role
                membership_request.user.organization = membership_request.organization
                membership_request.user.save()
            elif action == 'reject':
                membership_request.is_approved = False
            else:
                return Response({"detail": "Ação inválida."}, status=status.HTTP_400_BAD_REQUEST)

            membership_request.save()
            return Response({"detail": f"Solicitação {'aprovada' if action == 'approve' else 'rejeitada'} com sucesso."})

        except MembershipRequest.DoesNotExist:
            return Response({"detail": "Solicitação não encontrada."}, status=status.HTTP_404_NOT_FOUND)
        
class TradeProposalCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Adiciona o usuário autenticado como remetente da proposta
        data = request.data.copy()
        data['sent_by'] = request.user.id
        data['sender_organization'] = request.user.organization.id
        serializer = TradeProposalSerializer(data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Proposta de troca criada com sucesso!', 'proposal': serializer.data}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TradeProposalActionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, proposal_id):
        try:
            proposal = TradeProposal.objects.get(id=proposal_id)
        except TradeProposal.DoesNotExist:
            return Response({'error': 'Proposta não encontrada.'}, status=status.HTTP_404_NOT_FOUND)

        # Verifica se o usuário pertence à organização destinatária
        if request.user.organization != proposal.receiver_organization:
            print(request.user.organization)
            return Response({'error': 'Você não tem permissão para processar esta proposta.'}, status=status.HTTP_403_FORBIDDEN)
        
        if request.user.role != 'capitão':
            print(request.user.role)
            return Response({'error': 'Você não tem permissão para processar esta proposta.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = TradeProposalActionSerializer(data=request.data, context={'proposal': proposal})
        if serializer.is_valid():
            action = serializer.validated_data['action']
            try:
                if action == 'accept':
                    proposal.accept_trade()
                    return Response({'message': 'Proposta aceita com sucesso!'}, status=status.HTTP_200_OK)
                elif action == 'reject':
                    proposal.reject_trade()
                    return Response({'message': 'Proposta rejeitada com sucesso!'}, status=status.HTTP_200_OK)
            except ValueError as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class OrganizationDetailView(RetrieveAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationDetailSerializer

class TradeProposalListView(ListAPIView):
    queryset = TradeProposal.objects.all()
    serializer_class = TradeProposalSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['sender_organization', 'receiver_organization', 'status']
    ordering_fields = ['created_at']
    ordering = ['-created_at']

class DeleteItemView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, item_id):
        try:
            # Busca o item pelo ID
            item = Item.objects.get(id=item_id)
        except Item.DoesNotExist:
            return Response({'error': 'Item não encontrado.'}, status=status.HTTP_404_NOT_FOUND)

        # Verifica se o usuário pertence à organização do item
        if request.user.organization != item.organization:
            return Response({'error': 'Você não tem permissão para deletar este item.'}, status=status.HTTP_403_FORBIDDEN)

        # Deleta o item
        item.delete()
        return Response({'message': f'Item "{item.name}" deletado com sucesso.'}, status=status.HTTP_200_OK)

class OrganizationMembersView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        # Recupera o ID da organização a partir dos parâmetros da URL
        organization_id = self.kwargs.get('organization_id')
        if not organization_id:
            return User.objects.none()

        # Filtra os usuários que pertencem à organização especificada
        return User.objects.filter(organization_id=organization_id)

class ItemsExcludeUserOrganizationView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ItemSerializer

    def get_queryset(self):
        # Recupera a organização do usuário autenticado
        user_organization = self.request.user.organization

        # Filtra itens que não pertencem à organização do usuário
        return Item.objects.filter(is_available_for_trade=True).exclude(organization=user_organization)
    
class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]  # Garante que apenas usuários autenticados acessem

    def get(self, request):
        # Obter o usuário autenticado
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)