from mongoengine import Document, ReferenceField, StringField, FloatField, ListField, DateTimeField
from datetime import datetime
from .product import Product

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
