from django.test import TestCase
from mongoengine import connect, disconnect
from myapp.models import Product, Address, Order, Seller, Review, ProductDetail


class ModelTestCase(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        # Connect to a test database to avoid corrupting real data
        connect(
            db="ReCircle_test",
            host="mongodb+srv://mahich:28122005@cluster0.twh2p51.mongodb.net/ReCircle_test?retryWrites=true&w=majority"
        )

    @classmethod
    def tearDownClass(cls):
        disconnect()
        super().tearDownClass()

    def test_product_create(self):
        product = Product(
            product_name="Eco Bottle",
            description="Reusable water bottle",
            price=199.99,
            category="Kitchen",
            offerPrice=149.99,
            instock=50,
            image=["http://example.com/bottle.jpg"],
            seller="seller@example.com",
            isApproved=True
        )
        product.save()
        self.assertIsNotNone(product.id)

    def test_address_create(self):
        address = Address(
            first_name="John",
            last_name="Doe",
            street="123 Green St",
            pincode=110011,
            state="Delhi",
            city="New Delhi",
            phone_number=1234567890,
            country="India"
        )
        address.save()
        self.assertIsNotNone(address.id)

    def test_seller_create(self):
        seller = Seller(
            user="John Seller",
            email="johnseller@example.com",
            password="securepassword"
        )
        seller.save()
        self.assertIsNotNone(seller.id)

    def test_review_create(self):
        # Create dependencies if missing
        if not Seller.objects().first():
            seller = Seller(user="Temp User", email="temp@example.com", password="123456")
            seller.save()
        else:
            seller = Seller.objects().first()

        if not Product.objects().first():
            product = Product(
                product_name="Temp Product",
                description="Temporary",
                price=100,
                category="Misc",
                offerPrice=90,
                instock=10,
                image=[],
                seller=seller.email,
                isApproved=True
            )
            product.save()
        else:
            product = Product.objects().first()

        review = Review(
            product=product,
            user=seller.email,
            rating=5,
            comment="Excellent!"
        )
        review.save()
        self.assertIsNotNone(review.id)
