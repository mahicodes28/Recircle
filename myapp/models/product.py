from mongoengine import Document, StringField, FloatField, IntField, BooleanField, ListField, URLField, DateTimeField
from datetime import datetime

class Product(Document):
    product_name = StringField(required=True, max_length=255)
    description = StringField()
    price = FloatField()
    category = StringField(max_length=100)
    offerPrice = FloatField()
    instock = IntField()
    image = ListField(URLField())  # List of image URLs
    seller = StringField(required=True)  
    isApproved = BooleanField(default=False)

    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
