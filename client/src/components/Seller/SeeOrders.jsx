import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppProvider';

const SeeOrders = () => {
  
  const { fetchOrders, orders } = useContext(AppContext);

useEffect(() => {
  fetchOrders();
}, []);

  return (
    <div className="md:p-10 !p-2 w-full !px-2 sm:!px-6 md:px-20 space-y-4 overflow-y-auto max-h-[90vh]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl flex flex-col gap-5 !font-medium !mb-5">My Orders</h2>
      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center !gap-10 md:!gap-20 !p-3 sm:!p-5 w-full rounded-md border border-gray-300 text-gray-800"
        >
          <div className="flex gap-4 sm:gap-10 items-center">
            <img className="w-16 h-16 sm:w-20 sm:h-20 object-cover border opacity-60" src={boxIcon} alt="boxIcon" />
            <div>
              {order.items.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-center">
                  <p className="font-medium text-base sm:text-xl">
                    {item.product.name}
                    <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}> x {item.quantity}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs sm:text-sm">
            <p className='font-medium mb-1'>{order.address.firstName} {order.address.lastName}</p>
            <p>
              {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country}
            </p>
          </div>

          <p className="font-medium text-base sm:text-lg my-auto font-bold text-black/70">${order.amount}</p>

          <div className="flex flex-col text-xs sm:text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {order.orderDate}</p>
            <p className={`${order.isPaid ? "text-green-500" : "text-red-600"}`}>
              <span className='text-black'>Payment:</span> {order.isPaid ? "Paid" : "Pending"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeeOrders