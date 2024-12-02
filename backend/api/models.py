from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class Organization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class User(AbstractUser):
    full_name = models.CharField(max_length=255)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, null=True)
    role = models.CharField(max_length=50, choices=[('membro', 'Membro'), ('capitão', 'Capitão')], null=True, blank=True)

    def __str__(self):
        return self.full_name
    
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    quantity = models.PositiveIntegerField()
    is_available_for_trade = models.BooleanField(default=True)
    image = models.ImageField(upload_to='item_images/', blank=True, null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='items', null=True)

class Category(models.Model):
    name = models.CharField(max_length=50)

class TradeProposal(models.Model):
    sender_organization = models.ForeignKey(Organization, related_name='sent_proposals', on_delete=models.CASCADE)
    receiver_organization = models.ForeignKey(Organization, related_name='received_proposals', on_delete=models.CASCADE)
    sent_by = models.ForeignKey(User, related_name='sent_trades', on_delete=models.CASCADE)
    accepted_by = models.ForeignKey(User, related_name='accepted_trades', null=True, blank=True, on_delete=models.SET_NULL)
    status = models.CharField(max_length=10, choices=[('pending', 'Pendente'), ('accepted', 'Aceita'), ('rejected', 'Rejeitada')])
    items_sent = models.ManyToManyField('Item', related_name='sent_in_trades')
    items_requested = models.ManyToManyField('Item', related_name='requested_in_trades')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def accept_trade(self):
        # Transfere os itens entre as organizações
        for item in self.items_sent.all():
            item.organization = self.receiver_organization
            item.save()

        for item in self.items_requested.all():
            item.organization = self.sender_organization
            item.save()
        
        self.status = 'accepted'
        self.save()

    def reject_trade(self):
        self.status = 'rejected'
        self.save()

class MembershipRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='membership_requests')
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='membership_requests')
    ROLE_CHOICES = [
        ('membro', 'Membro'),
        ('capitao', 'Capitão'),
    ]
    requested_role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    is_approved = models.BooleanField(null=True, blank=True)  # None = pendente, True = aprovado, False = recusado
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} -> {self.organization.name} ({self.requested_role})"
    

    