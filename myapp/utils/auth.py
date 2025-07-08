# utils/auth.py

import jwt
from django.conf import settings
from django.http import JsonResponse

def seller_required(view_func):
    def wrapper(request, *args, **kwargs):
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if not auth_header or not auth_header.startswith('Bearer '):
            return JsonResponse({'success': False, 'message': 'Authorization header missing'}, status=401)

        token = auth_header.split(' ')[1]
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            request.seller_id = payload['seller_id']
        except jwt.ExpiredSignatureError:
            return JsonResponse({'success': False, 'message': 'Token expired'}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({'success': False, 'message': 'Invalid token'}, status=401)

        return view_func(request, *args, **kwargs)
    return wrapper
