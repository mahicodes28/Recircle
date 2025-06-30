import { Button } from '@mui/material'
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

function Navigation() {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCatPanel = () => {
        setIsOpenCatPanel(true);
    }
const menuItems = ['Milk', 'Bread', 'Eggs', 'Cheese']; // you can modify this arra
  return (
    <>
    <nav className='py-2'>
        <div className="container m-auto flex justify-between gap-2 items-center h-15">
    <div className="col1 w-[25%]    ">
        <Button className="btn !flex !w-full !text-black !font-semibold !capitalize !text-[1.1vw] " onClick={openCatPanel}><CiMenuFries className=" !text-[1.2vw] !mr-2 !font-semibold "  />Shop by category<GoTriangleDown className="!ml-12 !text-[1.2vw] !font-semibold " /></Button>
    </div>
    <div className="col2 w-[60%] flex ">
        <ul className='nav flex justify-between gap-10 '>
            <li className='link'>
                <Link to="/" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Home</Link>
            </li>
              <li className='link relative'>
                <Link to="/productListing" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Groceries</Link>
              <div className='subMenu absolute top-[110%] opacity-0 !rounded-md left-0 min-w-[10vw] bg-white-400 shadow-lg transition-all'>
  <ul className='grid grid-cols-2 gap-2 px-4 py-3'>
    {menuItems.map((item, index) => (
      <li key={index} className='list-none'>
        <Link to={`/${item.toLowerCase()}`} className='block'>
          <Button className='!text-zinc-700 w-full !justify-start !capitalize !rounded-md'>
            {item}
          </Button>
        </Link>
      </li>
    ))}
  </ul>
</div>


            
            </li>
              <li className='link'>
                <Link to="/productListing" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Clothing</Link>
            </li>
              <li className='link'>
                <Link to="/productListing" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Electronics</Link>
            </li>
              <li className='link'>
                <Link to="/productListing" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Art</Link>
            </li>
              <li className='link'>
                <Link to="/productListing" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Wellness</Link>
            </li>
              <li className='link'>
                <Link to="/productListing" className="text-[1.1vw] !font-semibold !capitalize   !transition duration-200 ease-in-out">Beauty</Link>
            </li>
        </ul>
    </div>
    <div className="col3 w-[15%] flex justify-end items-center">
    <p className='text-[.8vw] select-none !font-semibold !capitalize !text-gray-600'>
        Get Assured Quality Products✔️
    </p>
    </div>
    </div>
    </nav>

    <CategoryPanel isOpen={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
  </>
  )
}

export default Navigation