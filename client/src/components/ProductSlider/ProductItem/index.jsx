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
      <div className="productItem bg-red-200 scale-90 transition-all hover:scale-95 overflow-hidden rounded-md w-full max-w-xs sm:max-w-[45vw] md:max-w-[15vw] h-auto md:!h-[22vw]">
        <div className="imgWrapper relative w-full h-[50vw] max-h-[220px] sm:h-[30vw] sm:max-h-[180px] md:!h-[14vw] md:max-h-none">
          {/* {`/product/${product._id}`} link per ye path dalega  */}
          <Link to="/productDetails" className='link w-full h-full block'>
            <img src="/public/item1.webp" className='w-full h-[48vw] max-h-[200px] sm:h-[28vw] sm:max-h-[160px] md:!h-[13vw] object-cover rounded-md' alt="" />
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
        <div className="info px-2 py-2 md:!h-[8vw] text-left w-full flex flex-col justify-center items-start">
          <h6 className='Brand w-full text-left text-sm md:text-base transition-all'><Link className='link' to="/">Brand Name</Link></h6>
          <h3 className='Title w-full text-left text-lg md:text-xl transition-all'><Link className='link' to="/">Product Name</Link></h3>
          <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          </Stack>
          <div className="flex items-center gap-2 mt-1">
            <span className='oldPrice text-zinc-400 line-through'>$50</span>
            <span className='newPrice font-semibold ml-2 text-red-500'>$40</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem