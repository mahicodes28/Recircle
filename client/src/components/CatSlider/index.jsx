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
    { label: 'Fashion', image: '/public/Fashion.png', link: '/',color:'#7F22FE' },
    { label: 'Electronics', image: '/public/electronics.png', link: '/',color:'#7F22FE' },
    { label: 'Wellness', image: '/public/wellness.png', link: '/',color:'#7F22FE' },
    { label: 'Groceries', image: '/public/groceries.png', link: '/',color:'' },
    { label: 'Beauty', image: '/public/Beauty.png', link: '/',color:'#7F22FE' },
    { label: 'Crafts', image: '/public/craft.webp', link: '/',color:'#7F22FE' },
  ];
  return (
    <>
      <div className='catContainer hidden xl:block md:block   m-auto py-6 xl:py-10'>
        <Swiper
          slidesPerView={6}
          spaceBetween={6}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper "
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
            <SwiperSlide key={index} className={`!w-fit bg-[${item.color}] scale-90`}>
              <Link to={`/productListing/${item.label}`} className="block">
                <div className={`item  hover:scale-105 hover:text-white hover:bg-[#7F22FE] p-2 xl:!p-3 h-[80px] w-[80px] md:h-[13vw] md:w-[13vw] xl:h-[14vw] xl:w-[14vw]  rounded-sm flex flex-col items-center justify-center transition-all`}>
                  <img
                    className="w-[36px] h-[36px]  select-none hover:scale-110 transition-all object-cover mb-2"
                    src={item.image}
                    alt={item.label}
                  />
                  <h1 className="text-center  text-xs sm:text-sm md:text-base select-none transition-all">{item.label}</h1>
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