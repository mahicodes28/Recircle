import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Link } from 'react-router-dom';

function CatSlider() {
  // Array of category items
  const categoryItems = [
    { label: 'Fashion', image: '/public/Fashion.png', link: '/' },
    { label: 'Electronics', image: '/public/electronics.png', link: '/' },
    { label: 'Wellness', image: '/public/wellness.png', link: '/' },
    { label: 'Groceries', image: '/public/groceries.png', link: '/' },
    { label: 'Beauty', image: '/public/Beauty.png', link: '/' },
    { label: 'Crafts', image: '/public/craft.webp', link: '/' },
  ];
  return (
    <>
      <div className='catContainer m-auto py-6 sm:py-10'>
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {categoryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link} className="block">
                <div className="item hover:scale-105 hover:text-blue-500 p-2 sm:p-3 h-[80px] w-[80px] sm:h-[8vw] sm:w-[8vw] bg-white rounded-md flex flex-col items-center justify-center transition-all">
                  <img
                    className="w-[36px] h-[36px] sm:w-[3vw] sm:h-[3vw] select-none hover:scale-110 transition-all object-cover mb-2"
                    src={item.image}
                    alt={item.label}
                  />
                  <h1 className="text-center text-xs sm:text-sm md:text-base select-none transition-all">{item.label}</h1>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default CatSlider