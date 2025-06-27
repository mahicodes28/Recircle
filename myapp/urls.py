from django.urls import path
from . import views
from .views import hello_world ,Message
urlpatterns = [
    path('api/', hello_world, name='end1'),
    path('home/',Message,name='home'),
]