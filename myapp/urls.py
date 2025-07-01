from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.get_all_products, name="getproducts"),
    path("products/add/", views.create_product, name="addproduct"),
]
