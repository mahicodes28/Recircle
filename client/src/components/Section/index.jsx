import React from 'react'
import { ImTruck } from "react-icons/im";
import { RiDiscountPercentLine } from "react-icons/ri";
function Section() {
  return (
    <>
    
        <div className="container !mt-8 flex gap-5  items-center !py-8 !px-5 border-2 border-blue-500 rounded-lg shadow-lg">
        <div className="col1 w-[40%] ">
          <h1 className="text-3xl uppercase flex gap-3 items-center font-semibold text-left mb-4"><ImTruck className='!text-5xl'/>Bulk Ordering Available. </h1>
        </div>
        <div className="col2 w-[60%]">
          <h1 className="text-2xl capitalize  text-center ">Buy you're event needs<br/> in lot's and in cheap rates </h1>
        </div>
        <div className="col3 items-center  flex  w-[10vw] ">
          <h1 className='!text-center text-xl '>Discounted Prices</h1>
          <RiDiscountPercentLine className='!text-4xl !text-center !items-center' />
        </div>
      </div>
    </>
  )
}
export default Section
