import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import "../Navigation/style.css";
import { useState } from 'react';
import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null)
  const [InnerSubMenuIndex, setInnerSubMenuIndex] = useState(null)

  const openSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null)
    } else {
      setSubMenuIndex(index)
    }
  }
  const openInnerSubMenu = (index) => {
    if (InnerSubMenuIndex === index) {
      setInnerSubMenuIndex(null)
    } else {
      setInnerSubMenuIndex(index)
    }
  }
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  }

  // Responsive width for Drawer
  const drawerWidth = { xs: '90vw', sm: 350, md: 350 };

  const DrawerList = (
    <Box
      sx={{
        width: drawerWidth,
        maxWidth: '100vw',
        position: 'relative',
        minHeight: '100vh',
        p: { xs: 1, sm: 2 },
        bgcolor: 'background.paper'
      }}
      className="categoryPanel"
      role="presentation"
    >
      <h1 className='text-base sm:text-lg px-2 sm:px-4 pt-4 sm:pt-5 border-b-2 border-gray-200 select-none'>
        Shop by Categories
      </h1>
      <IoCloseSharp
        className="text-xl cursor-pointer absolute top-4 right-4 sm:top-6 sm:right-5"
        onClick={toggleDrawer(false)}
      />
      <div className='scroll py-3 px-1 sm:py-4 sm:px-2'>
        <CategoryCollapse />
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={props.isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: drawerWidth,
            maxWidth: '100vw',
            borderRadius: { xs: 0, sm: '16px 0 0 16px' }
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;