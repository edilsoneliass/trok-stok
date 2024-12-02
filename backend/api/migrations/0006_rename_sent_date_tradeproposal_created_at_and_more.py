from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_membershiprequest'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tradeproposal',
            old_name='sent_date',
            new_name='created_at',
        ),
        migrations.AddField(
            model_name='tradeproposal',
            name='items_requested',
            field=models.ManyToManyField(related_name='requested_in_trades', to='api.item'),
        ),
        migrations.AddField(
            model_name='tradeproposal',
            name='items_sent',
            field=models.ManyToManyField(related_name='sent_in_trades', to='api.item'),
        ),
        migrations.AddField(
            model_name='tradeproposal',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
