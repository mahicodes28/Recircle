import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { useAppContext } from '../context/AppProvider';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const { isAdmin, setisAdmin , axios } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const onSubmitHandler = async (e) => {
        try{
            e.preventDefault();
            const {data} = await axios.post('/api/admin/login', {
                email,
                password
            });
            if (data.success) {
                setisAdmin(true);
                navigate("/admin");
            } else {
                toast.error(data.message);
            }
        }catch (error) {
            toast.error("Something went wrong");
        }
       
    };
    return !isAdmin && (
        <div className="flex p-4 relative items-center justify-center min-h-screen bg-gray-50">
                <div className="logo absolute h-[fit] top-10  right-20 w-[12vw]"><Link to={"/"}><img className='w-full h-full' src="/public/logo.png" alt="" /></Link></div>

            <form
                onSubmit={onSubmitHandler}
                className="flex flex-col !gap-5 w-80 !items-start !p-8 !py-12 rounded-lg shadow-xl !border !border-gray-200 bg-white"
            >
                <p className="!text-2xl !font-medium !m-auto">
                    Admin<span className="text-blue-300">Login</span>
                </p>
                <div className="!w-full">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Email Here"
                        className="!border !border-gray-200 !rounded !w-full !mt-1 !p-2 !outline-primary"
                        required
                    />
                </div>
                <div className="!w-full">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        className="!border !border-gray-200 !rounded !w-full !mt-1 !p-2 !outline-primary"
                        required
                    />
                </div>
                <button className="!bg-blue-300 !text-black !w-full !py-2 !rounded-md !cursor-pointer">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AdminLogin