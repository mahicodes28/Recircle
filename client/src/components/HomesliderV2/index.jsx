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
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="HomesliderV2"
      >
        <SwiperSlide>
        <div className="item c w-full rounded-md overflow-hidden">
          <img src="public/Homsliderv2First.jpg" />
  <div className='w-[50%] info transition-all duration-1000 top-0 right-[-100%] opacity-0 z-50 flex items-center flex-col justify-center h-[100%] !py-10 !px-10 absolute'>
            <h1 className='text-[2.4vw] font-[500]  text-left w-full'>Big Saving Day</h1>
            <h2 className='text-5xl font-[700] !mt-5 text-white w-full text-left'>Women Solid Round Green T-shirt</h2>
            <h3 className='text-[1.3vw] !mt-5 font-[500] flex items-center gap-2 text-left w-full'>Starting At Only <span className='text-red-400 !text-bold  !ml-2 text-[2.4vw]'>$22</span></h3>
            <div className='w-full'>
            <Button className='btn-org '>SHOP NOW</Button>

            </div>
</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
<div className="item w-full rounded-md  relative overflow-hidden">
          <img src="public/Homesliderv2Second.jpg" />
        <div className='w-[50%] top-0 right-[-100%] info opacity-1 z-50 transition-all duration-1000 flex items-center flex-col justify-center h-[100%] !py-10 !px-10 absolute'>
            <h1 className='text-[2.4vw] font-[500] text-left w-full'>Big Saving Day</h1>
            <h2 className='text-5xl font-[700] !mt-5 text-white w-full text-left'>Women Solid Round Green T-shirt</h2>
            <h3 className='text-[1.3vw] !mt-5 font-[500] flex items-center gap-2 text-left w-full'>Starting At Only <span className='text-red-400 !text-bold  !ml-2 text-[2.4vw]'>$22</span></h3>
            <div className='w-full'>
            <Button className='btn-org '>SHOP NOW</Button>
            </div>
</div>
</div>
        </SwiperSlide>
    
      </Swiper>
    </>
  )
}

export default HomeSliderV2