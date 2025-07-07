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
      <div className="productSlider  h-[50vh] select-none pt-6 sm:pt-10">
        <Swiper
          // Responsive breakpoints for slidesPerView
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: props.items || 4, spaceBetween: 30 },
          }}
          navigation={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="productSlider "
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default ProductSlider