import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FiMinusSquare } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";
import { Collapse } from 'react-collapse';
import "../CategoryCollapse/style.css";

const categoryData = [
  {
    title: "Fashion",
    subcategories: [
      {
        title: "Apparel",
        items: ["Apparel0", "Apparel1", "Apparel2", "Apparel3"],
      },
    ],
  },
  {
    title: "Groceries",
    subcategories: [
      {
        title: "Bakery Products",
        items: ["Product1", "product2", "product3", "product4"]
      }
    ]
  }
];

const CategoryCollapse = (props) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null)
  const [InnerSubMenuIndex, setInnerSubMenuIndex] = useState(null)
  const openSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null)
    }
    else {
      setSubMenuIndex(index)
    }
  }
  const openInnerSubMenu = (index) => {
    if (InnerSubMenuIndex === index) {
      setInnerSubMenuIndex(null)
    }
    else {
      setInnerSubMenuIndex(index)
    }
  }

  return (
    <>
      <Collapse isOpened={true}>
        <div className='scroll max-h-[70vh] overflow-y-auto px-2 sm:px-4'>
          <ul className='w-full'>
            {categoryData.map((cat, catIndex) => (
              <li key={catIndex} className='list-none'>
                <div className='flex justify-between items-center pr-2 sm:pr-3'>
                  <Button className='w-full !text-base sm:!text-md !capitalize !text-left !text-black !justify-between'>
                    {cat.title}
                  </Button>
                  {subMenuIndex === catIndex ? (
                    <FiMinusSquare className="cursor-pointer text-lg sm:text-xl" onClick={() => openSubmenu(catIndex)} />
                  ) : (
                    <FaRegPlusSquare className="cursor-pointer text-lg sm:text-xl" onClick={() => openSubmenu(catIndex)} />
                  )}
                </div>

                {/* Submenu appears BELOW and pushes content down */}
                {subMenuIndex === catIndex && (
                  <ul className='py-2'>
                    {cat.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <div className='flex justify-between items-center'>
                          <Button className='!text-left !text-base sm:!text-md !pl-0 !text-black !capitalize !w-full'>
                            {sub.title}
                          </Button>
                          {InnerSubMenuIndex === subIndex ? (
                            <FiMinusSquare className="cursor-pointer text-base sm:text-lg" onClick={() => openInnerSubMenu(subIndex)} />
                          ) : (
                            <FaRegPlusSquare className="cursor-pointer text-base sm:text-lg" onClick={() => openInnerSubMenu(subIndex)} />
                          )}
                        </div>

                        {InnerSubMenuIndex === subIndex && (
                          <ul className='pl-4 sm:pl-6 py-1'>
                            {sub.items.map((item, idx) => (
                              <li key={idx} className='mb-1'>
                                <Link to="/" className='link text-sm sm:text-base w-full pl-4 sm:pl-8 justify-start block'>
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </>
  )
}

export default CategoryCollapse