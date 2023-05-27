"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('login', TemplateView.as_view(template_name='index.html')),
    path('signup', TemplateView.as_view(template_name='index.html')),
    path('profile', TemplateView.as_view(template_name='index.html')),
    path('menu', TemplateView.as_view(template_name='index.html')),
    path('product/<str:pk>', TemplateView.as_view(template_name='index.html')),
    path('about', TemplateView.as_view(template_name='index.html')),
    path('contact', TemplateView.as_view(template_name='index.html')),
    
    path('cart/<str:pk>', TemplateView.as_view(template_name='index.html')),
    path('cart', TemplateView.as_view(template_name='index.html')),
    path('paymentDelivery', TemplateView.as_view(template_name='index.html')),
    path('address', TemplateView.as_view(template_name='index.html')),
    path('orderDelivery/<str:pk>', TemplateView.as_view(template_name='index.html')),
    path('placeorderDelivery', TemplateView.as_view(template_name='index.html')),
    path('admin/product/<str:pk>/edit', TemplateView.as_view(template_name='index.html')),
    path('admin/productlist', TemplateView.as_view(template_name='index.html')),
    path('admin/orderlist', TemplateView.as_view(template_name='index.html')),
    path('admin/userlist', TemplateView.as_view(template_name='index.html')),
    path('admin/user/:id/edit', TemplateView.as_view(template_name='index.html')),


    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    # path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)