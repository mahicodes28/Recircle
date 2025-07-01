from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from myapp.models import Product, Order, Address, Seller, Review, ProductDetail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from mongoengine.errors import DoesNotExist, ValidationError
import json

def get_all_products(request):
    if request.method == "GET":
        products = Product.objects()
        data = []
        for product in products:
            item = product.to_mongo().to_dict()
            item["_id"] = str(item["_id"])
            data.append(item)
        return JsonResponse(data, safe=False)

# POST a new product
@csrf_exempt
def create_product(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            product = Product(**data)
            product.save()
            return JsonResponse({"message": "Product created", "id": str(product.id)}, status=201)
        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"error": "Invalid data or internal error", "details": str(e)}, status=500)


