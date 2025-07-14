import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';


const ProductInfo = ({ padding="", product }) => {
  
    if (!product || !product.image) {
    return <div className="text-white p-4">Product not found</div>;
  }

  const [thumbnail, setThumbnail] = useState(product.image[0]);

  return (
    <div className={`flex bg-black text-white !select-none  !rounded-md !shadow-md flex-col md:flex-row gap-8 md:gap-16 xl:gap-16 ${padding}`}>
      {/* Images Section */}
      <div className="flex bg-black text-white flex-col md:flex-row gap-3 w-full md:w-auto">
        <div className="flex flex-row sm:flex-col gap-3 order-2 sm:order-1 justify-center sm:justify-start">
          {product.image.map((image, index) => (
            <div
              key={index}
              onClick={() => setThumbnail(image)}
              className={`border  rounded overflow-hidden cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-[70px] md:h-[70px] flex items-center justify-center ${
                thumbnail === image ? "" : ""
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="object-contain w-full h-full"
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <div className="border  rounded overflow-hidden flex items-center justify-center w-full sm:w-[220px] md:w-[300px] h-[180px] sm:h-[260px] md:h-[340px] order-1 sm:order-2 mx-auto">
          <img src={thumbnail} alt="Selected product" className="object-contain w-full h-full" />
        </div>
      </div>

      {/* Info Section */}
      <div className="text-lg w-full !bg-[#27272A] md:w-1/2 flex flex-col gap-5">
        <div className="flex mb-4 items-center gap-0.5 mt-1">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium capitalize">{product.product_name}</h1>
        <div className="mt-4 sm:mt-6 px-2 sm:px-4">
          <p className="text-gray-500/70 line-through text-base sm:text-lg">
            MRP: ₹{product.price}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium">
            MRP: <span className="text-red-400">₹{product.offerPrice} </span>
          </p>
          <span className="text-gray-500/70 text-xs sm:text-base">(inclusive of all taxes)</span>
        </div>
        <p className="text-base sm:text-lg font-medium mt-4 sm:mt-6 px-2 sm:px-4">About Product</p>
        <ul className="list-disc ml-6 text-gray-500/70 px-2 sm:px-4 text-sm sm:text-base">
          {product.description}
        </ul>
        <div className="flex flex-col mt-8 sm:mt-10 items-center gap-3 sm:gap-4 text-base">
          <button className="w-full py-3 sm:py-4 rounded-md cursor-pointer font-medium bg-blue-500 text-white hover:bg-indigo-600 transition">
            Buy now
          </button>
          <button className="w-full py-3 sm:py-4 rounded-md cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;