import React from 'react'
import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
  <>
   <div className="bg-bluee-100 hover:rotate-2 hover:scale-115 transition-transform duration-300 select-none w-full h-full flex items-center justify-center">
          
             <Link to={props.Link} className="item  ">
          
          <img src={props.img} alt={props.alt} />
              </Link>
          
      </div>
  </>
  )
}

export default BannerBox