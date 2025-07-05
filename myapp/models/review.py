from mongoengine import Document, ReferenceField, IntField, StringField, DateTimeField
from datetime import datetime
from .product import Product

class Review(Document):
    product = ReferenceField(Product, reverse_delete_rule=2)
    user = StringField(required=True)
    rating = IntField(min_value=1, max_value=5)
    comment = StringField()

    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
