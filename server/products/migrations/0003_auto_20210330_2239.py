# Generated by Django 3.1.5 on 2021-03-30 17:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20210213_2023'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='price',
            name='size',
        ),
        migrations.DeleteModel(
            name='Size',
        ),
    ]
