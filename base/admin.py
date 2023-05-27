from django.contrib import admin
from .models import Product, OrderItem, Order, DeliveryAddress

# Register your models here.
admin.site.register(Product)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(DeliveryAddress)
