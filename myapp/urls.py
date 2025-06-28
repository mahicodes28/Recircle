from django.urls import path
from . import views
from .views import hello ,Message
urlpatterns = [
    path('api/', hello, name='end1'),
    path('home/',Message,name='home'),
]