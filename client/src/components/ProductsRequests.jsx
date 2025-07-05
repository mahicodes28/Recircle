import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppProvider';

const ProductsRequests = () => {

    const { products, fetchProduct } = useAppContext();


    const acceptProduct = async (id) => {
    await fetch(`/api/product/${id}/accept`, { method: 'PATCH' });
    fetchProduct(); 
    };

    const rejectProduct = async (id) => {
    await fetch(`/api/product/${id}/reject`, { method: 'PATCH' });
    fetchProduct(); 
    };

    useEffect(()=>{
        fetchProduct();
    },[])

  return (
    <div className='!container p-2 sm:p-4 mx-auto'>
        <div className="w-full overflow-x-auto">
            <table className='w-full max-w-4xl bg-white border border-gray-200 text-xs sm:text-sm'>
                <thead>
                    <tr className='border-b border-gray-200'>
                        <th className="px-2 sm:px-4 py-3 font-semibold">Product</th>
                        <th className="px-2 sm:px-4 py-3 font-semibold">Category</th>
                        <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">Selling Price</th>
                        <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">MFD</th>
                        <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">Expiry Date</th>
                        <th className="px-2 sm:px-4 py-3 font-semibold hidden md:table-cell">Seller</th>
                        <th className='py-2 px-2 sm:px-4 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
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
                            <td className='py-2 px-2 sm:px-4 border-b relative border-gray-200'>
                                <div className='relative inline-block text-left group'>
                                    <button className='text-gray-500 action-button' >...</button>
                                    <div className='z-10 hidden absolute right-0 left-0 top-0 w-32 bg-white border border-gray-200 rounded shadow group-hover:block'>
                                        <button onClick={()=>{acceptProduct(product._id)}} className='block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100'>Accept</button>
                                        <button onClick={()=>{rejectProduct(product._id)}} className='block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Reject</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductsRequests