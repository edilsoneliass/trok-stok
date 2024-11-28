from django.contrib import admin
from .models import Organization, User, Item, Category, TradeProposal, MembershipRequest


admin.site.register(Organization)
admin.site.register(User)
admin.site.register(Item)
admin.site.register(Category)
admin.site.register(TradeProposal)
admin.site.register(MembershipRequest)

