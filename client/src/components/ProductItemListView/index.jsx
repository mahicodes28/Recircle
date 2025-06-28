import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductItem = () => {
  
 

  return (
    <>
        <div className="productItem bg-red-200 scale-100  !h-[20vw] flex !shadow-lg  items-center !w-[97%]  transition-all !mt-5 !rounded-lg  ">
            <div className="imgWrapper relative !w-[40%]   !h-[20vw]">
                {/* {`/product/${product._id}`} link per ye path dalega  */}
            <Link to="/product/1" className='link w-[100%]  h-full'>  
                            <img src="/public/item1.webp" className='!w-full !rounded-lg !shadow-md overflow-hidden !h-[20vw] object-fit' alt="" />

            </Link>

<div className="Actions display-none opacity-0 hover:opacity-100 !gap-2 absolute top-[1vw] right-[1vw] w-[2vw] flex flex-col items-center justify-between px-2">
   <Tooltip title="Product Details" placement="left">
     <Button className='!w-[2vw]  transition-all  h-[4vw] scale-80 !bg-red-400  hover:opacity-100 opacity-40 !rounded-full !p-0 ' variant="contained">
       <Link to="/product/1" className='link text-xl w-[2vw] h-[2vw]     text-zinc-600'>
        <MdOutlineZoomOutMap className='!w-full !h-full  !text-white !hover:bg-blue-500  text-zinc-600 ' />
        </Link>     
    </Button>
    </Tooltip> 
       <Tooltip title="Compare" placement="left">
<Button className='!w-[2vw] transition-all h-[4vw] scale-80 !bg-red-400 !hover:text-white hover:opacity-100 opacity-50 !rounded-full !p-0 ' variant="contained">
        <Link to="/product/1" className='link text-xl w-[2vw] h-[2vw]     text-zinc-600'>
        <IoGitCompareOutline  className='!w-full !h-full  !text-white !hover:bg-blue-500  text-zinc-600 ' />
        </Link>
        
    </Button>

       </Tooltip>
       <Tooltip title="Add to Wishlist" placement="left">
        <Button className='!w-[2vw] transition-all  h-[4vw] scale-80 !bg-red-400 !hover:text-white hover:opacity-100 opacity-50 !rounded-full !p-0 ' variant="contained">
        <Link to="/product/1" className='link text-xl w-[2vw] h-[2vw]     text-zinc-600'>
        <FaRegHeart  className='!w-full !h-full  !text-white !hover:bg-blue-500  text-zinc-600 ' />
        </Link>
        
    </Button>
       </Tooltip>
</div>
            </div>
                <div className="info !h-[full] !px-5 text-left w-full flex flex-col justify-center items-start">
            <h6 className='Brand w-full text-left text-2xl transition-all'><Link className='link' to="/">Brand Name</Link></h6>
            <h3 className='Title w-full text-left text-4xl transition-all'><Link className='link' to="/">Product Name</Link></h3>
            <h3 className='Title w-full text-left text-sm text-zinc-600 transition-all'><Link className='' to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, animi aliquid. Enim, explicabo? Facilis porro obcaecati id aperiam quam placeat praesentium tempore optio explicabo odio soluta minima, sapiente ipsam numquam provident dolor perferendis odit repellendus officia, temporibus reprehenderit ipsum omnis.</Link></h3>
            <Stack  spacing={1}>
                <Rating className='!w-[10%]' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
            <div className="flex items-center gap-2 !mt-1">
                <span className='oldPrice text-zinc-400 line-through'>$50</span>
                <span className='newPrice font-semibold ml-2 text-red-500'>$40</span>
            </div>
            <Button className='link !bg-blue-600  !text-white !mt-4 !gap-2'><MdOutlineShoppingCart />
Add To Cart</Button>
         </div>
         </div>
    </>
)
}

export default ProductItem