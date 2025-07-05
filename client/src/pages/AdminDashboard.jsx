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
        try{
            const {data} = await axios.get('/api/admin/logout');
            if (data.success) {
                toast.success(data.message);
                setisAdmin(false)
                navigate("/");
            }else{
                toast.error(data.message);
            }
        }catch (error) {
            toast.error("Something went wrong");
        }
    }


  return (
  <div className='min-h-screen'>

    {/* Navbar */}
     <div className='!shadow !py-4'>
            <div className='!px-5 !flex !justify-between !items-center'>
                {/* logo here istead of h1 */}
                                <div className="logo h-[100%] w-[9vw]"><Link to={"/"}><img className='w-full h-full' src="/public/logo.png" alt="" /></Link></div>

                <div className='!flex !items-center !gap-3'>
                    <p className='!max-sm:hidden'>Welcome, Admin</p>
                    <div className='!relative group'>
                       {/* an admin image here or any profile image */}
                        <img className='w-4 h-4' src={assets.userProfile} alt="" />
                        <div className='absolute  hidden group-hover:block !top-[50%] !right-[-80%] -translate-x-[50%] -translate-y-[50%] !z-10 !text-black !rounded pt-12'>
                            <ul className='!list-none w-[fit] !m-0 !p-0 !bg-white !rounded-md !border !border-gray-200 !text-sm'>
                                <li onClick={logout} className='link !py-1 !px-2 !cursor-pointer !pr-10'>LogOut</li>
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
                <NavLink className={({isActive})=>`flex !items-center !p-3 !sm:px-6 !gap-2 !w-full !hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/admin/product-list'} >
                    {/* <img className='min-w-4' src={assets.add_icon} alt="" /> */}
                    <MdInventory2 className='!text-xl' />
                    <p className='!max-sm:hidden'>All Products</p>
                </NavLink>
                <NavLink className={({isActive})=>`!flex !items-center !p-3 !sm:px-6 !gap-2 !w-full !hover:bg-gray-100 ${isActive && ' !bg-blue-100  !border-r-4 !border-blue-500'}`} to={'/admin/new-product'} >
                    <FaClipboardList className='!text-xl' />
                    {/* <img className='min-w-4'  src={assets.home_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>Product Requests</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex !items-center !p-3 !sm:px-6 !gap-2 !w-full !hover:bg-gray-100 ${isActive && '!bg-blue-100 !border-r-4 !border-blue-500'}`}  to={'/admin/seller-list'} >
                    <FaUserCheck className='!text-xl' />
                    {/* <img className='min-w-4' src={assets.person_tick_icon} alt="" /> */}
                    <p className='!max-sm:hidden'>See Sellers</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex !items-center !p-3 !sm:px-6 !gap-2 !w-full !hover:bg-gray-100 ${isActive && '!bg-blue-100 !border-r-4 !border-blue-500'}`}  to={'/admin/banners'} >
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