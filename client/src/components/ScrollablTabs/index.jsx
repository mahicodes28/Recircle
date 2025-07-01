import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const ScrollableTabs = () => {
  const [value, setValue] = React.useState(0);
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
    <div className="w-full px-2 sm:px-4 md:px-8">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className="w-full"
        TabIndicatorProps={{ style: { height: 3 } }}
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            label={label}
            className="text-xs sm:text-base md:text-lg font-medium"
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