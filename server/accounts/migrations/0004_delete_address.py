# Generated by Django 3.1.5 on 2021-02-26 13:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_address'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Address',
        ),
    ]