from mongoengine import (
    Document, EmbeddedDocument, StringField, FloatField, IntField, BooleanField,
    ListField, URLField, DateTimeField, ReferenceField, EmailField,
    EmbeddedDocumentField
)
from cloudinary.models import CloudinaryField
from django.db import models

from datetime import datetime


class Banner(Document):
    title = StringField(required=True)
    direction = StringField()
    product_link = URLField()
    old_price = FloatField(required=True)
    new_price = FloatField(required=True)
    image = URLField(required=True)

    meta = {
        'collection': 'banners',
        'ordering': ['-id']
    }

# Product Models
class Product(Document):
    product_name = StringField(required=True, max_length=255)
    description = StringField()
    price = FloatField()
    category = StringField(max_length=100)
    offerPrice = FloatField()
    instock = IntField()
    image = ListField(URLField())
    seller = StringField(required=True)
    isApproved = BooleanField(default=False)
    created_at = StringField()
    updated_at = StringField()


class ProductDetail(Document):
    product = ReferenceField(Product, unique=True)
    material = StringField()
    dimensions = StringField()
    weight = FloatField()
    brand = StringField()
    warranty = StringField()
    color = StringField()
    features = ListField(StringField())
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)


# Address Model (Used for customer reference in Order)
class Address(Document):
    first_name = StringField(max_length=100)
    last_name = StringField(max_length=100)
    email = StringField()
    street = StringField(max_length=255)
    pincode = IntField()
    state = StringField(max_length=100)
    city = StringField(max_length=100)
    phone_number = StringField(unique=True)
    country = StringField(max_length=100)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)


# Order Item Structure
class OrderItem(EmbeddedDocument):
    product_name = StringField(required=True)
    quantity = IntField(required=True, default=1)
    price = FloatField(required=True)


# Order Model
class Order(Document):
    userID = StringField(required=True)
    items = ListField(EmbeddedDocumentField(OrderItem))
    amount = FloatField()
    status = StringField(choices=["DELIVERED", "PENDING", "CANCELLED"], default="DELIVERED")
    customer = ReferenceField(Address)
    payment_type = StringField(choices=["CASH", "ONLINE"], default="CASH")
    payment_status = StringField(choices=["PAID", "ON DELIVERY"], default="PAID")
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)


# Review Model
class Review(Document):
    product = ReferenceField(Product, reverse_delete_rule=2)
    user = StringField(required=True)
    rating = IntField(min_value=1, max_value=5)
    comment = StringField()
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)


# Seller Model
class Seller(Document):
    user = StringField(max_length=150)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    cartItems = ReferenceField(Order, null=True)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)


# Help Center Contact Form Model
class HelpRequest(Document):
    full_name = StringField(required=True, max_length=100)
    email = EmailField(required=True)
    message = StringField(required=True, max_length=1000)
    created_at = DateTimeField(default=datetime.utcnow)
    status = StringField(default="Open", choices=["Open", "In Progress", "Resolved"])

    meta = {
        'collection': 'help_requests',
        'ordering': ['-created_at']
    }

    def __str__(self):
        return f"{self.full_name} - {self.email} - {self.status}"
