import React from 'react'
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ProductDetails = () => { 
    const product = {
        name: "Casual Shoes",
        category: "Sports",
        price: 100,
        offerPrice: 80,
        rating: 4,
        images: [
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png"
        ],
        description: [
            "High-quality material",
            "Comfortable for everyday use",
            "Available in different sizes"
        ]
    };

    const [thumbnail, setThumbnail] = React.useState(product.images[0]);

    return product && (
        <div className="max-w-7xl !mx-auto !rounded-lg w-full px-6 !h-full !my-20 border border-zinc-600 !p-20 shadow-lg">
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    className="link transition-all"
                    color="inherit"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="link transition-all"
                    underline="hover"
                    color="inherit"
                    to="/productListing"
                >
                    Fashion
                </Link>
                <span className="text-indigo-500">{product.name}</span>
            </Breadcrumbs>

            <div className="flex !rounded-md flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setThumbnail(image)}
                                className={`border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer ${thumbnail === image ? 'ring-2 ring-indigo-500' : ''}`}
                            >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="border  border-gray-500/30 max-w-200 rounded overflow-hidden flex items-center">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full gap-4 md:w-1/2">
                    <h1 className="text-4xl font-medium">{product.name}</h1>
                    <div className="flex items-center gap-0.5 mt-1">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                        </Stack>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                        <p className="text-2xl font-medium">MRP: <span className='text-red-400'>${product.offerPrice} </span> </p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>
                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    <div className="flex flex-col  !mt-5 items-center mt-10 gap-4 text-base">
                       
                        <button className="w-full !py-4 rounded-md cursor-pointer font-medium bg-blue-500 text-white hover:bg-indigo-600 transition">
                            Buy now
                        </button>
                         <button className="w-full !py-4 rounded-md cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails