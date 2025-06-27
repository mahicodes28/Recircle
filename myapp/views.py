from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

def hello_world(request):
    return JsonResponse({'message': 'Hello from Django!'})

def Message(request):
    return render(request,"Index.html")

