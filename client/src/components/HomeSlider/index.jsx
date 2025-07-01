import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Array of slide image paths
const slideImages = [
  '/Banner1.png',
  '/sliderImage2.jpg',
  '/sliderImage3.jpg',
  '/sliderImage4.jpg',
  '/5.jpg',
  '/sliderImage6.jpg',
  '/sliderImage7.jpg',
  '/sliderImage8.jpg',
  '/sliderImage9.jpg',
];

function HomeSlider() {
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      navigation={false}//swiper options(side arrows)
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectFade, Navigation, Autoplay, Pagination]}
      className="mySwiper"
    >
      {slideImages.map((src, index) => (
        <SwiperSlide key={index}>
          <img className="imageSlider !w-full !h-full" src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSlider;