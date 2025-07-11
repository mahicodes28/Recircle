from django.urls import path
from myapp import views
from . import views

urlpatterns = [
    path('products/', views.get_all_products),
    path('products/create/', views.create_product),

    path('addresses/', views.get_all_addresses),
    path('addresses/create/', views.create_address),

    path('orders/', views.get_all_orders),
    path('orders/create/', views.create_order),

    path('sellers/', views.get_all_sellers),
    path('seller/register', views.create_seller),
    path('seller/login', views.login_seller),
    path('seller/logout', views.logout_seller),
    #  path('seller/products', views.get_seller_products),
    
     path('admmin/login', views.admin_login),
     path('admmin/logout', views.admin_logout),
     path('admmin/banner/create',views.myapp_banner),
     path('admmin/banner/',views.get_all_banners),
     path('admmin/banner/delete/<str:banner_id>/', views.delete_banner),
    path('admmin/seller/toggle/<str:seller_id>/', views.toggle_block_seller),
    path('admmin/seller/delete/<int:seller_id>/', views.delete_seller),


    path('reviews/', views.get_all_reviews),
    path('reviews/create/', views.create_review),

    path('product-details/', views.get_all_product_details),
    path('product-details/create/', views.create_product_detail),

    path('help/', views.get_all_help_requests),
    path('help/create/', views.create_help_request),
]
