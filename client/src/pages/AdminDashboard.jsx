import React from 'react'
import { useAppContext } from '../context/AppProvider'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdInventory2 } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { assets } from '../assets/asset';

const AdminDashboard = () => {

  const {isAdmin , setisAdmin , axios} = useAppContext();
  const navigate = useNavigate();

   const logout = async () => {
    localStorage.removeItem('adminToken');
    setisAdmin(false);
    toast.success("Logged out successfully");
    navigate('/admin')
    }


  return (
  <div className='min-h-screen'>

    {/* Navbar */}
     <div className='!shadow !text-white !py-4'>
            <div className='!px-5 !flex !justify-between !items-center'>
                {/* logo here istead of h1 */}
                                <div className="logo h-[100%] w-[12vh] md:w-[9vw] xl:w-[9vw]"><Link to={"/"}><img className='w-full h-full' src="/public/logo.png" alt="" /></Link></div>

                <div className='!flex !items-center !gap-3'>
                    <p className='!max-sm:hidden '>Welcome, Admin</p>
                    <div className='!relative group'>
                       {/* an admin image here or any profile image */}
                        <img className='w-4 h-4' src={assets.userProfile} alt="" />
                        <div onClick={logout} className='absolute active:scale-95 cursor-pointer hidden grpup-active:block group-hover:block !top-[195%] !right-[-400%] -translate-x-[50%] -translate-y-[50%] !z-10 !text-black !rounded pt-12'>
                            <ul className='!list-none w-[fit] !m-0 !p-0 !bg-white !rounded-md !border !border-gray-200 !text-sm'>
                                <li  className='link !py-1 !px-2 !cursor-pointer !pr-10'>LogOut</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* sidebar for all functions of admin */}
        <div className='!flex  !items-start'>
          {/* left side bar */}
          <div className='!inline-block h- !sticky top-0   '> 
            <ul className='!flex !flex-col  !items-start !pt-5 !text-white  '>
                <NavLink className={({isActive})=>`flex !items-center !p-3 xl:!px-6 md:px-6 !gap-2 !w-full hover:!bg-white hover:!text-black ${isActive && 'bg-white text-black border-r-4 border-blue-500'}`} to={'/admin/product-list'} >
                    {/* <img className='min-w-4' src={assets.add_icon} alt="" /> */}
                    <MdInventory2 className='!text-xl' />
                    <p className='!max-sm:hidden'>All Products</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex !items-center !p-3 xl:!px-6 md:px-6 !gap-2 !w-full hover:!bg-white hover:!text-black ${isActive && 'bg-white text-black border-r-4 border-blue-500'}`} to={'/admin/new-product'} >
                    <FaClipboardList className='!text-xl' />
                    {/* <img className='min-w-4'  src={assets.home_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>Product Requests</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex !items-center !p-3 xl:!px-6 md:px-6 !gap-2 !w-full hover:!bg-white hover:!text-black ${isActive && 'bg-white text-black border-r-4 border-blue-500'}`}  to={'/admin/seller-list'} >
                    <FaUserCheck className='!text-xl' />
                    {/* <img className='min-w-4' src={assets.person_tick_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>See Sellers</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex !items-center !p-3 xl:!px-6 md:px-6 !gap-2 !w-full hover:!bg-white hover:!text-black ${isActive && 'bg-white text-black border-r-4 border-blue-500'}'}`}  to={'/admin/banners'} >
                    <FaUserCheck className='!text-xl' />
                    {/* <img className='min-w-4' src={assets.person_tick_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>See Banners</p>
                </NavLink>
            </ul>
          </div>
          <div className=''>
            <Outlet/>
          </div>
      </div>
  </div>
  )
}

export default AdminDashboard