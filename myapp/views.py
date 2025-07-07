from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from mongoengine.errors import DoesNotExist, ValidationError
from myapp.models import Product, Address, Order, Seller, Review, ProductDetail, HelpRequest
from django.conf import settings


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
    return JsonResponse({"error": "Method not allowed"}, status=405)


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
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def get_all_addresses(request):
    if request.method == 'GET':
        return JsonResponse(serialize_queryset(Address.objects()), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_address(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            address = Address(**data)
            address.save()
            return JsonResponse({"message": "Address created", "id": str(address.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def get_all_orders(request):
    if request.method == 'GET':
        user_id = request.GET.get("userID")
        status = request.GET.get("status")

        query = {}
        if user_id:
            query["userID"] = user_id
        if status:
            query["status"] = status.upper()

        return JsonResponse(serialize_queryset(Order.objects(__raw__=query)), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_order(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            order = Order(**data)
            order.save()
            return JsonResponse({"message": "Order created", "id": str(order.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

# For admin panel sellers list
@csrf_exempt
def get_all_sellers(request):
    if request.method == 'GET':
        return JsonResponse(serialize_queryset(Seller.objects()), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_seller(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            seller = Seller(**data)
            seller.save()
            return JsonResponse({"success":True,"message": "Seller created", "id": str(seller.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)
@csrf_exempt
def login_seller(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({"success": False, "message": "Email and password are required"}, status=400)

            seller = Seller.objects.filter(email=email).first()

            if not seller or seller.password != password:
                return JsonResponse({"success": False, "message": "Invalid Credentials"}, status=401)

            # You can set a session or token here if needed
            request.session['seller_id'] = str(seller.id)

            return JsonResponse({
                "success": True,
                "message": "Login successful",
                "id": str(seller.id),
                "user": seller.user
            }, status=200)

        except Exception as e:
            return JsonResponse({"success": False, "message": str(e)}, status=500)

    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)

@csrf_exempt
def logout_seller(request):
    if request.method == 'POST':
        try:
            # Remove seller ID from session
            if 'seller_id' in request.session:
                del request.session['seller_id']
            return JsonResponse({"success": True, "message": "Logged out successfully"}, status=200)
        except Exception as e:
            return JsonResponse({"success": False, "message": str(e)}, status=500)
    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)


@csrf_exempt
def get_all_reviews(request):
    if request.method == 'GET':
        product_id = request.GET.get("product")
        user = request.GET.get("user")

        query = {}
        if product_id:
            query["product"] = product_id
        if user:
            query["user"] = user

        return JsonResponse(serialize_queryset(Review.objects(__raw__=query)), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_review(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            review = Review(**data)
            review.save()
            return JsonResponse({"message": "Review created", "id": str(review.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def get_all_product_details(request):
    if request.method == 'GET':
        return JsonResponse(serialize_queryset(ProductDetail.objects()), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_product_detail(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            pd = ProductDetail(**data)
            pd.save()
            return JsonResponse({"message": "Product Detail created", "id": str(pd.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def get_all_help_requests(request):
    if request.method == 'GET':
        email = request.GET.get("email")
        status = request.GET.get("status")

        query = {}
        if email:
            query["email"] = email
        if status:
            query["status"] = status.title()

        help_requests = HelpRequest.objects(__raw__=query)
        return JsonResponse(serialize_queryset(help_requests), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_help_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            help_request = HelpRequest(**data)
            help_request.save()
            return JsonResponse({"message": "Help request submitted", "id": str(help_request.id)}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

@csrf_exempt
def admin_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if data.get('email') == settings.ADMIN_EMAIL and data.get('password') == settings.ADMIN_PASSWORD:
            request.session['is_admin'] = True
            return JsonResponse({"success": True, "message": "Logged in"})
        return JsonResponse({"success": False, "message": "Invalid credentials"}, status=401)
    return JsonResponse({"message": "Only POST allowed"}, status=405)

@csrf_exempt
def admin_logout(request):
    if request.method == 'POST':
        try:
            if 'is_admin' in request.session:
                del request.session['is_admin']
            return JsonResponse({"success": True, "message": "Admin logged out successfully"}, status=200)
        except Exception as e:
            return JsonResponse({"success": False, "message": str(e)}, status=500)
    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)