import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import "../Navigation/style.css";
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMinusSquare } from "react-icons/fi";

const CategoryPanel = (props) => {
  
  const [subMenuIndex,setSubMenuIndex] = useState(null)
  const [InnerSubMenuIndex,setInnerSubMenuIndex] = useState(null)
  const openSubmenu =(index) =>{
    if(subMenuIndex===index){
      setSubMenuIndex(null)
    }
    else{
      setSubMenuIndex(index)
    }
  }
const openInnerSubMenu=(index)=>{
  if(InnerSubMenuIndex===index){
      setInnerSubMenuIndex(null)
    }
    else{
      setInnerSubMenuIndex(index)
    }
  }
    const toggleDrawer = (newOpen)=>()=>{
        props.setIsOpenCatPanel(newOpen);
    }

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
  // Add more categories as needed
  {title:"Groceries",
  subcategories:[
    {
      title : "Bakery Products",
      items : [ "Product1","product2","product3","product4"]
    }
  ]}

  
];

  const DrawerList = (
    <Box sx={{ width: 250 }} className="categoryPanel" role="presentation" >
        <h1 className='text-lg !px-4 !pt-5 border-b-2 border-gray-200  select-none'>Shop by Categories</h1>
        <IoCloseSharp className="!text-xl !cursor-pointer !absolute !top-6 !right-5" onClick={toggleDrawer(false)} />
      <div className='scroll !py-4 !px-2 '>
        {/* First level */}
<ul className='w-full'>
  {categoryData.map((cat, catIndex) => (
    <li key={catIndex} className='list-none'>
      <div className='flex justify-between items-center !pr-3'>
        <Button className='w-full !text-md !capitalize !text-left !text-black !justify-between'>
          {cat.title}
        </Button>
        {subMenuIndex === catIndex ? (
          <FiMinusSquare onClick={() => openSubmenu(catIndex)} />
        ) : (
          <FaRegPlusSquare onClick={() => openSubmenu(catIndex)} />
        )}
      </div>

      {/* Submenu appears BELOW and pushes content down */}
      {subMenuIndex === catIndex && (
        <ul className=' py-2'>
          {cat.subcategories.map((sub, subIndex) => (
            <li key={subIndex}>
              <div className='flex justify-between items-center'>
                <Button className='!text-left !text-md !pl-0 !text-black !capitalize !w-full'>
                  {sub.title}
                </Button>
                {InnerSubMenuIndex === subIndex ? (
                  <FiMinusSquare onClick={() => openInnerSubMenu(subIndex)} />
                ) : (
                  <FaRegPlusSquare onClick={() => openInnerSubMenu(subIndex)} />
                )}
              </div>

              {InnerSubMenuIndex === subIndex && (
                <ul className='pl-6 py-1'>
                  {sub.items.map((item, idx) => (
                    <li key={idx} className='!mb-1'>
                      <Link to="/" className='link !text-sm w-full !pl-8 !justify-start'>
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
    </Box>
  );

  return (
    <div>

      <Drawer open={props.isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;