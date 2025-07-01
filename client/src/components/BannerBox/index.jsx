import React from 'react'
import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
    <div className="bg-blue-100 hover:rotate-2 hover:scale-105 transition-transform duration-300 select-none w-full h-full flex items-center justify-center p-2 sm:p-4 rounded-lg">
      <Link to={props.Link} className="item w-full h-full flex items-center justify-center">
        <img
          src={props.img}
          alt={props.alt}
          className="w-full h-auto max-h-[120px] sm:max-h-[180px] md:max-h-[220px] object-contain rounded-md"
        />
      </Link>
    </div>
  )
}

export default BannerBox