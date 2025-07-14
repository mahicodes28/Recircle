import ProductItem from '../ProductSlider/ProductItem';
    import { AppContext } from '../../context/AppProvider';
    import { Button } from '@mui/material';
    import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from 'react';
    
    function Search() {
      const [query, setQuery] = useState('');
      const [showResults, setShowResults] = useState(false);
      const { productsByCategory , products,fetchProduct } = useContext(AppContext);
      // Add some dummy products for testing
      // const dummyProducts = [
      //   {
      //     _id: 'dummy1',
      //     product_name: 'Apple iPhone 14',
      //     category: 'Mobiles',
      //     image: [
      //       'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80'
      //     ],
      //     price: 999,
      //     offerPrice: 899,
      //   },
      //   {
      //     _id: 'dummy2',
      //     product_name: 'Samsung Galaxy S23',
      //     category: 'Mobiles',
      //     image: [
      //       'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
      //     ],
      //     price: 899,
      //     offerPrice: 799,
      //   },
      //   {
      //     _id: 'dummy3',
      //     product_name: 'Nike Air Max',
      //     category: 'Footwear',
      //     image: [
      //       'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
      //     ],
      //     price: 150,
      //     offerPrice: 120,
      //   },
      //   {
      //     _id: 'dummy4',
      //     product_name: 'Sony WH-1000XM4',
      //     category: 'Headphones',
      //     image: [
      //       'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
      //     ],
      //     price: 350,
      //     offerPrice: 299,
      //   },
      //   {
      //     _id: 'dummy5',
      //     product_name: 'Apple MacBook Pro',
      //     category: 'Laptops',
      //     image: [
      //       'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
      //     ],
      //     price: 1999,
      //     offerPrice: 1799,
      //   },
      //   {
      //     _id: 'dummy6',
      //     product_name: 'Adidas Running Shoes',
      //     category: 'Footwear',
      //     image: [
      //       'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
      //     ],
      //     price: 120,
      //     offerPrice: 99,
      //   },
      // ];

      useEffect(()=>{
        fetchProduct();
      },[]);
      // Flatten all products from all categories into a single array, and include dummyProducts
      // const allProducts = [
      //   ...dummyProducts,
      //   ...(productsByCategory ? Object.values(productsByCategory).flat() : [])
      // ];

      // Filter products by query (case-insensitive, match product_name)
      const filteredProducts = query
        ? products
            .filter(
              (product) =>
                product?.product_name &&
                product.product_name.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 6)
        : [];

      return (
        <div className="searchBox h-10 sm:h-12 bg-white rounded-4xl !text-black relative !py-1 md:py-2 xl:py-2 !px-4 flex items-center justify-center w-full">
          <input
            type="text"
            placeholder="Search for Products..."
            className="text-xs xl:text-lg md:text-lg px-2 w-full focus:outline-none bg-transparent"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            // Delay hiding to allow click on results
          />
          <Button className="!min-w-8 !min-h-8 sm:!min-w-10 sm:!min-h-10 !rounded-full flex items-center justify-center">
            <CiSearch className="text-lg md:text-xl xl:text-xl text-black" />
          </Button>
          {showResults && filteredProducts.length > 0 && (
            <div className="search-results w-[50vw] h-[50vh] backdrop-blur-sm bg-white/50 rounded-lg overflow-y-scroll absolute top-15 left-0 flex  flex-wrap z-999 ">
              {filteredProducts.map((product) => (
                <div key={product._id} className="mb-2 
                 scale-75  last:mb-0 w-[16vw]">
                  <ProductItem
                    product={product}
                    // Add a prop or class to make ProductItem small, e.g. scale-75
                    className="scale-50 z-999"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    export default Search;