from django.test import TestCase
from mongoengine import connect, disconnect
from myapp.models import (
    Product, Address, Order, Seller, Review,
    ProductDetail, HelpRequest, OrderItem
)

class ModelTestCase(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        disconnect(alias="default")
        connect(
            db="ReCircle_test",
            host="mongodb+srv://mahich:28122005@cluster0.twh2p51.mongodb.net/ReCircle_test?retryWrites=true&w=majority&ssl=true",
            alias="default"
        )

    @classmethod
    def tearDownClass(cls):
        disconnect(alias="default")
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
            email="john@example.com",
            street="123 Green St",
            pincode=110011,
            state="Delhi",
            city="New Delhi",
            phone_number="1234567890",
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

    def test_help_request_create(self):
        help_req = HelpRequest(
            full_name="Jane Doe",
            email="jane@example.com",
            message="I need help with an order."
        )
        help_req.save()
        self.assertEqual(help_req.status, "Open")

    def test_order_create(self):
        address = Address(
            first_name="Order",
            last_name="User",
            email="orderuser@example.com",
            street="456 Eco Ave",
            pincode=110022,
            state="Delhi",
            city="Delhi",
            phone_number="9876543210",
            country="India"
        )
        address.save()

        item = OrderItem(
            product_name="Eco Plate",
            quantity=2,
            price=99.0
        )

        order = Order(
            userID="orderuser123",
            items=[item],
            amount=198.0,
            status="DELIVERED",
            payment_type="CASH",
            payment_status="PAID",
            customer=address
        )
        order.save()
        self.assertEqual(order.status, "DELIVERED")

    def test_product_detail_create(self):
        product = Product(
            product_name="Eco Pen",
            description="Reusable pen",
            price=49.0,
            category="Stationery",
            offerPrice=39.0,
            instock=100,
            image=[],
            seller="seller@example.com"
        )
        product.save()

        detail = ProductDetail(
            product=product,
            material="Bamboo",
            color="Brown",
            brand="GreenWrite",
            warranty="6 months",
            features=["Eco-friendly", "Refillable"]
        )
        detail.save()
        self.assertEqual(detail.product.product_name, "Eco Pen")
