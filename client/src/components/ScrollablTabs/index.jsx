import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ScrollableTabs = () => {
    const [value, setValue] = React.useState(0);
    const tabLabels = [ //Item tabs
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
<>
    
     <Tabs
  value={value}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons="auto"
  aria-label="scrollable auto tabs example"
>
  {tabLabels.map((label, index) => (
    <Tab key={index} label={label} />
  ))}
</Tabs>


</>

)
}

export default ScrollableTabs