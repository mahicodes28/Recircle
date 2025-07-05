from mongoengine import Document, StringField, ReferenceField, DateTimeField
from datetime import datetime
from .order import Order

class Seller(Document):
    user = StringField(max_length=150)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    cartItems = ReferenceField(Order, null=True)

    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
