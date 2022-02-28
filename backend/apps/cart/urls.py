from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
   path('', views.CartList.as_view(), name='cart_list'),
   path('add/', views.CartAdd.as_view(), name='add_cart'),
   path('delete/<int:pk>/', views.CartDelete.as_view(), name='delete_cart'),
   path('update/<int:pk>/', views.CartUpdate.as_view(), name='cart_update')
]