from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from mongoengine.errors import DoesNotExist, ValidationError
from myapp.models import Product, Address, Order, Seller, Review, ProductDetail


def serialize_queryset(queryset):
    data = []
    for item in queryset:
        obj = item.to_mongo().to_dict()
        obj['_id'] = str(obj['_id'])
        data.append(obj)
    return data

@csrf_exempt
def get_all_products(request):
    if request.method == 'GET':
        return JsonResponse(serialize_queryset(Product.objects()), safe=False)

@csrf_exempt
def create_product(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            product = Product(**data)
            product.save()
            return JsonResponse({"message": "Product created", "id": str(product.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

# @csrf_exempt
# def get_all_addresses(request):
#     if request.method == 'GET':
#         return JsonResponse(serialize_queryset(Address.objects()), safe=False)

# @csrf_exempt
# def create_address(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             address = Address(**data)
#             address.save()
#             return JsonResponse({"message": "Address created", "id": str(address.id)}, status=201)
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=400)

# @csrf_exempt
# def get_all_orders(request):
#     if request.method == 'GET':
#         return JsonResponse(serialize_queryset(Order.objects()), safe=False)

# @csrf_exempt
# def create_order(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             order = Order(**data)
#             order.save()
#             return JsonResponse({"message": "Order created", "id": str(order.id)}, status=201)
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=400)

# @csrf_exempt
# def get_all_sellers(request):
#     if request.method == 'GET':
#         return JsonResponse(serialize_queryset(Seller.objects()), safe=False)

# @csrf_exempt
# def create_seller(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             seller = Seller(**data)
#             seller.save()
#             return JsonResponse({"message": "Seller created", "id": str(seller.id)}, status=201)
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=400)

# @csrf_exempt
# def get_all_reviews(request):
#     if request.method == 'GET':
#         return JsonResponse(serialize_queryset(Review.objects()), safe=False)

# @csrf_exempt
# def create_review(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             review = Review(**data)
#             review.save()
#             return JsonResponse({"message": "Review created", "id": str(review.id)}, status=201)
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=400)

# @csrf_exempt
# def get_all_product_details(request):
#     if request.method == 'GET':
#         return JsonResponse(serialize_queryset(ProductDetail.objects()), safe=False)

# @csrf_exempt
# def create_product_detail(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             pd = ProductDetail(**data)
#             pd.save()
#             return JsonResponse({"message": "Product Detail created", "id": str(pd.id)}, status=201)
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=400)
