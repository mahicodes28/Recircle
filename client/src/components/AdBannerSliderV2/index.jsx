import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

import '../AdBannerSliderV2/style.css';
import { Link } from 'react-router-dom';
import BannerBoxV2 from '../BannerBoxV2';

const AdBannerSliderV2 = (props) => {
  return (
    <>
      <div className="box mx-auto px-2 md:px-10 lg:px-20 bg-transparent rounded-md p-2 md:p-4 mb-2 mt-2">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={props.spaceBetween}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="AdBannerSliderV2"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: props.items,
              spaceBetween: props.spaceBetween,
            },
          }}
        >
          <SwiperSlide>
            <BannerBoxV2 info={"right"} title="Buy Men's Footwear at low price" link={"/"} price={"$12"} src={"/public/BannerBoxV2Img1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 info={"left"} title="Buy Apple's Iphone" link={"/"} price={"$100"} src={"/public/BannerBoxV2Img2.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 info={"right"} title="Buy Men's Footwear at low price" link={"/"} price={"$12"} src={"/public/BannerBoxV2Img1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 info={"left"} title="Buy Apple's Iphone" link={"/"} price={"$100"} src={"/public/BannerBoxV2Img2.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 info={"right"} title="Buy Men's Footwear at low price" link={"/"} price={"$12"} src={"/public/BannerBoxV2Img1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 info={"left"} title="Buy Apple's Iphone" link={"/"} price={"$100"} src={"/public/BannerBoxV2Img2.jpg"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default AdBannerSliderV2