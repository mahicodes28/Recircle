from djongo import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Product(models.Model):
    product_name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    category = models.CharField(max_length=100)
    offerPrice = models.FloatField()
    instock = models.IntegerField()
    image = models.JSONField()  # List of image URLs or paths
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    isApproved = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name


class Address(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    street = models.CharField(max_length=255)
    pincode = models.IntegerField()
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    phone_number = models.BigIntegerField(unique=True)
    country = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.city}"


class Order(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE)

    # Use JSONField instead of ArrayModelField
    items = models.JSONField()  # Example: [{"product": product_id, "quantity": 2}, ...]

    amount = models.FloatField()

    STATUS_CHOICES = [
        ("DELIVERED", "Delivered"),
        ("PENDING", "Pending"),
        ("CANCELLED", "Cancelled")
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="DELIVERED")

    customer = models.ForeignKey('Address', on_delete=models.CASCADE)

    PAYMENT_TYPE_CHOICES = [
        ("CASH", "Cash"),
        ("ONLINE", "Online")
    ]
    payment_type = models.CharField(max_length=10, choices=PAYMENT_TYPE_CHOICES, default="CASH")

    PAYMENT_STATUS_CHOICES = [
        ("PAID", "Paid"),
        ("ON DELIVERY", "On Delivery")
    ]
    payment_status = models.CharField(max_length=15, choices=PAYMENT_STATUS_CHOICES, default="PAID")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.id} by {self.userID}"


class Seller(models.Model):
    user = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Removed unique=True

    cartItems = models.ForeignKey('Order', on_delete=models.SET_NULL, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="reviews")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    rating = models.IntegerField()  # Can be 1 to 5, you can add validators if needed
    comment = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Review by {self.user.username} - {self.rating}/5"

class ProductDetail(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='details')

    material = models.CharField(max_length=255, blank=True, null=True)
    dimensions = models.CharField(max_length=255, blank=True, null=True)  # e.g. "10x5x2 cm"
    weight = models.FloatField(blank=True, null=True)  # In grams or kg
    brand = models.CharField(max_length=100, blank=True, null=True)
    warranty = models.CharField(max_length=100, blank=True, null=True)  # e.g. "6 months", "No warranty"
    color = models.CharField(max_length=50, blank=True, null=True)
    features = models.JSONField(blank=True, null=True)  # Example: ["Waterproof", "Recyclable", "Eco-friendly"]

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Details of {self.product.product_name}"

