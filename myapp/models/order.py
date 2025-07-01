from mongoengine import Document, StringField, FloatField, ListField, ReferenceField, DateTimeField
from datetime import datetime
from .address import Address

class Order(Document):
    userID = StringField(required=True)
    items = ListField()  # [{"product": id, "quantity": n}]
    amount = FloatField()

    status = StringField(choices=["DELIVERED", "PENDING", "CANCELLED"], default="DELIVERED")
    customer = ReferenceField(Address)

    payment_type = StringField(choices=["CASH", "ONLINE"], default="CASH")
    payment_status = StringField(choices=["PAID", "ON DELIVERY"], default="PAID")

    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
