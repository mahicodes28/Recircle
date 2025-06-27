import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../AdsBannerSlider/styles.css';
import { Link } from 'react-router-dom';
import BannerBox from '../BannerBox';


const AdsBannerSlider = (props) => {
  return (
<>
  <div className="box !mx-auto !px-20 !bg-transparent !rounded-md !p-4 !mb-2 !mt-2">
     <Swiper
  slidesPerView={props.items}
  spaceBetween={props.spaceBetween}
  pagination={{ clickable: true }}
   navigation={false}//swiper options(side arrows)
  autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
  modules={[Navigation,Autoplay, Pagination]}
  className="mySwiper"
>
    <SwiperSlide>
   <BannerBox img={"/public/Adv1.webp"} alt={"Advertisement"} Link={"/"}/>
    </SwiperSlide>
    <SwiperSlide>
   <BannerBox img={"/public/Adv2.webp"} alt={"Advertisement"} Link={"/"}/>
    </SwiperSlide>
    <SwiperSlide>
   <BannerBox img={"/public/Adv3.webp"} alt={"Advertisement"} Link={"/"}/>
    </SwiperSlide>
    <SwiperSlide>
   <BannerBox img={"/public/Adv4.webp"} alt={"Advertisement"} Link={"/"}/>
    </SwiperSlide>
    
    
     
  
    </Swiper>
  </div>
</>

)
}

export default AdsBannerSlider