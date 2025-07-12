import React, { use, useContext, useEffect, useState } from 'react'
import { AppContext, useAppContext } from '../context/AppProvider'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const AllProducts = () => {

    const {isAdmin} = useContext(AppContext);

    const [products , setProducts]=useState([]);

    const fetchAllProducts = async () => {

        try {

            const token = localStorage.getItem('adminToken');
             const { data } = await axios.get('http://localhost:5000/admin/allproducts', {
                 headers: {
                        Authorization: `Bearer ${token}`,
                 },
            });

            if(data.success){
                setProducts(data.products);
            }else{
                toast.error(data.message);
            }
            
        } catch (error) {
            toast.error('Failed to fetch Products');
        }
    }

    useEffect(()=>{
        fetchAllProducts();
    },[isAdmin]);

    return (
        <div className="!no-scrollbar flex-1 !border-l-2 !border-gray-200 min-h-screen w-full flex flex-col justify-between">
            <div className="w-full md:p-6 !p-2 md:!p-4 xl:!p-4">
                <h2 className="pb-4 text-lg font-medium xl:!pb-4 xl:text-4xl xl:font-[500] md:!pb-4 md:text-4xl md:font-[500]">All Products</h2>
                <div className="flex flex-col items-center w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
                    <table className="!max-w-screen xl:min-w-[85vw] xl:!max-w-screen md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-xs sm:text-sm text-left">
                            <tr>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold">#</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold">Product</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold">Category</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">Selling Price</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">MFD</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">Expiry Date</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold hidden md:table-cell">Seller</th>
                                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 text-left font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs :text-sm !text-black">
                            {products.map((product, index) => (
                                <tr key={product._id} className="border-t border-gray-500/20">
                                    <td className='!pl-2'><img className=' w-8 h-8' src={product.image[0]} alt="" /></td>
                                    <td className="xl:!px-4 !pl-2 xl:!pl-4 xl:!py-6 md:!py-4 !px-4 !py-5 flex items-center space-x-3">
                                        <span className="truncate w-full">{product.product_name}</span>
                                    </td>
                                    <td className="!px-2 xl:!px-4 xl:!py-4 !py-3 ">{product.category}</td>
                                    <td className="!px-2 xl:!px-4 xl:!py-4 !py-3  hidden md:table-cell">{product.offerPrice}</td>
                                    <td className="!px-2 xl:!px-4 xl:!py-4 !py-3  hidden md:table-cell">{product.mfd}</td>
                                    <td className="!px-2 xl:!px-4 xl:!py-4 !py-3  hidden md:table-cell">{product.exp}</td>
                                    <td className="!px-2 xl:!px-4 xl:!py-4 !py-3  hidden md:table-cell">{product.seller.name}</td>
                                    <td className="!px-2 xl:!px-4 xl:!py-4 !py-3 ">
                                        {product.isApproved}
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

export default AllProducts