import { Link } from "react-router-dom";
import Search from "../search";
import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { useAppContext } from "../../context/AppProvider";
import { UserButton, useClerk , useUser } from '@clerk/clerk-react'
import { useContext } from "react";
import { MyContext } from "../../App";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function header() {
    const context = useContext(MyContext)
    const {openSignIn} = useClerk();
    const {user}=useUser();


  return (
    <header>
      <div className="top-strip  md:py-2 xl:py-2 2 text-white xl:border-b-1 border-white bg-black">
        <div className="container !p-1 xl:!p-none md:!p-none">
          <div className="block md:flex xl:flex justify-between xl:text-left text-center">
            <div className="col1 w-[100%] md:w-[1/2]  xl:w-[50%]">
              <h1 className="text-sm text-center md:text-left hidden xl:block md:block xl:text-left xl:text-md xl:text-md">Get items at 50% price as original</h1>
            </div>
            <div className="col2  w-[100%] md:w-[50%] xl:w-[50%] ">
              <ul className="flex justify-between md:justify-end xl:justify-end items-center gap-5">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-md link transition duration-200 ease-in-out"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-md link transition duration-200 ease-in-out"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header  border-b-0 border-white !bg-black text-white xl:!py-2 bg-white ">
        <div className="container m-auto xl:flex md:flex w-full xl:w-[full] md:w-[full] xl:flex-row flex-col md:flex-row  justify-between items-center min-h-20 md:h-20 xl:h-20">
         <div className="flex  justify-between items-center xl:flex-row xl:w-[70%] md:w-[70%]  xl:py-none py-2">
           <div className="col1 relative h-fit w-[full] md:w-[1/4] xl:w-[1/4]  flex items-center  overflow-hidden ">
            <Link to="/" className="logo  object-fit ">
              <img className="h-10 w-fit xl:h-20 md:h-20" src="https://res.cloudinary.com/deg0bizoi/image/upload/v1752496800/logo_vribqq.png" alt="Logo" />
            </Link>
          </div>
          <div className="col2 w-[60%] xl:w-[70%] md:w-[70%]">
            <Search></Search>
          </div>
         </div>
          <div className="col3 scale:80 w-[100%] md:w-[30%] xl:p-none p-3 md:p-none xl:w-[30%]">
            <ul className="flex justify-end xl:justify-end  items-center gap-5">
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
               {user ? (
  <div className='flex items-center gap-3'>
    {user.firstName && (
      <p className='max-sm:hidden'>
        Hi, {user.firstName}{user.lastName ? ` ${user.lastName}` : ''}
      </p>
    )}
    <UserButton />
  </div>
) : (
  <div className='flex gap-4 mx-sm:text-xs'>
    <button onClick={(e) => openSignIn()} className='link px-6 sm:px-9 py-2 rounded-full'>Login | Register</button>
  </div>
)}
              </li>
              <li className="compare  hidden xl:block md:block "  >
               <Tooltip title="Compare" >
                 <IconButton aria-label="cart" className="!text-white">
                  <StyledBadge badgeContent={4} sx={{
    '& .MuiBadge-badge': {
      backgroundColor: 'white',
      color: 'black',
      fontWeight: "600",
      border: "none"
    },
  }}
>
                    <IoIosGitCompare className="compare " />
                  </StyledBadge>
                </IconButton>
               </Tooltip>
              </li>
              <li  >
                <Tooltip title="Wishlist" >
                  <IconButton  aria-label="Wishlist" className="!text-white !font-bold" onClick={()=>context.setWishListOpen(true)}>
                  <StyledBadge badgeContent={4} sx={{
    '& .MuiBadge-badge': {
      backgroundColor: 'white',
      color: 'black',
      fontWeight: "600",
      border: "none"
    },
  }}>
                    <FaRegHeart className="wishlist"/>
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              < li>
                <Tooltip title="Cart" >
                  <IconButton aria-label="cart" className="!text-white" onClick={()=>context.setDrawerOpen(true)}>
                    <StyledBadge badgeContent={4}  sx={{
    '& .MuiBadge-badge': {
      backgroundColor: 'white',
      color: 'black',
      fontWeight: "600",
      border: "none"
    },
  }}>
                      <MdOutlineShoppingCart className="cart" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default header;
