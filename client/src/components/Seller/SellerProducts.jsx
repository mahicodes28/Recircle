import React, { useContext } from 'react'
import { AppContext } from '../../context/AppProvider'

const SellerProducts = () => {

  const {products, fetchProduct }=useContext(AppContext)
  // Dummy toggleStock for demonstration; replace with your actual function
  const toggleStock = (id, inStock) => {
    // ...your logic here
  };

  return (
     <div className="!no-scrollbar flex-1 h-[95vh] w-full flex flex-col justify-between">
        <div className="w-full md:p-10 p-2 sm:p-4">
            <h2 className="pb-4 text-lg font-medium">All Products</h2>
            <div className="flex flex-col items-center w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
                <table className="min-w-[600px] md:table-auto table-fixed w-full overflow-hidden">
                    <thead className="text-gray-900 text-xs sm:text-sm text-left">
                        <tr>
                            <th className="px-2 sm:px-4 py-3 font-semibold">Product</th>
                            <th className="px-2 sm:px-4 py-3 font-semibold">Category</th>
                            <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">Selling Price</th>
                            <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">MFD</th>
                            <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">Expiry Date</th>
                            <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">Seller</th>
                            <th className="px-2 sm:px-4 py-3 font-semibold">In Stock</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm text-gray-500">
                        {products.map((product, index) => (
                            <tr key={product._id} className="border-t border-gray-500/20">
                                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                                    <span className="truncate w-full">{product.name}</span>
                                </td>
                                <td className="px-2 sm:px-4 py-3">{product.category}</td>
                                <td className="px-2 sm:px-4 py-3 hidden md:table-cell">{product.offerPrice}</td>
                                <td className="px-2 sm:px-4 py-3 hidden md:table-cell">{product.mfd}</td>
                                <td className="px-2 sm:px-4 py-3 hidden md:table-cell">{product.exp}</td>
                                <td className="px-2 sm:px-4 py-3 hidden md:table-cell">{product.seller}</td>
                                <td className="px-2 sm:px-4 py-3">
                                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                        <input onClick={() => toggleStock(product._id, !product.inStock)} defaultChecked={product.inStock} type="checkbox" className="sr-only peer" />
                                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                    </label>
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

export default SellerProducts