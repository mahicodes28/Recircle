import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { assets } from '../../assets/asset.js';

// const slideImages = [
//   '/public/sliderImage1.jpg',
//   '/public/sliderImage2.jpg',
//   '/public/sliderImage3.jpg',
//   '/public/sliderImage4.jpg',
//   '/public/5.jpg',
//   '/public/sliderImage6.jpg',
//   '/public/sliderImage7.jpg',
//   '/public/sliderImage8.jpg',
//   '/public/sliderImage9.jpg',
//   '/public/sliderVideo1.mp4',
//   '/public/sliderVideo3.mp4'
// ];

const slideImages =[
  assets.SliderVideo4,
  // assets.SliderImage2,
  // assets.SliderImage3,
  assets.SliderVideo5,
  assets.SliderVideo6,
  // assets.SliderImage6,
  // assets.SliderImage7,
  // assets.SliderImage8,
  // assets.SliderImage9,
  assets.sliderVideo1,
  assets.sliderVideo2,
  assets.sliderVideo3,
  
]

function HomeSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const isVideo = slideImages[activeIndex].endsWith('.mp4');
    timeout = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, isVideo ? 10000 : 2000); // 10s for video, 2s for image

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      effect="fade"
      navigation={false}
      pagination={{ clickable: true }}
      loop={true}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
      autoplay={false} // Disable Swiper's autoplay
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onInit={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slideImages.map((src, index) => (
        <SwiperSlide key={index}>
          {src.endsWith('.mp4') ? (
            <video
              className="imageSlider"
              src={src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img
              className="imageSlider"
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSlider;