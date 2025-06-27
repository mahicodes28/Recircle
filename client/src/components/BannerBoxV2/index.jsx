import React from 'react'
import { Link } from 'react-router-dom'

const BannerBoxV2 = (props) => {
  return (
    <div className="BannerBoxV2  w-full !overflow-hidden rounded-md">
        <div className="image group relative h-full">
        <img src={props.src} className=' w-full transition-all duration-200 group-hover:scale-110' alt="" />
           <div className={`info absolute flex flex-col h-[100%] justify-center w-[50%] !p-4 top-0 ${props.info==="left" ? "left-0" : "right-0"}`}>
            <h2 className='text-2xl !font-[600] '>{props.title}</h2>
            <h3 className="text-sm gap-1 flex">at 
            <span className='text-md text-red-500 !font-[600]'>{props.price}</span>

            </h3>
            <div className='w-full !mt-4'>
                            <Link to={props.link} className='btn-org !rounded-md !p-2'> Shop Now</Link>

            </div>
            </div> 
        </div>
    </div>
)
}

export default BannerBoxV2