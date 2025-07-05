from django.urls import path
from myapp import views

urlpatterns = [
    path('products/', views.get_all_products),
    path('products/create/', views.create_product),

    path('addresses/', views.get_all_addresses),
    path('addresses/create/', views.create_address),

    path('orders/', views.get_all_orders),
    path('orders/create/', views.create_order),

    path('sellers/', views.get_all_sellers),
    path('sellers/create/', views.create_seller),

    path('reviews/', views.get_all_reviews),
    path('reviews/create/', views.create_review),

    path('product-details/', views.get_all_product_details),
    path('product-details/create/', views.create_product_detail),

    path('help/', views.get_all_help_requests),
    path('help/create/', views.create_help_request),
]
