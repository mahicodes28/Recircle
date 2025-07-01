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
      {/* Top Strip */}
      <div className="top-strip py-2 border-t-2 border-b-2 border-gray-200 bg-white">
        <div className="container !px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="col1 !w-full sm:w-[50%] text-center sm:text-left">
              <h1 className="text-xs sm:text-sm md:text-md">Get items at 50% price as original</h1>
            </div>
            <div className="col2 w-full sm:w-auto">
              <ul className="flex justify-center sm:justify-end items-center gap-3 sm:gap-5 text-xs sm:text-sm">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="link transition duration-200 ease-in-out"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="link transition duration-200 ease-in-out"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="header border-b-2 border-gray-200 !py-2 bg-white">
        <div className="container mt-2 md:!mt-2 flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 !px-2 sm:px-0 gap-3">
          {/* Logo */}
          <div className="col1 relative h-fit w-full sm:w-[25%] flex items-center justify-center sm:justify-start overflow-hidden mb-2 md:mb-0">
            <Link to="/" className="logo object-fit">
              <img className="h-14 sm:h-20 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          {/* Search */}
          <div className="col2 w-full sm:w-[45%] mb-2 sm:mb-0">
            <Search />
          </div>
          {/* User/Icons */}
          <div className="col3 w-full sm:w-[30%]">
            <ul className="flex justify-center sm:justify-end items-center gap-3 sm:gap-5">
              <li>
                {user ? (
                  <div className='flex items-center gap-2 sm:gap-3'>
                    {user.firstName && (
                      <p className='hidden sm:block text-xs sm:text-sm'>
                        Hi, {user.firstName}{user.lastName ? ` ${user.lastName}` : ''}
                      </p>
                    )}
                    <UserButton />
                  </div>
                ) : (
                  <div className='flex gap-2 sm:gap-4 text-xs'>
                    <button onClick={openSignIn} className='link px-4 sm:px-6 py-2 rounded-full'>Login | Register</button>
                  </div>
                )}
              </li>
              <li className="compare">
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="primary">
                      <IoIosGitCompare className="compare" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="Wishlist" onClick={() => context.setWishListOpen(true)}>
                    <StyledBadge badgeContent={4} color="primary">
                      <CiHeart className="wishlist" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart" onClick={() => context.setDrawerOpen(true)}>
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