import React, { useContext, useEffect, useState } from 'react'
import { AppContext, useAppContext } from '../context/AppProvider'
import { toast } from 'react-toastify';
import axios from 'axios';

const AllSellers = () => {
  

  const {isAdmin} = useContext(AppContext);

  const [sellers , setSellers] = useState([]);

  const fetchSellers = async ()=>{
      try{
        const token = localStorage.getItem('adminToken');
        const { data } = await axios.get('http://127.0.0.1:5000/admin/seller' , {
          headers:{
            Authorization :  `Bearer ${token}`,
          }
        });
        console.log(data);
       if (data.success) {
         setSellers(data.sellers);
       } else {
         toast.error(data.message);
       }
     } catch (error) {
       toast.error("Something went wrong");
     }

   }


  const toggleSellerBlock = async (sellerId, isBlocked) => {
  try {
     const token = localStorage.getItem('adminToken');
    const { data } = await axios.patch(`http://127.0.0.1:5000/admin/seller/toggle/${sellerId}/`, {
      is_blocked: !(isBlocked === true),
    }, {
          headers:{
            Authorization :  `Bearer ${token}`,
          }
        });
    if (data.success) {
      toast.success(data.message);
      fetchSellers(); // refresh seller list
    } else {
      toast.error(data.error);
    }
  } catch (error) {
    toast.error("failed to update seller status");
  }
};

const deleteSeller = async (sellerId) => {
  try {
     const token = localStorage.getItem('adminToken');
    const response = await axios.delete(`http://127.0.0.1:5000/admin/seller/delete/${sellerId}`, {
          headers:{
            Authorization :  `Bearer ${token}`,
          }
        });

    if (response.data.success) {
      toast.success("Seller deleted successfully");
      fetchSellers(); // refresh seller list
    } else {
      toast.error(response.data.message);
    }
  } catch (err) {
    toast.error(err.response?.data?.message || "Something went wrong");
  }
};


useEffect(()=>{
  fetchSellers();
},[isAdmin])
  return (
    <div className="!no-scrollbar flex-1 !border-l-2 !border-gray-200  w-full flex flex-col justify-between">
      <div className="w-full md:p-6 !p-2 md:!p-4 xl:!p-4">
        <h2 className="pb-4 text-lg font-medium xl:!pb-4 xl:text-4xl xl:font-[500] md:!pb-4 md:text-4xl md:font-[500]">
          All Sellers
        </h2>

        <div className="flex flex-col items-center w-full overflow-x-auto rounded-md bg-white border border-gray-500/20">
          <table className="!max-w-screen xl:min-w-[85vw] xl:!max-w-screen md:table-auto table-fixed w-full overflow-hidden text-xs sm:text-sm text-black">
            <thead className="text-gray-900">
              <tr>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-center">#</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left">Name</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left hidden sm:table-cell">Total Products</th>
                <th className="!px-2 xl:!px-4 xl:!py-4 !py-3 font-semibold text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5 text-center">{index + 1}</td>
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5">
                    <span>{seller.user}</span>
                  </td>
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5 hidden sm:table-cell">
                    {seller.totalproducts}
                  </td>
                  <td className="!px-2 xl:!px-4 xl:!py-6 md:!py-4 !py-5">
                    <div className="relative inline-block text-left group">
                      <button className="text-xl font-bold text-gray-500">⋯</button>
                      <div className="z-10 hidden group-hover:block absolute top-7 right-0 w-32 bg-white border border-gray-200 rounded shadow-lg">
                        <button onClick={()=>{toggleSellerBlock(seller._id , seller.is_blocked)}} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                          {seller.is_blocked ? "Unblock" : "Block"}
                        </button>
                        <button onClick={() => deleteSeller(seller._id)} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                          Remove
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

export default AllSellers
