import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppProvider'

const ProductsRequests = () => {
//   const { products, fetchProduct } = useAppContext()
const products = [
  {
    _id: "1",
    name: "Organic Green Tea",
    category: "Beverage",
    offerPrice: "₹199",
    mfd: "2025-01-15",
    exp: "2026-01-15",
    seller: "Nature's Basket",
    inStock: true,
  },
  {
    _id: "2",
    name: "Bluetooth Headphones",
    category: "Electronics",
    offerPrice: "₹2,499",
    mfd: "2024-12-01",
    exp: "N/A",
    seller: "TechZone India",
    inStock: false,
  },
  {
    _id: "3",
    name: "Daily Multivitamins",
    category: "Health",
    offerPrice: "₹899",
    mfd: "2025-03-20",
    exp: "2026-03-20",
    seller: "Wellness Co.",
    inStock: true,
  },
  {
    _id: "4",
    name: "Cotton T-Shirt",
    category: "Clothing",
    offerPrice: "₹499",
    mfd: "2025-06-01",
    exp: "N/A",
    seller: "Urban Threads",
    inStock: true,
  }
];

  const acceptProduct = async (id) => {
    await fetch(`/api/product/${id}/accept`, { method: 'PATCH' })
    fetchProduct()
  }

  const rejectProduct = async (id) => {
    await fetch(`/api/product/${id}/reject`, { method: 'PATCH' })
    fetchProduct()
  }

//   useEffect(() => {
//     fetchProduct()
//   }, [])

  return (
    <div className="!no-scrollbar flex-1 !border-l-2 !border-gray-200 min-h-screen  w-full flex flex-col justify-between">
      <div className="w-full md:p-6 !p-2 md:!p-4 xl:!p-4">
        <h2 className="pb-4 text-lg font-medium xl:!pb-4 xl:text-4xl xl:font-[500] md:!pb-4 md:text-4xl md:font-[500]">
          Product Requests
        </h2>

        <div className="flex flex-col items-center w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
          <table className="!max-w-screen xl:min-w-[85vw] xl:!max-w-screen md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-xs sm:text-sm text-left">
              <tr>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold">Product</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold">Category</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">Selling Price</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">MFD</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">Expiry Date</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">Seller</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm text-black">
              {products.map((product) => (
                <tr key={product._id} className="border-t border-gray-500/20">
                  <td className="xl:!px-4 !pl-2 xl:!pl-4 xl:!py-6 md:!py-4 !px-4 !py-5 flex items-center space-x-3">
                    <span className="truncate w-full">{product.name}</span>
                  </td>
                  <td className="!px-2 xl:!px-4 xl:!py-4 !py-3">{product.category}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-4 !py-3 hidden md:table-cell">{product.offerPrice}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-4 !py-3 hidden md:table-cell">{product.mfd}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-4 !py-3 hidden md:table-cell">{product.exp}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-4 !py-3 hidden md:table-cell">{product.seller}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-4 !py-3">
                    <div className="relative inline-block text-left group">
                      <button className="text-xl font-bold text-gray-500">⋯</button>
                      <div className="z-10 hidden group-hover:block absolute top-7 right-0 w-32 bg-white border border-gray-200 rounded shadow-lg">
                        <button
                          onClick={() => acceptProduct(product._id)}
                          className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => rejectProduct(product._id)}
                          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductsRequests
