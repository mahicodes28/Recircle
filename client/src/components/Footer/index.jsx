import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LiaFacebookF } from "react-icons/lia";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { UserButton, useClerk , useUser } from '@clerk/clerk-react'



const Footer = () => {
        const {openSignIn} = useClerk();
    const {user}=useUser();

  return (
    <>
      <div className="!py-10 w-full min-h-[15vw] ">
        <div className="container w-[100%] mx-auto -!pt-6  !pb-10 h-[15vw]  ">
          <div className="flex items-center w-full h-full justify-center border-0  hover:border-blue-600 rounded-[.7vw]  gap-2">
            <div className="col group flex flex-col h-[10vw] items-center relative justify-center gap-2 w-[25%]">
              <LiaShippingFastSolid className="text-5xl  absolute left-1/2 top-5 group-hover:text-blue-600 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-2xl font-semibold">Free Shipping</h1>
              <p className="text-sm">Free shipping on all orders over $100</p>
            </div>
          <div className="col group flex flex-col h-[10vw] items-center relative justify-center gap-2 w-[25%]">
              <RiSecurePaymentLine className="text-5xl absolute left-1/2 top-5 group-hover:text-blue-600 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-2xl font-semibold">Secure Payments</h1>
              <p className="text-sm">UPI/Cards Accepted</p>
            </div>
          <div className="col group flex flex-col h-[10vw] items-center relative justify-center gap-2 w-[25%]">
              <BiSupport  className="text-5xl absolute left-1/2 top-5 group-hover:text-blue-600 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-2xl font-semibold">24/4 Support</h1>
              <p className="text-sm">Contact Us Anytime</p>
            </div>
           <div className="col group flex flex-col h-[10vw] items-center relative justify-center gap-2 w-[25%]">
              <GiReturnArrow  className="text-5xl absolute left-1/2 top-5 group-hover:text-blue-600 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-2xl font-semibold">3 Days Return</h1>
              <p className="text-sm">For an Replacement Product</p>
            </div>
          
          </div>
          <br /><br />
        </div>
        
        <div className="footer flex border-t-2 border-gray-400 shadow-md !px-19 h-[20vw]   w-full !py-12 ">
            <div className="part1 w-[30%]">
                <h2 className="text-3xl text-semibold !mb-2">Contact Us</h2>
                <p className="text-md font-medium text-gray-500 !mb-2">Adress - Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />Nemo, impedit.
                </p>
                <Link className="link !text-xl text-gray-500" to="mailto:someone@example.com">sales@yourcompany.com</Link>
                <span className="text-xl text-red-600  !mt-2 block">+91 29021-09237</span>
            </div>
            <div className="part2 w-[40%] !px-10 border-l-2 border-r-2 border-gray-400 flex ">
                <div className="part2_col1 w-[50%]">
                <h2 className="text-3xl text-semibold !mb-2 ">Products</h2>
                    <ul className="">
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>item</Link>
                        </li>
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>item</Link>
                        </li>
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>item</Link>
                        </li>
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>item</Link>
                        </li>
                    </ul>
                </div>
                  <div className="part2_col2 w-50%">
                <h2 className="text-3xl text-semibold !mb-2 ">Our Company</h2>
                    <ul className="">
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>Deliver</Link>
                        </li>
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>Legal Notice</Link>
                        </li>
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>Terms and Condtions</Link>
                        </li>
                        
                        <li className="list-none !mb-1 ">
                            <Link className="link  text-gray-500" to={"/"}>About Us</Link>
                        </li>
                          <li >
                {/* <Link
                  to="/login"
                  className="link transition duration-200 ease-in-out"
                >
                  Login
                </Link>{" "}
                |{" "}
                <Link
                  to="/register"
                  className="link transition duration-200 ease-in-out"
                >
                  Register
                </Link> */}
                {user?<div className='flex items-center gap-3'>
                <p className='max-sm:hidden'>Hi, {user.firstName +" "+user.lastName}</p>
                <UserButton/>
            </div>
            :<div className='flex gap-4 mx-sm:text-xs'>
                <button onClick={(e) => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
            </div>
            }
              </li>
                    </ul>
                </div>
            </div>
            <div className="part3 w-[30%] flex !pl-10 flex-col">
                <h2 className="text-3xl text-semibold !mb-2 ">Subscribe To Newsletter</h2>
                <p className="text-sm font-medium text-gray-500 !mb-2">Subscribe to our latest newsletter to get news about special discounts.</p>
            <form className="!mt-3">
                <input type="email" placeholder="Your Email Address"  className="email w-full  h-[3vw] border border-gray-300 focus:border-gray-700 outline-none !px-4 rounded-sm" />
                <Button className="btn-org !px-4 !py-2 !mt-3">
                    Subscribe
                </Button>
                <FormControlLabel className="block" required control={<Checkbox />} label="I Agree to the Terms and Conditions" />
            </form>
            </div>  
        </div>
        <div className="bottomStrip flex items-center justify-center !py-3 !mb-[-3vw]">
            <div className="container flex items-center justify-between">
                    <ul className="flex gap-2 ">
                        <li className="w-[2vw] group h-[2vw] hover:border-blue-600 hover:text-blue-500 hover:border-2 rounded-full border-1 flex justify-center !items-center">
                            <Link to={"/"} target="_blank"><LiaFacebookF/></Link>
                        </li>
                         <li className="w-[2vw] h-[2vw] hover:border-blue-600 hover:text-red-600 hover:border-2 rounded-full border-1 flex justify-center !items-center">
                            <Link to={"/"} target="_blank"><AiFillYoutube/></Link>
                        </li>
                         <li className="w-[2vw] h-[2vw] hover:border-blue-600 hover:text-black hover:border-2 rounded-full border-1 flex justify-center !items-center">
                            <Link to={"/"} target="_blank"><FaXTwitter/></Link>
                        </li>
                         <li className="w-[2vw] h-[2vw] hover:border-red-600 hover:bg-red-600 hover:text-white hover:border-2 rounded-full border-1 flex justify-center !items-center">
                            <Link to={"/"} target="_blank"><FaPinterestP/></Link>
                        </li>
                         <li className="w-[2vw] h-[2vw] hover:border-pink-500 hover:bg-pink-600 hover:text-white hover:border-2 rounded-full border-1 flex justify-center !items-center">
                            <Link to={"/"} target="_blank"><FaInstagram/></Link>
                        </li>
                    </ul>
                    <p>                © 2024 - ReCircle-The Sustainable Store
                    </p>
                    <div className="cards flex items-center">
                        <img src="public/carte_bleue.png" alt="" />
                        <img src="public/visa.png" alt="" />
                        <img src="public/masterCard.png" alt="" />
                        <img src="public/american_express.png" alt="" />
                        <img src="public/paypal.png" alt="" />

                    </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
