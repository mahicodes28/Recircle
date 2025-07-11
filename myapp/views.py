from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from mongoengine.errors import DoesNotExist, ValidationError
from myapp.models import Product, Address, Order, Seller, Review, ProductDetail, HelpRequest
from django.conf import settings
from myapp.models import Product
from .models import Banner
import cloudinary
import cloudinary.uploader
from decouple import config
import jwt
import datetime
from django.http import JsonResponse
import traceback
from bson import ObjectId 

cloudinary.config(
    cloud_name = config('CLOUDINARY_CLOUD_NAME'),
    api_key = config('CLOUDINARY_API_KEY'),
    api_secret = config('CLOUDINARY_API_SECRET')
)

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
        return JsonResponse({"success": True, "products":serialize_queryset(Product.objects())}, safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)




@csrf_exempt
def create_product(request):
    if request.method == 'POST':
        try:
            product_data = request.POST.dict()
            files = request.FILES.getlist('images')

            # Convert types
            product_data['price'] = float(product_data.get('price', 0))
            product_data['offerPrice'] = float(product_data.get('offerPrice', 0))
            product_data['instock'] = int(product_data.get('instock', 1))
            product_data['isApproved'] = str(product_data.get('isApproved', 'false')).lower() == 'true'

            # Validate required fields
            if not product_data.get("product_name") or not product_data.get("seller"):
                return JsonResponse({"success": False, "message": "Missing required fields"}, status=400)

            # Upload images to Cloudinary
            image_urls = []
            for file in files:
                result = cloudinary.uploader.upload(file)
                image_urls.append(result['secure_url'])

            product_data['image'] = image_urls

            product = Product(**product_data)
            product.save()
            return JsonResponse({"success": True, "message": "Product created", "id": str(product.id)}, status=201)
        except Exception as e:
            import traceback
            print(traceback.format_exc())
            return JsonResponse({"success": False, "message": str(e)}, status=400)
    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)
    
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
        sellers = Seller.objects()
        sellers_data = []
        for seller in sellers:
            # Count products for this seller
            product_count = Product.objects(seller=seller.id).count()
            obj = seller.to_mongo().to_dict()
            obj['_id'] = str(obj['_id'])
            obj['totalproducts'] = product_count
            obj.pop('password', None)
            obj.pop('email', None)
            sellers_data.append(obj)
        return JsonResponse({"success": True, "sellers": sellers_data}, safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def create_seller(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            required_fields = ['email', 'password', 'user']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({"success": False, "message": f"{field} is required"}, status=400)

            # Check for duplicate email
            if Seller.objects(email=data['email']).first():
                return JsonResponse({"success": False, "message": "Email already registered"}, status=409)

            # Create the seller
            seller = Seller(**data)
            seller.save()

            payload = {
                'seller_id': str(seller.id),
                'name' : seller.user,
                'exp': datetime.datetime.now() + datetime.timedelta(days=1),
                'iat': datetime.datetime.now()
            }

            token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')

            return JsonResponse({
                "success": True,
                "message": "Seller created and logged in",
                "token": token,
                "seller_id": str(seller.id),
                "user": seller.user
            }, status=201)

        except Exception as e:
            return JsonResponse({"success": False, "message": str(e)}, status=400)

    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)



@csrf_exempt
def login_seller(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({
                    "success": False,
                    "message": "Email and password are required"
                }, status=400)

            seller = Seller.objects.filter(email=email).first()

            if not seller or seller.password != password:
                return JsonResponse({
                    "success": False,
                    "message": "Invalid credentials"
                }, status=401)

            payload = {
                'seller_id': str(seller.id),
                'name': str(seller.user),  # Ensure this is a string
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
                'iat': datetime.datetime.utcnow(),
            }

            token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
            token_str = token if isinstance(token, str) else token.decode('utf-8')

            return JsonResponse({
                "success": True,
                "message": "Login successful",
                "token": token_str,
                "seller_id": str(seller.id),
                "user": str(seller.user)
            })

        except Exception as e:
            return JsonResponse({
                "success": False,
                "message": f"Server error: {str(e)}"
            }, status=500)

    return JsonResponse({
        "success": False,
        "message": "Method not allowed"
    }, status=405)

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

@csrf_exempt
def myapp_banner(request):
    if request.method == 'POST':
        try:
            banner_data = request.POST.dict()
            image_file = request.FILES.get('image')

            # Type conversions
            banner_data['old_price'] = float(banner_data.get('old_price', 0))
            banner_data['new_price'] = float(banner_data.get('new_price', 0))

            # Validate required fields
            if not banner_data.get('title') or not image_file:
                return JsonResponse({"success": False, "message": "Missing required fields"}, status=400)

           
            direction = banner_data.get('direction', 'left')
            if direction not in ['left', 'right']:
                direction = 'left'

            # Upload to Cloudinary
            result = cloudinary.uploader.upload(image_file)
            image_url = result['secure_url']

            # Save to DB
            banner = Banner.objects.create(
                title=banner_data['title'],
                product_link=banner_data.get('product_link', ''),
                old_price=banner_data['old_price'],
                new_price=banner_data['new_price'],
                direction=direction, 
                image=image_url
            )

            return JsonResponse({
                "success": True,
                "message": "Banner created successfully",
                "id": banner.idstr(banner.id),
                "image_url": str(banner.image),
            }, status=201)

        except Exception as e:
            import traceback
            print(traceback.format_exc())
            return JsonResponse({"success": False, "message": str(e)}, status=500)

    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)

@csrf_exempt
def get_all_banners(request):
    if request.method == 'GET':
        try:
            banners = Banner.objects()
            banner_list = []
            for banner in banners:
                banner_dict = {
                    "_id": str(banner.id),
                    "title": banner.title,
                    "direction": banner.direction,
                    "product_link": banner.product_link,
                    "old_price": float(banner.old_price),
                    "new_price": float(banner.new_price),
                    "image": str(banner.image) if banner.image else "",  # <-- FIXED
                }
                banner_list.append(banner_dict)
            return JsonResponse({"success": True, "banners": banner_list}, safe=False)
        except Exception as e:
            import traceback
            print(traceback.format_exc())
            return JsonResponse({"success": False, "message": str(e)}, status=500)

    return JsonResponse({"success": False, "message": "Method not allowed"}, status=405)

@csrf_exempt
def delete_banner(request, banner_id):
    if request.method == 'DELETE':
        try:
            banner = Banner.objects.get(id=banner_id)
            banner.delete()
            return JsonResponse({'success': True, 'message': 'Banner deleted successfully'})
        except Banner.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Banner not found'}, status=404)
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def toggle_block_seller(request, seller_id):
    if request.method == 'PATCH':
        try:
            import logging
            logging.basicConfig(level=logging.DEBUG)

            body = json.loads(request.body)
            block_status = body.get('is_blocked')

            print("RAW block_status:", block_status)
            print("Type of block_status:", type(block_status))

            # Handle string "true"/"false"
            if isinstance(block_status, str):
                block_status = block_status.lower() == 'true'

            print("Final Boolean block_status:", block_status)

            seller = Seller.objects.get(id=seller_id)
            print("Seller before update:", seller.is_blocked)

            seller.is_blocked = block_status
            seller.save()

            print("Seller after update:", seller.is_blocked)

            return JsonResponse({
                'success': True,
                'message': f"Seller {'blocked' if block_status else 'unblocked'} successfully"
            })

        except Seller.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Seller not found'}, status=404)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
# @require_http_methods(["DELETE"])
def delete_seller(request, seller_id):
    try:
        if request.method == 'DELETE':
            if not ObjectId.is_valid(seller_id):
                return JsonResponse({"success": False, "message": "Invalid seller ID"}, status=400)

        seller = Seller.objects(id=seller_id).first()
        if not seller:
            return JsonResponse({"success": False, "message": "Seller not found"}, status=404)

        Product.objects(seller=seller.id).delete()
        seller.delete()

        return JsonResponse({"success": True, "message": "Seller deleted successfully"})

    except Exception as e:
        return JsonResponse({"success": False, "message": str(e)}, status=500)