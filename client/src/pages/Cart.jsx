import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [showAddress, setShowAddress] = React.useState(false);
    const [address, setAddress] = React.useState(null); // Store selected address as object
    const [showAddAddress, setShowAddAddress] = React.useState(false);
    const [newAddress, setNewAddress] = React.useState({
        street: "",
        city: "",
        apartment: "",
        floor: "",
        pincode: "",
        country: "",
        state: "",
        phone: "",
        name: "",
    });
    const [products, setProducts] = React.useState([
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png", category: "Footwear", },
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png", category: "Footwear", },
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", category: "Footwear", },
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", category: "Footwear", },
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", category: "Footwear", },
    ]);

    // Calculate totals
    const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);
    const totalPrice = products.reduce((sum, p) => sum + p.offerPrice * p.quantity, 0);
    const shippingFee = 0; // Free shipping
    const tax = Math.round(totalPrice * 0.02);
    const totalAmount = totalPrice + shippingFee + tax;

    const handleSelectAddress = (selected) => {
        setAddress(selected);
        setShowAddress(false);
        setShowAddAddress(false);
    };

    const handleAddAddress = () => {
        // Simple validation: all fields required
        for (let key in newAddress) {
            if (!newAddress[key]) {
                alert("Please fill all address fields.");
                return;
            }
        }
        setAddress({ ...newAddress });
        setShowAddAddress(false);
        setShowAddress(false);
        setNewAddress({
            street: "",
            city: "",
            apartment: "",
            floor: "",
            pincode: "",
            country: "",
            state: "",
            phone: "",
            name: "",
        });
    };

    // Delete product handler
    const handleDeleteProduct = (indexToDelete) => {
        setProducts((prev) => prev.filter((_, idx) => idx !== indexToDelete));
    };

    //return to back page
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row !py-10 w-full gap-10 !px-20 relative">
            {/* Scrollable items section */}
            <div className="flex-1 px-4 rounded-xl max-w-4xl" style={{ maxHeight: "calc(100% - 4rem)" }}>
                {/* Sticky Shopping Cart Title */}
                <div
                    className="!bg-white z-10 shadow-md !px-2"
                    style={{
                        position: "sticky",
                        top: 0,
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                    }}
                >
                    <h1 className="!text-[4vw] font-medium px-4 !mb-4">
                        Your Cart <span className="text-[1.2vw] text-indigo-500">{totalItems} Items</span>
                    </h1>
                    {/* Sticky Product Details Header */}
                    <div
                        className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-xl font-medium pb-2 bg-white"
                        style={{
                            position: "sticky",
                            top: "5.5rem",
                            zIndex: 10,
                        }}
                    >
                        <p className="text-left">Product Details</p>
                        <p className="text-center">Subtotal</p>
                        <p className="text-center">Action</p>
                    </div>
                </div>

                <div>
                    {products.map((product, index) => (
                        <div key={index} className="grid mb-2 shadow-md grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-xl md:text-base font-medium pt-6 bg-white">
                            <div className="flex items-center md:gap-6 gap-8">
                                <div className="cursor-pointer w-35 h-35 flex items-center justify-center shadow-lg rounded-md">
                                    <img className="max-w-full h-full object-cover" src={product.image} alt={product.name} />
                                </div>
                                <div>
                                    <p className="hidden md:block font-semibold">{product.name}</p>
                                    <div className="font-normal text-gray-500/70">
                                        <p>Size: <span>{product.size || "N/A"}</span></p>
                                        <div className="flex items-center">
                                            <p>Qty:</p>
                                            <select
                                                className="outline-none"
                                                value={product.quantity}
                                                onChange={e => {
                                                    const qty = Number(e.target.value);
                                                    setProducts(prev =>
                                                        prev.map((p, idx) =>
                                                            idx === index ? { ...p, quantity: qty } : p
                                                        )
                                                    );
                                                }}
                                            >
                                                {Array(5).fill('').map((_, idx) => (
                                                    <option key={idx} value={idx + 1}>{idx + 1}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xl font-[500]">${product.offerPrice * product.quantity}</p>
                            <button
                                className="cursor-pointer !max-w-xl !mx-auto"
                                onClick={() => handleDeleteProduct(index)}
                                title="Delete Product"
                            >
                                <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <Button onClick={() => navigate(-1)} className="group btn-org w-full cursor-pointer flex items-center !mt-8 gap-2 hover:!bg-black font-medium">
                    <svg width="20" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#f5f5f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </Button>
            </div>

            {/* Sticky order summary within cart section */}
            <div
                className="max-w-[35%] w-full bg-gray-100/40 rounded-lg !p-5 border border-gray-300/70"
                style={{
                    position: "sticky",
                    top: "2rem",
                    alignSelf: "flex-start",
                    height: "fit-content",
                }}
            >
                <h2 className="text-xl md:text-3xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 !my-7" />

                <div className="!mb-6">
                    <p className="text-md font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start !mt-2">
                        <div className="text-gray-500 w-full pr-2">
                            {address ? (
                                <div className="space-y-1">
                                    <div className="font-semibold text-black">{address.name}</div>
                                    <div>
                                        {address.street}
                                        {address.apartment && <span>, Apt {address.apartment}</span>}
                                        {address.floor && <span>, Floor {address.floor}</span>}
                                    </div>
                                    <div>
                                        {address.city}, {address.state}
                                    </div>
                                    <div>
                                        {address.country} - {address.pincode}
                                    </div>
                                    <div>
                                        <span className="font-medium">Phone:</span> {address.phone}
                                    </div>
                                </div>
                            ) : (
                                <span>No address found</span>
                            )}
                        </div>
                        <button
                            onClick={() => {
                                setShowAddress((prev) => !prev);
                                setShowAddAddress(false);
                            }}
                            className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute !top-12 !py-2 !px-3 bg-[white] rounded border border-gray-300 !text-sm w-full z-20">
                                <p
                                    onClick={() => handleSelectAddress({
                                        name: "John Doe",
                                        street: "123 Main St",
                                        apartment: "12B",
                                        floor: "3",
                                        city: "New York",
                                        state: "NY",
                                        country: "USA",
                                        pincode: "10001",
                                        phone: "1234567890"
                                    })}
                                    className="text-gray-500 shadow-md  !p-2 bg-gray-100 rounded cursor-pointer"
                                >
                                    Use Example Address
                                </p>
                                {/* Hide Add address button when form is open */}
                                {!showAddAddress && (
                                    <p
                                        onClick={() => setShowAddAddress(true)}
                                        className="text-indigo-500 text-center cursor-pointer !p-1 hover:bg-indigo-500/10"
                                    >
                                        Add address
                                    </p>
                                )}
                                {showAddAddress && (
                                    <div className="!p-4 !border-t !border-gray-200 bg-white !rounded-lg !shadow-md">
                                        <form
                                            onSubmit={e => {
                                                e.preventDefault();
                                                handleAddAddress();
                                            }}
                                            className="space-y-0"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Full Name"
                                                        value={newAddress.name}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, name: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Phone Number"
                                                        value={newAddress.phone}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, phone: e.target.value }))}
                                                    />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Street Address</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Street Address"
                                                        value={newAddress.street}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, street: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Apartment Number</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Apartment Number"
                                                        value={newAddress.apartment}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, apartment: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Floor</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Floor"
                                                        value={newAddress.floor}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, floor: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">City</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="City"
                                                        value={newAddress.city}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, city: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">State</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="State"
                                                        value={newAddress.state}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, state: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Country</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Country"
                                                        value={newAddress.country}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, country: e.target.value }))}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block !text-sm !font-medium text-gray-700 !mb-1">Pincode</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-300 rounded !px-3 !py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                                        placeholder="Pincode"
                                                        value={newAddress.pincode}
                                                        onChange={e => setNewAddress(addr => ({ ...addr, pincode: e.target.value }))}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex !gap-2 !mt-2">
                                                <Button
                                                    type="submit"
                                                    className="btn-org !bg-blue-500 text-white !px-4 !py-2 rounded"
                                                >
                                                    Save
                                                </Button>
                                                <Button
                                                    className="bg-gray-300 text-black !px-4 !py-2 rounded"
                                                    onClick={() => setShowAddAddress(false)}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <p className="!text-sm !font-medium !uppercase !mt-6">Payment Method</p>

                    <select className="w-full border border-gray-300 bg-white !px-3 !py-2 !mt-2 rounded-md outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 !mt-4 !space-y-3">
                    <p className="flex justify-between">
                        <span>Price</span><span>${totalPrice}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">{shippingFee === 0 ? "Free" : `$${shippingFee}`}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>${tax}</span>
                    </p>
                    <p className="flex justify-between !text-lg font-medium !mt-3">
                        <span>Total Amount:</span><span>${totalAmount}</span>
                    </p>
                </div>

                <button className="w-full !py-3 !mt-6 cursor-pointer bg-blue-400 text-white font-medium hover:bg-black rounded-md transition">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Cart;