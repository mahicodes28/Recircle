import React from 'react'
import { ImTruck } from "react-icons/im";
import { RiDiscountPercentLine } from "react-icons/ri";
function Section() {
  return (
    <>
      <div className="container !mt-8 flex flex-col md:flex-row gap-5 items-center !py-6 sm:!py-8 !px-3 sm:!px-5 border-2 border-blue-500 rounded-lg shadow-lg">
        <div className="col1 w-full md:w-[40%] mb-4 md:mb-0">
          <h1 className="text-2xl sm:text-3xl uppercase flex gap-3 items-center font-semibold text-left mb-2 sm:mb-4">
            <ImTruck className='!text-4xl sm:!text-5xl' />
            Bulk Ordering Available.
          </h1>
        </div>
        <div className="col2 w-full md:w-[60%] mb-4 md:mb-0">
          <h1 className="text-lg sm:text-2xl capitalize text-center">
            Buy your event needs<br /> in lots and at cheap rates
          </h1>
        </div>
        <div className="col3 flex flex-col items-center w-full md:w-[15vw]">
          <h1 className='text-center text-lg sm:text-xl mb-1'>Discounted Prices</h1>
          <RiDiscountPercentLine className='!text-3xl sm:!text-4xl text-center' />
        </div>
      </div>
    </>
  )
}
export default Section