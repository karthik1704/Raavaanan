from django.db import models
# from django.contrib.auth import get_user_model
from django.conf import settings
from products.models import Product
# Create your models here.

User = settings.AUTH_USER_MODEL

class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.DO_NOTHING)
    total_price = models.FloatField()
    payment_id = models.CharField(max_length=80)
    created_at = models.DateTimeField(auto_now_add=True)



class OrderItem(models.Model):
    user = models.ForeignKey(User,on_delete=models.DO_NOTHING)
    order = models.ForeignKey(Order, on_delete=models.DO_NOTHING)
    product = models.ForeignKey(Product,on_delete=models.DO_NOTHING)
    extra = models.CharField(max_length=250)
   


    