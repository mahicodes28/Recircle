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
          className={`info  absolute flex flex-col h-full justify-center 
            ${props.info === "left" ? "left-0" : "right-0"} 
            ${props.width == 1/2 ? "w-[62%]": "w-[60%]"} md:w-[50%] xl:w-[50%] !p-4 xl:!p-4 md:!p-4 top-0  bg-transparent`}
        >
          <h2 className={`${props.width==1/2 ? "text-xs xl:text-2xl" : "text-2xl md:text-xl xl:text-4xl"} !mix-blend-normal  text-left font-semibold`}>{props.title}</h2>
          <h3 className={`${props.width==1/2 ? "text-xs xl:text-xl" : "text-xl xl:text-2xl md:text-md"}  !mix-blend-normal gap-1 flex`}>
            at
            <span className={`${props.width==1/2 ? "text-xs xl:text-2xl" : "text-lg xl:text-2xl md:text-md"}   text-red-500 font-semibold`}>₹{props.price}</span>
          </h3>
          <div className={`w-full ${props.width==1/2? "mt-2" :"!mt-4 "} xl:mt-4 md:mt-4 text-left`}>
            <Link to={props.link} className={`btn-black rounded-md ${props.width == 1/2 ? "!p-1 text-[.4rem] xl:text-xl bg-blue-500 " : "!p-3 text-[.8rem] xl:text-2xl bg-blue-500 md:text-md "} `}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2