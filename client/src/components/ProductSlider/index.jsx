
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';


const ProductSlider = (props) => {
  return (
<>
<div className="productSlider select-none h-[fit]  !pt-10">
<Swiper
  slidesPerView={props.items}
  spaceBetween={30}
  navigation={{ clickable: true }}
  pagination={{ clickable: true }}
  modules={[Pagination,Navigation]}
  className="mySwiper"
>
 
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
    
    <SwiperSlide >
     <ProductItem/>
    </SwiperSlide>
</Swiper>
</div>
</>

)
}

export default ProductSlider