import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Button } from '@mui/material';

const HomeSliderV2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="HomesliderV2"
      >
        <SwiperSlide>
          <div className="item w-full  rounded-md overflow-hidden relative">
            <img
              src="public/Homsliderv2First.jpg"
              className="w-full h-[40vw] max-h-[400px] min-h-[180px] sm:h-[28vw] sm:max-h-[500px] sm:min-h-[220px] object-cover"
              alt="slide1"
            />
            <div className='
              info absolute top-0 right-0 
              w-[50%] sm:w-[60%] md:w-[50%] 
              flex flex-col items-center justify-center 
              h-full !px-4 !py-6 xl:py-10 md:py-10 md:px-10 xl:px-10 
              bg-gradient-to-l from-black/70 via-black/40 to-transparent
              transition-all duration-1000
            '>
              <h1 className='text-lg md:text-2xl  xl:text-[2.4vw] font-[500] text-left w-full text-white'>Big Saving Day</h1>
              <h2 className='text-2xl md:text-4xl  md:text-5xl font-[700] mt-2 sm:mt-5 text-white w-full text-left'>Women Solid Round Green T-shirt</h2>
              <h3 className='text-base sm:text-lg md:text-[1.3vw] mt-2 sm:mt-5 font-[500] flex items-center gap-2 text-left w-full text-white'>
                Starting At Only
                <span className='text-lg sm:text-xl md:text-[2.4vw] text-red-400 font-bold ml-2'>$22</span>
              </h3>
              <div className='w-full mt-4'>
                <Button className='btn-org w-auto md:w-auto !text-[.7rem] xl:w-auto'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img
              src="public/Homesliderv2Second.jpg"
              className="w-full h-[40vw] max-h-[400px] min-h-[180px] sm:h-[28vw] sm:max-h-[500px] sm:min-h-[220px] object-cover"
              alt="slide2"
            />
            <div className='
              info absolute top-0 right-0 
              w-[50%] sm:w-[60%] md:w-[50%] 
              flex flex-col items-center justify-center 
              h-full !px-4 !py-6 xl:py-10 md:py-10 md:px-10 xl:px-10 
              bg-gradient-to-l from-black/70 via-black/40 to-transparent
              transition-all duration-1000
            '>
              <h1 className='text-lg md:text-2xl  xl:text-[2.4vw] font-[500] text-left w-full text-white'>Big Saving Day</h1>
              <h2 className='text-2xl md:text-4xl  md:text-5xl font-[700] mt-2 sm:mt-5 text-white w-full text-left'>Women Solid Round Green T-shirt</h2>
              <h3 className='text-base sm:text-lg md:text-[1.3vw] mt-2 sm:mt-5 font-[500] flex items-center gap-2 text-left w-full text-white'>
                Starting At Only
                <span className='text-lg sm:text-xl md:text-[2.4vw] text-red-400 font-bold ml-2'>$22</span>
              </h3>
              <div className='w-full mt-4'>
                <Button className='btn-org w-auto md:w-auto !text-[.7rem]  xl:w-auto'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeSliderV2