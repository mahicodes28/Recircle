import { Link } from "react-router-dom";
import Search from "../search";
import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { useAppContext } from "../../context/AppProvider";
import { UserButton, useClerk , useUser } from '@clerk/clerk-react'



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
function header() {

    const {openSignIn} = useClerk();
    const {user}=useUser();


  return (
    <header>
      <div className="top-strip py-2 border-t-2 border-b-2 border-gray-200 bg-white">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="col1 w-[50%]">
              <h1 className="text-md">Get items at 50% price as original</h1>
            </div>
            <div className="col2 ">
              <ul className="flex justify-end items-center gap-5">
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
      <div className="header border-b-2 border-gray-200 !py-2 bg-white ">
        <div className="container m-auto flex justify-between items-center h-20">
          <div className="col1 relative h-fit w-[25%] flex items-center  overflow-hidden ">
            <Link to="/" className="logo  object-fit ">
              <img className="h-20 w-fit" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search></Search>
          </div>
          <div className="col3 w-[30%]">
            <ul className="flex justify-end  items-center gap-5">
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
              <li className="compare" >
               <Tooltip title="Compare" >
                 <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                    <IoIosGitCompare className="compare" />
                  </StyledBadge>
                </IconButton>
               </Tooltip>
              </li>
              <li  >
                <Tooltip title="Wishlist" >
                  <IconButton  aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                    <CiHeart className="wishlist"/>
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              < li>
                <Tooltip title="Cart" >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="primary">
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
