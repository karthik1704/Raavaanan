# Generated by Django 3.1.1 on 2020-10-17 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='materials',
        ),
        migrations.AddField(
            model_name='product',
            name='materials',
            field=models.ManyToManyField(to='products.ProductMaterial'),
        ),
    ]
