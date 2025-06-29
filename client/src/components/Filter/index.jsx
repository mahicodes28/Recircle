import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./style.css"
import { Collapse } from 'react-collapse';
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const categories = [
  "Clothing",
  "Groceries",
  "Electronics",
  "Home & Kitchen",
  "Books",
  "Arts",
  "Wellness"
  // Add more categories as needed
];

const Filter = () => {
  const [down, setDown] = useState(true);
  const [availability, setAvailability] = useState(true);

  const DropDown = () => {
    setDown((prev) => !prev);
  };
  const Available = () => {
    setAvailability((prev) => !prev);
  };

  return (
    <>
     <aside
  className="Filter flex flex-col gap-2 z-10 bg-white sticky top-0"
>
        <div className="box !p-4 ">
          <div className="head !py-1 flex items-center justify-between">
            <h3 className='!text-xl font-[500]'>Product Categories</h3>
            <Button onClick={DropDown} className='flex transition-all duration-100 items-center !min-w-0 !p-0' disableRipple>
              {down ? <IoIosArrowUp className='!text-xl' /> : <IoIosArrowDown className='!text-xl' />}
            </Button>
          </div>
          <Collapse isOpened={down}>
            <div className="scroll w-full !px-2 flex flex-col">
              <FormGroup>
                {categories.map((cat, idx) => (
                  <FormControlLabel
                    key={idx}
                    control={<Checkbox size="small" />}
                    label={cat}
                  />
                ))}
              </FormGroup>
            </div>
          </Collapse>
        </div>
        <div className="Avail !px-4 !pb-4 ">
          <div className="head !py-1 flex items-center justify-between">
            <h3 className='!text-xl font-[500]'>Availability</h3>
            <Button onClick={Available} className='flex transition-all duration-100 items-center !min-w-0 !p-0' disableRipple>
              {availability ? <IoIosArrowUp className='!text-xl' /> : <IoIosArrowDown className='!text-xl' />}
            </Button>
          </div>
          <Collapse isOpened={availability}>
            <div className="scroll w-full !px-2 flex flex-col">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="In Stock"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Out of Stock"
                />
              </FormGroup>
            </div>
            {/* <div className="Price flex flex-col gap-4 !pb-2">
              <h1 className='!text-xl font-[500]'>Filter by Price</h1>
              <RangeSlider />
            </div> */}
          </Collapse>
        </div>
      </aside>
    </>
  )
}

export default Filter