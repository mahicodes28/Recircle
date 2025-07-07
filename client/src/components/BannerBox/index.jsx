import React from 'react'
import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
    <div className=" hover:rotate-2 hover:scale-105 transition-transform duration-300 select-none w-full h-full flex items-center justify-center p-2 sm:p-4 rounded-lg">
      <Link to={props.Link} className="item w-full h-full flex items-center justify-center">
        <img
          src={props.img}
          alt={props.alt}
          className="w-full h-auto min-h-[24vh] md:max-h-[30vw] xl:max-h-[30vw] object-contain rounded-md"
        />
      </Link>
    </div>
  )
}

export default BannerBox