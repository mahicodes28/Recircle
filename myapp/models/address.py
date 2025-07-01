from mongoengine import Document, StringField, IntField, DateTimeField
from datetime import datetime

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
