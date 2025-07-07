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
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from '../../App';

// Accept product as prop for API compatibility
const ProductItemListView = ({
  product = {
    _id: 1,
    image: "/public/item1.webp",
    brand: "Brand Name",
    name: "Product Name",
    description: "Product description goes here.",
    rating: 2.5,
    oldPrice: 50,
    newPrice: 40,
    link: "/product/1"
  }
}) => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="productItem  scale-100 flex flex-col xl:flex-row bg-zinc-900 hover:bg-white hover:text-black  !shadow-lg items-center w-full xl:!w-[97%] transition-all mt-5 !h-auto xl:!h-[20vw]">
        <div className="imgWrapper relative w-full md:!w-[40%] h-[50vw] max-h-[320px] md:!h-[20vw] md:max-h-none flex-shrink-0">
          <Link to={product.link || `/product/${product._id}`} className='link w-full h-full block'>
            <img src={product.image} className='w-full rounded-lg shadow-md overflow-hidden h-full object-cover md:object-fit' alt={product.name} />
          </Link>
          <div className="Actions  hidden md:flex opacity-0 hover:opacity-100 gap-2 absolute top-4 right-4 w-10 flex-col items-center justify-between px-2">
            <Tooltip title="Product Details" placement="left">
              <Button
                className='w-10 h-10 bg-red-400 hover:opacity-100 opacity-40 rounded-full p-0 min-w-0'
                variant="contained"
                onClick={() => context.setOpen(true)}
              >
                <MdOutlineZoomOutMap className='w-6 h-6 text-white' />
              </Button>
            </Tooltip>
            <Tooltip title="Compare" placement="left">
              <Button className='w-10 h-10 bg-red-400 hover:text-white hover:opacity-100 opacity-50 rounded-full p-0 min-w-0' variant="contained">
                <Link to={product.link || `/product/${product._id}`} className='link text-xl w-6 h-6 text-zinc-600 flex items-center justify-center'>
                  <IoGitCompareOutline className='w-full h-full text-white' />
                </Link>
              </Button>
            </Tooltip>
            <Tooltip title="Add to Wishlist" placement="left">
              <Button className='w-10 h-10 bg-red-400 hover:text-white hover:opacity-100 opacity-50 rounded-full p-0 min-w-0' variant="contained">
                <Link to={product.link || `/product/${product._id}`} className='link text-xl w-6 h-6 text-zinc-600 flex items-center justify-center'>
                  <FaRegHeart className='w-full h-full text-white' />
                </Link>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="info w-full !px-4 !py-4 md:py-0 xl:px-5 text-left flex flex-col justify-center items-start">
          <h6 className='Brand w-full text-left text-lg md:text-2xl transition-all'>
            <Link className='link' to={product.link || `/product/${product._id}`}>{product.brand}</Link>
          </h6>
          <h3 className='Title w-full text-left text-xl md:text-4xl transition-all'>
            <Link className='link' to={product.link || `/product/${product._id}`}>{product.name}</Link>
          </h3>
          <h3 className='Title w-full text-left text-xs md:text-sm text-zinc-600 transition-all'>
            <span>{product.description}</span>
          </h3>
          <Stack spacing={1}>
            <Rating className='w-20 md:w-[10%]' name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
          </Stack>
          <div className="flex items-center gap-2 mt-1">
            <span className='oldPrice text-zinc-400 line-through'>${product.oldPrice}</span>
            <span className='newPrice font-semibold ml-2 text-red-500'>${product.newPrice}</span>
          </div>
          <Button className='link bg-blue-600 text-white mt-4 gap-2 w-full md:w-auto'>
            <MdOutlineShoppingCart />
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductItemListView