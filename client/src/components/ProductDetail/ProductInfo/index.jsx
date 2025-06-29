import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

const staticProduct = {
  name: "Casual Shoes",
  category: "Sports",
  price: 100,
  offerPrice: 80,
  rating: 4,
  images: [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
  ],
  description: [
    "High-quality material",
    "Comfortable for everyday use",
    "Available in different sizes",
  ],
};

const ProductInfo = ({ padding = "" }) => {
  const product = staticProduct;
  const [thumbnail, setThumbnail] = useState(product.images[0]);

  return (
    <div className={`flex !select-none !rounded-md !shadow-md flex-col md:flex-row gap-16 ${padding}`}>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setThumbnail(image)}
              className={`border max-w-35 border-gray-500/30 rounded overflow-hidden cursor-pointer ${
                thumbnail === image ? "ring-2 ring-indigo-500" : ""
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <div className="border border-gray-500/30 max-w-200 rounded overflow-hidden flex items-center">
          <img src={thumbnail} alt="Selected product" />
        </div>
      </div>

      <div className="text-lg w-full !gap-5 md:w-1/2">
        <div className="flex !mb-10 items-center gap-0.5 mt-1">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </div>
        <h1 className="text-6xl font-medium">{product.name}</h1>
        <div className="mt-6 !px-4">
          <p className="text-gray-500/70 line-through">
            MRP: ${product.price}
          </p>
          <p className="text-3xl font-medium">
            MRP: <span className="text-red-400">${product.offerPrice} </span>
          </p>
          <span className="text-gray-500/70">(inclusive of all taxes)</span>
        </div>
        <p className="text-base !px-4 font-medium !mt-6">About Product</p>
        <ul className="list-disc ml-4 text-gray-500/70 !px-4">
          {product.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <div className="flex flex-col !mt-20 items-center mt-10 gap-4 text-base">
          <button className="w-full !py-4 rounded-md cursor-pointer font-medium bg-blue-500 text-white hover:bg-indigo-600 transition">
            Buy now
          </button>
          <button className="w-full !py-4 rounded-md cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;