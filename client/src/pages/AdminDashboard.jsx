import React from 'react'
import { useAppContext } from '../context/AppProvider'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

  const {isAdmin , setisAdmin} = useAppContext();
  const navigate = useNavigate();


  return (
  <div className='min-h-screen'>
     <div className='shadow py-4'>
            <div className='px-5 flex justify-between items-center'>
                {/* logo here istead of h1 */}
                <h1 className='text-3xl'>Re<span className='text-red-300'>Circle</span></h1>
                <div className='flex items-center gap-3'>
                    <p className='max-sm:hidden'>Welcome, Admin</p>
                    <div className='relative group'>
                       {/* an admin image here or any profile image */}
                        <h1 className='text-sm '>Admin Logo</h1>
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                            <ul className='list-none m-0 p-2 bg-white rounded-md border border-gray-200 text-sm'>
                                <li onClick={()=>{setisAdmin(false);navigate('/admin')}} className='py-1 px-2 cursor-pointer pr-10'>LogOut</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default AdminDashboard