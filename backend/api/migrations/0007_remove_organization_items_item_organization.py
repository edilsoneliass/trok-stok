# Generated by Django 5.1.3 on 2024-11-28 23:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_rename_sent_date_tradeproposal_created_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='organization',
            name='items',
        ),
        migrations.AddField(
            model_name='item',
            name='organization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='api.organization'),
        ),
    ]
