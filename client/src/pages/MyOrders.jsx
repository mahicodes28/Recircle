import React from 'react'

const MyOrders = () => {
  const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg"

    const orders = [
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    ];
    return (
        <div className="md:p-10 !p-4 !w-[100%]  !px-20 space-y-4">
            <h2 className="text-3xl  flex flex-col gap-5 !font-medium !mb-5">My Orders </h2>
            {orders.map((order, index) => (
                <div key={index} className="flex !mb-5 flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center !gap-20 !p-5 !w-full !rounded-md border border-gray-300 !text-gray-800">
                    <div className="flex !gap-10">
                        <img className="!w-25 !h-25 !object-cover border !opacity-60" src={boxIcon} alt="boxIcon" />
                        <>
                            {order.items.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center">
                                    <p className="font-medium !text-xl">
                                        {item.product.name} <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}>x {item.quantity}</span>
                                    </p>
                                </div>
                            ))}
                        </>
                    </div>

                    <div className="!text-sm">
                        <p className='font-medium mb-1'>{order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street}, {order.address.city}, {order.address.state},{order.address.zipcode}, {order.address.country}</p>
                    </div>

                    <p className="font-medium !text-base !my-auto !font-bold !text-black/70">${order.amount}</p>

                    <div className="flex flex-col text-sm">
                        <p>Method: {order.paymentType}</p>
                        <p>Date: {order.orderDate}</p>
                        <p className={`${order.isPaid? "text-green-500":"text-red-600"}`}> <span className='text-black'>Payment:</span> {order.isPaid ? "Paid" : "Pending"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyOrders