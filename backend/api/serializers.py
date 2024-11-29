from rest_framework import serializers
from .models import User, Organization, Item, Category, TradeProposal, MembershipRequest

# Serializer para a organização
class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['id', 'name']

# Serializer para o usuário
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'full_name', 'email', 'password', 'organization', 'role']
    
    def create(self, validated_data):
        user = User(
            username=validated_data['email'],
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            role=validated_data.get('role'),
            organization=validated_data.get('organization'),
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description', 'quantity', 'is_available_for_trade', 'image', 'category', 'organization']
        read_only_fields = ['id']

    def validate_quantity(self, value):
        if value < 1:
            raise serializers.ValidationError("A quantidade deve ser pelo menos 1.")
        return value

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class TradeProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeProposal
        fields = [
            'id', 'sender_organization', 'receiver_organization', 
            'sent_by', 'accepted_by', 'status', 'items_sent', 
            'items_requested', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate(self, data):
        # Validar que a organização emissora pertence ao usuário
        request_user = self.context['request'].user
        if data['sender_organization'] != request_user.organization:
            raise serializers.ValidationError("Você só pode criar propostas em nome da sua organização.")

        # Garantir que o destinatário seja válido
        if data['receiver_organization'] == data['sender_organization']:
            raise serializers.ValidationError("A organização destinatária deve ser diferente da organização emissora.")

        return data


class TradeProposalActionSerializer(serializers.Serializer):
    action = serializers.ChoiceField(choices=['accept', 'reject'])

    def validate(self, data):
        proposal = self.context['proposal']
        return data

class MembershipRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembershipRequest
        fields = ['id', 'user', 'organization', 'requested_role', 'is_approved', 'created_at']
        read_only_fields = ['is_approved', 'created_at']

    def validate(self, data):
        user = data['user']
        organization = data['organization']
        requested_role = data['requested_role']

        # Validação personalizada para evitar múltiplas solicitações pendentes
        if MembershipRequest.objects.filter(user=user, organization=organization, is_approved=None).exists():
            raise serializers.ValidationError("Você já possui uma solicitação pendente para esta organização.")

        # Validação para evitar que o usuário peça o mesmo cargo que já possui
        if user.role == requested_role and user.organization == organization:
            raise serializers.ValidationError("Você já possui este cargo nesta organização.")

        return data

class OrganizationDetailSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    class Meta:
        model = Organization
        fields = ['id', 'name', 'items']

    def get_items(self, obj):
        # Obtém a organização do usuário logado
        # Busca os itens pertencentes à organização
        items = Item.objects.filter(organization=obj,is_available_for_trade=True)
        return [{'name': item.name, 'description': item.description} for item in items]

