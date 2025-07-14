import { Button } from '@mui/material'
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

function Navigation() {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCatPanel = () => {
        setIsOpenCatPanel(true);
    }
    const menuItems = ['Milk', 'Bread', 'Eggs', 'Cheese'];
    

    return (
        <>
            <nav className='py-2 bg-black text-white border-b-0 border-white w-full'>
                <div className="container m-auto flex flex-col md:flex-row justify-between gap-2 items-center h-auto md:h-15 px-2 md:px-0">
                    {/* Category Button */}
                    <div className="col1 w-full hidden xl:block xl:w-[25%] md:w-[25%] mb-2 md:mb-0">
                        <Button
                            className="btn flex w-full text-black font-semibold capitalize text-base md:text-[1.1vw]"
                            onClick={openCatPanel}
                        >
                            <CiMenuFries className="text-lg md:text-[1.2vw] mr-2 font-semibold" />
                            Shop by category
                            <GoTriangleDown className="ml-4 md:ml-12 text-lg md:text-[1.2vw] font-semibold" />
                        </Button>
                    </div>
                    {/* Navigation Links */}
                    <div className="col2 w-full flex flex-col !py-2  md:w-[60%] xl:w-[60%]  flex justify-center">
                    <h1 className='text-left w-full pt-2 text-[1.5rem] font-[600] xl:hidden md:hidden'>Category</h1>
                        <ul className='nav flex flex-nowrap !px-4 overflow-x-scroll md:overflow-x-hidden xl:overflow-x-hidden overflow-y-hidden md:flex-nowrap xl:flex-nowrap justify-center md:justify-between xl:justify-between gap-4 xl:gap-10 md:gap-10'>                  
                            
                               <li className='link'>
                                <NavLink
                                    to="/productListing"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl-text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-indigo-600 underline" : ""}`
                                    }
                                >
                                    All
                                </NavLink>
                            </li>
                                      <li className='link'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl-text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-indigo-600 underline" : ""}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='link relative'>
                                <NavLink
                                    to="/productListing/Groceries"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl:text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-blue-600 underline" : ""}`
                                    }
                                >
                                    Groceries
                                </NavLink>
                                <div className='subMenu absolute top-[110%] left-0 min-w-[40vw] md:min-w-[10vw] bg-white shadow-lg rounded-md opacity-0 md:opacity-0 group-hover:opacity-100 transition-all z-50'>
                                    <ul className='grid grid-cols-2 gap-2 px-4 py-3'>
                                        {menuItems.map((item, index) => (
                                            <li key={index} className='list-none'>
                                                <Link to={`/${item.toLowerCase()}`} className='block'>
                                                    <Button className='text-zinc-700 w-full justify-start capitalize rounded-md text-sm md:text-base'>
                                                        {item}
                                                    </Button>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className='link'>
                                <NavLink
                                    to="/productListing/Clothing"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl:text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-blue-600 underline" : ""}`
                                    }
                                >
                                    Clothing
                                </NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    to="/productListing/Electronics"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl:text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-blue-600 underline" : ""}`
                                    }
                                >
                                    Electronics
                                </NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    to="/productListing/Art"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl:text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-blue-600 underline" : ""}`
                                    }
                                >
                                    Art
                                </NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    to="/productListing/Wellness"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl:text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-blue-600 underline" : ""}`
                                    }
                                >
                                    Wellness
                                </NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    to="/productListing/Beauty"
                                    className={({ isActive }) =>
                                        `text-[1rem] xl:text-[1.1vw] md:text-[1.1vw] font-[500] md:font-semibold xl:font-semibold capitalize transition duration-200 ease-in-out ${isActive ? "text-blue-600 underline" : ""}`
                                    }
                                >
                                    Beauty
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Info Text */}
                    <div className="col3 w-full md:w-[15%] flex justify-end items-center mt-2 md:mt-0">
                        <p className='text-xs md:text-[.8vw] select-none font-semibold capitalize text-blue-600 text-right w-full'>
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