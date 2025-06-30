import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { MdInventory2, MdAddBox, MdListAlt } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";

const SellerDashboard = () => {
  return (
    <div className='sellerDashboard '>

    {/* Navbar */}
     <div className='!shadow !py-4'>
            <div className='!px-5 !flex !justify-between !items-center'>
                {/* logo here istead of h1 */}
                <div className="logo h-[100%] w-[9vw]"><img className='w-full h-full' src="/public/logo.png" alt="" /></div>
                <div className='!flex !items-center !gap-3'>
                    <p className='!max-sm:hidden'>Welcome, Seller</p>
                    <div className='!relative group'>
                       {/* an admin image here or any profile image */}
                        <h1 className='!text-sm '>Seller Logo</h1>
                        <div className='absolute hidden group-hover:block !top-0 cursor-pointer !right-0 !z-10 !text-black !rounded !pt-10'>
                            <ul className='!list-none !m-0 !p-2 !bg-indigo-500 !text-white !rounded-md !border hover:!bg-black hover:!text-white !border-gray-200 !text-sm'>
                                <li onClick={()=>{setisAdmin(false);navigate('/admin')}} className='!py-1 !px-2 !cursor-pointer !pr-10'>LogOut</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* sidebar for all functions of admin */}
        <div className='!flex !items-start'>
          {/* left side bar */}
          <div className='!inline-block  !min-h-screen !border-r-2 !border-gray-200'> 
            <ul className='!flex !flex-col !items-start !pt-5 !text-gray-800  '>
                <NavLink className={({isActive})=>`flex !items-center !p-3 !sm:px-6 !gap-2 !w-full !hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/seller/product-list'} >
                    {/* <img className='min-w-4' src={assets.add_icon} alt="" /> */}
                    <MdInventory2 className='!text-xl' />
                    <p className='!max-sm:hidden'>All Products</p>
                </NavLink>
                <NavLink className={({isActive})=>`!flex !items-center !p-3 !sm:px-6 !gap-2 !w-full !hover:bg-gray-100 ${isActive && ' !bg-blue-100  !border-r-4 !border-blue-500'}`} to={'/seller/orders'} >
                    <FaBoxOpen className='!text-xl' />
                    {/* <img className='min-w-4'  src={assets.home_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>Orders</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex !items-center !p-3 !sm:px-6 mt-2 !gap-2 !w-full !hover:bg-gray-100 ${isActive && '!bg-blue-100 !border-r-4 !border-blue-500'}`}  to={'/seller/add-product'} >
                    <MdAddBox className='!text-xl' />
                    {/* <img className='min-w-4' src={assets.person_tick_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>Add Product</p>
                </NavLink>
            </ul>
          </div>
          <div className='rightSection !py-4 !px-2 overflow-y-scroll'>
            <Outlet/>
          </div>
      </div>
  </div>
  )
}

export default SellerDashboard