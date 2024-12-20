# Generated by Django 5.1.3 on 2024-11-28 12:03

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_user_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='MembershipRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requested_role', models.CharField(choices=[('membro', 'Membro'), ('capitao', 'Capitão')], max_length=10)),
                ('is_approved', models.BooleanField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='membership_requests', to='api.organization')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='membership_requests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
