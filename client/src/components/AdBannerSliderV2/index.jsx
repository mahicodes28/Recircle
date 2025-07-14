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
      <div className="box mx-auto px-2 md:px-10 xl:px-20 bg-transparent rounded-md p-2 md:p-4 mb-2 mt-2">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={props.spaceBetween}
          
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
            <BannerBoxV2 width={props.width} height={"20vh"} info={"right"} title="Chings Schezwan Chutney " link={"/"} price={"12"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752502585/IMG_1009_af3qsr.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 width={props.width} height={"20vh"} info={"right"} title="Colgate Shining White Toothpaste" link={"/"} price={"100"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752504415/IMG_1013_a4dz1k.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 width={props.width} height={"20vh"} info={"left"} title="Maggie Noodles" link={"/"} price={"12"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752504570/IMG_1015_zwsyt4.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 width={props.width} height={"20vh"} info={"left"} title="Amul Doodh 1 litre" link={"/"} price={"28"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752504416/IMG_1011_kfcxod.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 width={props.width} height={"20vh"} info={"right"} title="Hope-shine Repeat Beer Shampoo 2in1" link={"/"} price={"12"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752505197/IMG_1016_aisvgm.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBoxV2 width={props.width} height={"20vh"} info={"right"} title="Garniegr Clean and clear Face wash" link={"/"} price={"100"} src={"https://res.cloudinary.com/deg0bizoi/image/upload/v1752509634/IMG_1022_kjnvpa.png"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default AdBannerSliderV2