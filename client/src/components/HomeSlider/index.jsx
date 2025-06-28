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
  '/public/sliderImage1.jpg',
  '/public/sliderImage2.jpg',
  '/public/sliderImage3.jpg',
  '/public/sliderImage4.jpg',
  '/public/5.jpg',
  '/public/sliderImage6.jpg',
  '/public/sliderImage7.jpg',
  '/public/sliderImage8.jpg',
  '/public/sliderImage9.jpg',
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
          <img className="imageSlider" src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSlider;