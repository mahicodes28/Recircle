import React from 'react'
import { Link } from 'react-router-dom'

const BannerBoxV2 = (props) => {
  return (
    <div className={`BannerBoxV2  overflow-hidden rounded-md w-${props.width}`}>
      <div className="image group relative h-full">
        <img
          src={props.src}
          className={ `w-[100%]  min-h-[14vh] h-[${props.height}] md:h-[15.2vw] xl:h-[15.2vw] object-cover transition-all duration-200 group-hover:scale-110`}
          alt=""
        />
        <div
          className={`info absolute flex flex-col h-full justify-center 
            ${props.info === "left" ? "left-0" : "right-0"} 
            ${props.width == 1/2 ? "w-[62%]": "w-[60%]"} md:w-[50%] xl:w-[50%] !p-4 xl:!p-4 md:!p-4 top-0  bg-transparent`}
        >
          <h2 className={`${props.width==1/2 ? "text-sm" : "text-2xl"} md:text-xl lg:text-2xl text-left font-semibold`}>{props.title}</h2>
          <h3 className={`${props.width==1/2 ? "text-xs" : "text-xl"} xl:text-md md:text-md gap-1 flex`}>
            at
            <span className={`${props.width==1/2 ? "text-xs" : "text-lg"} xl:text-md md:text-md text-red-500 font-semibold`}>{props.price}</span>
          </h3>
          <div className={`w-full ${props.width==1/2? "mt-2" :"!mt-4"} xl:mt-4 md:mt-4 text-left`}>
            <Link to={props.link} className={`btn-org rounded-md ${props.width == 1/2 ? "!p-1 !text-[.4rem]" : "!p-3 !text-[.8rem]"}  md:!text-md xl:!text-md`}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2