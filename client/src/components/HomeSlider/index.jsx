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
    <div className="w-full h-[40vw] max-h-[400px] min-h-[180px] sm:h-[28vw] sm:max-h-[500px] sm:min-h-[220px] rounded-lg overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={false}
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
            <img
              className="imageSlider w-full h-[40vw] max-h-[400px] min-h-[180px] sm:h-[28vw] sm:max-h-[500px] sm:min-h-[220px] object-cover rounded-lg"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;