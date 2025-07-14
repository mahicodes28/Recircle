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
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <>
      <div className="py-10 w-full min-h-[15vw] bg-black text-white">
        {/* Top Features */}
        <div className="container text-white bg-black w-full mx-auto pt-0 pb-10">
          <div className="flex flex-col md:flex-row items-center w-full h-full justify-center  rounded-xl gap-6 md:gap-2">
            <div className="col group flex flex-col h-[15vh] scale-90 md,xl:scale:100 md:h-[10vw] xl:h-[10vw] items-center relative justify-center gap-none xl:gap-2 md:gap-2 w-full md:w-[100%] xl:w-[25%] !mb-0 xl:md-0 md:mb-0">
              <LiaShippingFastSolid className="text-4xl md:text-5xl absolute left-1/2 top-5 group-hover:text-[#1447E6] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-xl md:text-2xl font-semibold">Free Shipping</h1>
              <p className="text-sm text-center">Free shipping on all orders over ₹100</p>
            </div>
            <div className="col group flex flex-col h-[15vh] scale-90 md,xl:scale:100 md:h-[10vw] xl:h-[10vw] items-center relative justify-center gap-none xl:gap-2 md:gap-2 w-full md:w-[100%] xl:w-[25%] !mb-0 xl:md-0 md:mb-0 ">
              <RiSecurePaymentLine className="text-4xl md:text-5xl absolute left-1/2 top-5 group-hover:text-[#009689] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-xl md:text-2xl font-semibold">Secure Payments</h1>
              <p className="text-sm text-center">UPI/Cards Accepted</p>
            </div>
            <div className="col group flex flex-col h-[15vh] scale-90 md:scale-100 xl:scale:100 md:h-[10vw] xl:h-[10vw] items-center relative justify-center gap-none xl:gap-2 md:gap-2 w-full md:w-[100%] xl:w-[25%] !mb-0 xl:md-0 md:mb-0">
              <BiSupport className="text-4xl md:text-5xl absolute left-1/2 top-5 group-hover:text-[#8200DB] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-xl md:text-2xl font-semibold">24/4 Support</h1>
              <p className="text-sm text-center">Contact Us Anytime</p>
            </div>
            <div className="col group flex flex-col h-[15vh] scale-90 md,xl:scale:100 md:h-[10vw] xl:h-[10vw] items-center relative justify-center gap-none xl:gap-2 md:gap-2 w-full md:w-[100%] xl:w-[25%] !mb-0 xl:md-0 md:mb-0">
              <GiReturnArrow className="text-4xl md:text-5xl absolute left-1/2 top-5 group-hover:text-[#E60076] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:top-0" />
              <h1 className="text-xl md:text-2xl font-semibold">3 Days Return</h1>
              <p className="text-sm text-center">For a Replacement Product</p>
            </div>
          </div>
          <br /><br />
        </div>

        {/* Main Footer */}
      <div className="footer w-full  grid grid-cols-2 grid-rows-2 md:grid-rows-1 xl:grid-rows-1  md:grid-cols-3 xl:cols-3 border-b-2 border-white  md:!pb-8 xl:!pb-8 shadow-md px-4 md:px-10 !pt-8 md:py-12 w-full gap-4">
          {/* Contact */}
  <div className="part1 relative xl:col-1 md:col-1   w-[200%] row-2 xl:row-1 md:row-1 max-h-fit text-center md:text-left xl:text-left !pl-6 !mb-0 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Contact Us</h2>
            <p className="text-base font-medium text-gray-500 mb-2">
              Address - Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />Nemo, impedit.
            </p>
            <Link className="link text-lg md:text-xl text-gray-500" to="mailto:someone@example.com">sales@yourcompany.com</Link>
            <span className="text-lg md:text-xl text-red-600 mt-2 block">+91 29021-09237</span>
<div className="image absolute w-full !top-50 left-2 xl:hidden md:hidden ">
           <Link to={"/"}> <img src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496800/logo_vribqq.png" className=" " alt="" /> </Link>

</div>
            </div>
          {/* Products & Company */}
  <div className="part2 col-1 md:col-2 xl:col-2   w-full !px-6 w-full md:px-10 border-r-1 !py-2 md:border-l-2 border-r-0 md:border-r-2 border-white flex flex-col md:flex-row gap-8">
            <div className="part2_col1 w-full md:w-[50%]">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Products</h2>
              <ul>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>item</Link>
                </li>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>item</Link>
                </li>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>item</Link>
                </li>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>item</Link>
                </li>
              </ul>
            </div>
            <div className="part2_col2 w-full md:w-[50%]">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Our Company</h2>
              <ul>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>Deliver</Link>
                </li>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>Legal Notice</Link>
                </li>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>Terms and Conditions</Link>
                </li>
                <li className="list-none mb-1">
                  <Link className="link text-gray-500" to={"/"}>About Us</Link>
                </li>
                <li>
                  {user ? (
                    <div className='flex items-center gap-3'>
                      <p className='max-sm:hidden'>Logout</p>
                      <UserButton />
                    </div>
                  ) : (
                    <div className='flex gap-4 text-xs'>
                      <button onClick={openSignIn} className='link text-gray-500 px-4 md:px-9 py-2 rounded-full'>Login</button>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* Newsletter */}
  <div className="part3 col-2 md:col-3 xl:col-3  w-full flex flex-col pl-2 !pr-6 !py-2 xl:pl-10 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-xl xl:text-3xl md:text-3xl font-[500] mb-2">Subscribe To Newsletter</h2>
            <p className="text-sm font-medium text-gray-500 !mb-2">Subscribe to our latest newsletter to get news about special discounts.</p>
            <form className="mt-3">
              <input type="email" placeholder="Your Email Address" className="email w-full h-7 xl:h-[3vw] md:h-[3vw] border border-gray-700 focus:border-gray-700 outline-none !px-4 rounded-sm" />
              <Button className="btn-black active:scale-95 !text-sm scale-90 xl:scale-100 md:scale-100 !px-4 !py-2 !mt-3 w-full  xl:w-auto md:w-auto">
                Subscribe
              </Button>
              <FormControlLabel className="check scale-70 xl:scale-100 md:scale-100" required control={<Checkbox />} label="I Agree to the Terms and Conditions" />
            </form>
          </div>
        </div>
        {/* Bottom Strip */}
      <div className="bottomStrip  flex flex-col md:flex-row xl:flex-row items-center justify-center !py-3 !mt-4">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <ul className="flex gap-2 mb-2 md:mb-0">
              <li className="w-8 h-8 md:w-[2vw] md:h-[2vw] group hover:border-blue-600 hover:text-blue-500 hover:border-2 rounded-full border flex justify-center items-center">
                <Link to={"/"} target="_blank"><LiaFacebookF /></Link>
              </li>
              <li className="w-8 h-8 md:w-[2vw] md:h-[2vw] hover:border-blue-600 hover:text-red-600 hover:border-2 rounded-full border flex justify-center items-center">
                <Link to={"/"} target="_blank"><AiFillYoutube /></Link>
              </li>
              <li className="w-8 h-8 md:w-[2vw] md:h-[2vw] hover:border-blue-600 hover:text-black hover:border-2 rounded-full border flex justify-center items-center">
                <Link to={"/"} target="_blank"><FaXTwitter /></Link>
              </li>
              <li className="w-8 h-8 md:w-[2vw] md:h-[2vw] hover:border-red-600 hover:bg-red-600 hover:text-white hover:border-2 rounded-full border flex justify-center items-center">
                <Link to={"/"} target="_blank"><FaPinterestP /></Link>
              </li>
              <li className="w-8 h-8 md:w-[2vw] md:h-[2vw] hover:border-pink-500 hover:bg-pink-600 hover:text-white hover:border-2 rounded-full border flex justify-center items-center">
                <Link to={"/"} target="_blank"><FaInstagram /></Link>
              </li>
            </ul>
            <p className="text-center text-xs md:text-base">© 2024 - ReCircle-The Sustainable Store</p>
            <div className="cards flex md:flex xl:flex hidden items-center gap-2">
              <img src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496890/carte_bleue_gtpxdz.png" alt="" className="h-6 md:h-8" />
              <img src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496928/visa_jwjybq.png" alt="" className="h-6 md:h-8" />
              <img src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496954/masterCard_qhvxng.png" alt="" className="h-6 md:h-8" />
              <img src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496978/american_express_mlrzvn.png" alt="" className="h-6 md:h-8" />
              <img src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496999/paypal_ekpwyw.png" alt="" className="h-6 md:h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;