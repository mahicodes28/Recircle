from django.urls import path
from . import views

urlpatterns = [
     path("products/", views.get_all_products, name="getproducts"),
     path("products/add/", views.create_product, name="addproduct"),

    # path("addresses/", views.get_all_addresses, name="getaddresses"),
    # path("addresses/create/", views.create_address, name="addaddress"),

    # path("orders/", views.get_all_orders, name="getorders"),
    # path("orders/create/", views.create_order, name="addorder"),

    # path("sellers/", views.get_all_sellers, name="get_sellers"),
    # path("sellers/create/", views.create_seller, name="add_seller"),

    # path("reviews/", views.get_all_reviews, name="get_reviews"),
    # path("reviews/create/", views.create_review, name="add_review"),

    # path("product-details/", views.get_all_product_details, name="get_product_details"),
    # path("product-details/create/", views.create_product_detail, name="add_product_detail"),
]
