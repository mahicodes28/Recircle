import React, { useContext, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppContext } from '../../context/AppProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const ScrollableTabs = () => {
  const {productsByCategory,searchByCategory} = useContext(AppContext);
  const [value , setValue] = useState([]);

 


  const tabLabels = [
    "Fashion",
    "Groceries",
    "Beauty",
    "Electronics",
    "Home & Living",
    "Sports",
    "Toys",
    "Books",
    "Health & Personal Care"
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full  px-2 sm:px-4 md:px-8">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className="w-full !text-white"
        TabIndicatorProps={{ style: { height: 3 } }}
      >
        {tabLabels.map((label, index) => (
          <Tab onClick={() => { searchByCategory(label) }}
            key={index}
            label={label}
            className="text-xs sm:text-base !text-white md:text-lg font-medium"
            sx={{
              minWidth: { xs: 80, sm: 120, md: 140 },
              px: { xs: 1, sm: 2, md: 3 },
            }}
          />
        ))}
      </Tabs>
    </div>
  )
}

export default ScrollableTabs