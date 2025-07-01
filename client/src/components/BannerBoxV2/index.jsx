import React from 'react'
import { Link } from 'react-router-dom'

const BannerBoxV2 = (props) => {
  return (
    <div className="BannerBoxV2 w-full overflow-hidden rounded-md">
      <div className="image group relative h-full">
        <img
          src={props.src}
          className="w-full h-[120px] sm:h-[180px] md:h-[220px] object-cover transition-all duration-200 group-hover:scale-110"
          alt=""
        />
        <div
          className={`info absolute flex flex-col h-full justify-center 
            ${props.info === "left" ? "left-0" : "right-0"} 
            w-[80%] sm:w-[60%] md:w-[50%] p-2 sm:p-4 top-0 bg-white/70 md:bg-transparent`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-left font-semibold">{props.title}</h2>
          <h3 className="text-xs sm:text-sm gap-1 flex">
            at
            <span className="text-md text-red-500 font-semibold">{props.price}</span>
          </h3>
          <div className="w-full mt-2 sm:mt-4 text-left">
            <Link to={props.link} className="btn-org rounded-md p-2 text-xs sm:text-sm">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2