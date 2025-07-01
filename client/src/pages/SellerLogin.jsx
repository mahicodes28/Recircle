import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import { Link, useNavigate } from 'react-router-dom';

const SellerLogin = () => {
  const {isseller , setIsSeller } =useContext(AppContext)
  const navigate = useNavigate();
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ()=>{
    setIsSeller(true);
  navigate('/seller');
  }

  return (
    <div className="flex relative min-h-screen items-center justify-center bg-gray-50">
                <div className="logo absolute h-[fit] top-10  right-20 w-[12vw]"><Link to={"/"}><img className='w-full h-full' src="/public/logo.png" alt="" /></Link></div>

      <form className="flex flex-col gap-6 w-80 sm:w-[352px] !p-8 !py-12 rounded-xl shadow-2xl border border-gray-200 bg-white">
        <p className="text-2xl font-semibold text-center !mb-2">
          <span className="text-indigo-500">Seller</span> {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <label className="block text-gray-700 !mb-1">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md w-full !p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full">
          <label className="block text-gray-700 !mb-1">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md w-full !p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            type="email"
            autoComplete="username"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700 !mb-1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md w-full !p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        {state === "register" ? (
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-indigo-500 cursor-pointer font-medium hover:underline"
            >
              click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-center">
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-indigo-500 cursor-pointer font-medium hover:underline"
            >
              click here
            </span>
          </p>
        )}
        <button onClick={handleLogin}
          className="!mt-2 bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full !py-2 rounded-md font-semibold shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="submit"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  )
}

export default SellerLogin