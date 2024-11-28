from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from .views import LoginView, RegisterView, OrganizationListView, ItemCreateView, OrganizationItemsView, MembershipRequestView, ApproveMembershipRequestView, TradeProposalCreateView, TradeProposalActionView, CategoryListView   

urlpatterns = [
    path('api/token/', obtain_auth_token, name='api_token_auth'),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('organizations/', OrganizationListView.as_view(), name='organizations'),
    path('items/create/', ItemCreateView.as_view(), name='item-create'),
    path('organization/items/', OrganizationItemsView.as_view(), name='organization-items'),
    path('membership-requests/', MembershipRequestView.as_view(), name='membership_requests'),
    path('membership-requests/<int:request_id>/approve/', ApproveMembershipRequestView.as_view(), name='approve_membership_request'),
    path('trade-proposals/create/', TradeProposalCreateView.as_view(), name='trade-proposal-create'),
    path('trade-proposals/<int:proposal_id>/action/', TradeProposalActionView.as_view(), name='trade-proposal-action'),
    path('categories/', CategoryListView.as_view(), name='category_list'),
]