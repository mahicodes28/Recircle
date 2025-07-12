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
            const {data} = await axios.post('http://127.0.0.1:5000/admin/login', {
                email,
                password,

            },{withCredentials: true});
            if (data.success) {
                setisAdmin(true);
                localStorage.setItem('adminToken', data.token);
                navigate("/admin");
                toast.success("Login Successful");
            } else {
                toast.error(data.message);
            }
        }catch (error) {
            toast.error(error);
        }
       
    };
    return !isAdmin && (
        <div className="flex p-4 relative items-center justify-center min-h-screen bg-black">
                <div className="logo absolute h-[10vh] w-fit xl:w-fit md:w-fit md:h-[5vw] xl:h-[5vw] top-10   right-22 w-[12vw]"><Link to={"/"}><img className='w-full h-full' src="/public/logo.png" alt="" /></Link></div>

            <form
                onSubmit={onSubmitHandler}
                className="flex flex-col !gap-5 w-80 !items-start !p-8 !py-12 rounded-lg shadow-xl  bg-gradient-to-tr from-blue-500 via-purple-600 to-indigo-700  "
            >
                <p className="!text-3xl !font-medium text-black !m-auto">
                    Admin<span className="text-white">Login</span>
                </p>
                <div className="!w-full">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Admin Email"
                        className="!border !text-black  !border-white !rounded !w-full !mt-1 !p-2 "
                        required
                    />
                </div>
                <div className="!w-full">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        className="!border-1 !text-black !border-white !rounded !w-full !mt-1 !p-2 "
                        required
                    />
                </div>
                <button className="btn-black active:scale-95 !text-black !w-full !py-2 !rounded-md !cursor-pointer">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AdminLogin