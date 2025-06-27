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
<div className='catContainer m-auto py-10'>
   <Swiper
  slidesPerView={6}
  spaceBetween={30}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper"
>
  {categoryItems.map((item, index) => (
    <SwiperSlide key={index}>
      <Link to={item.link} className="item p-3 h-[10vw] w-[10vw] !bg-white rounded-md">
        <div className="item hover:scale-105 hover:text-blue-500 p-3 h-[10vw] w-[10vw] !bg-white rounded-md flex flex-col items-center justify-center">
          <img className="w-[2vw] select-none hover:scale-110 h-[2vw] transition-all object-cover mb-2" src={item.image} alt={item.label} />
          <h1 className="text-center select-none  transition-all">{item.label}</h1>
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