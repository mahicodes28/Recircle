import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../../App';

const ProductItem = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="productItem scale-90 bg-[#27272A] transition-all hover:text-black hover:bg-white hover:scale-95 overflow-hidden !rounded-sm xl:rounded-sm w-full xl:min-h-[28vh] xl:min-h-[22vw] md:min-h-[22vw]">
        <div className="imgWrapper relative w-full !h-[18vh]  md:!h-[10vw] bg-red-200 xl:!h-[12vw]">
          {/* {`/product/${product._id}`} link per ye path dalega  */}
          <Link to="/productDetails" className='link w-full h-[18vh] xl:h-[13vw] block'>
            <img src="/public/item1.webp" className='w-full h-[100%] xl:h-[100%] md:h-[100%]  md:h-[full]   object-cover rounded-none' alt="" />
          </Link>
          <div className="Actions hidden md:flex opacity-0 hover:opacity-100 gap-2 absolute top-2 right-2 md:top-[1vw] md:right-[1vw] w-10 md:w-[2vw] flex-col items-center justify-between px-2">
            <Tooltip title="Product Details" placement="left">
              <Button
                className='w-10 h-10 md:!w-[2vw] md:h-[4vw] transition-all bg-red-400 hover:opacity-100 opacity-40 rounded-full p-0 min-w-0'
                variant="contained"
                onClick={() => context.setOpen(true)}
              >
                <MdOutlineZoomOutMap className='w-6 h-6 md:!w-[2vw] md:!h-[2vw] text-white' />
              </Button>
            </Tooltip>
            <Tooltip title="Compare" placement="left">
              <Button className='w-10 h-10 md:!w-[2vw] md:h-[4vw] transition-all bg-red-400 hover:text-white hover:opacity-100 opacity-50 rounded-full p-0 min-w-0' variant="contained">
                <Link to="/product/1" className='link text-xl w-6 h-6 md:w-[2vw] md:h-[2vw] text-zinc-600 flex items-center justify-center'>
                  <IoGitCompareOutline className='w-full h-full text-white' />
                </Link>
              </Button>
            </Tooltip>
            <Tooltip title="Add to Wishlist" placement="left">
              <Button className='w-10 h-10 md:!w-[2vw] md:h-[4vw] transition-all bg-red-400 hover:text-white hover:opacity-100 opacity-50 rounded-full p-0 min-w-0' variant="contained">
                <Link to="/product/1" className='link text-xl w-6 h-6 md:w-[2vw] md:h-[2vw] text-zinc-600 flex items-center justify-center'>
                  <FaRegHeart className='w-full h-full text-white' />
                </Link>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="!info !px-2 !pt-2 !pb-2 xl:!px-4 xl:!pt-4 min-h-[10vh]   xl:min-h-[12vw]  md:min-h-[12vw]  text-left w-full flex flex-col justify-center items-start">
          <h6 className='Brand w-full text-left text-xs md:!text-md xl:!text-md  md:text-base transition-all'><Link className='link' to="/">Brand Name</Link></h6>
          <h3 className='Title w-full text-left text-sm xl:!text-xl transition-all'><Link className='link' to="/">Product Name</Link></h3>
          <Stack spacing={1} className=''>
            <Rating name="half-rating-read" className='!scale-40 xl:!scale-80 absolute  left-1' defaultValue={2.5} precision={0.5} readOnly />
          </Stack>
          <div className="flex items-center gap-2 mt-1">
            <span className='oldPrice text-xs xl:!text-lg text-zinc-400 line-through'>$50</span>
            <span className='newPrice text-xs xl:!text-lg font-semibold ml-2 text-red-500'>$40</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem