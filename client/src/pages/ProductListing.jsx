import React, { useState } from "react";
import Filter from "../components/Filter";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductSlider/ProductItem/index";
import ProductItemListView from "../components/ProductItemListView";
import "../pages/styles.css";
import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="bg-zinc-200 !py-5 !w-full">
        <div className="container !py-4 ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="link transition-all"
              color="inherit"
              to="/"
            >
              Home
            </Link>
            <Link
              className="link transition-all"
              underline="hover"
              color="inherit"
              to={"/"}
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
        <div className="!w-[100%]  !px-16 flex !items-start gap-4 p-4">
          {/* Sidebar */}
      <div className="!w-[20%]">
    <div
      className="sidewrapper !rounded-md !bg-blue-200 !sticky top-0"
      style={{ minWidth: "220px" }}
    >
      <Filter />
    </div>
  </div>
          {/* Main Content */}
          <div className="rightSection !pl-8 !min-h-[20vw] !py-5 !w-[80%] bg-white h-full !rounded-lg">
            <div className="flex bg-zinc-200 !px-4 !py-3 w-[97%] rounded-md mb-3 items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
                <Button className={`!h-[40px] !w-[40px] !min-w-[40px] !text-black !rounded-full ${itemView==="list" && 'active'}`} onClick={() => setItemView("list")}><MdMenu /></Button>
                <Button className={`!h-[40px] !w-[40px] !min-w-[40px] !text-black !rounded-full ${itemView==="grid" && 'active'}`} onClick={() => setItemView("grid3")}><IoGrid /></Button>
                <span className="text-md font-[500] !ml-2">There are <span className="font-semibold text-blue-600">23</span> Products</span>
              </div>
              <div className="col2">
                <Button className="link !font-[500] !shadow-md !text-black !bg-white"
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Sort By
                </Button>
                <Menu className="!mt-2"
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Price: High to Low</MenuItem>
                  <MenuItem onClick={handleClose}>Price: Low to High</MenuItem>
                </Menu>
              </div>
            </div>
            <div className={
              itemView === "list"
                ? "flex flex-col grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols1 gap-4 w-full p-4"
                : itemView === "grid3"
                  ? "grid mt-4 grid-cols-4 gap-4 overflow-y-auto h-[25vw] items-start !w-full p-4"
                  : "grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start !w-full p-4"
            }>
              {[...Array(23)].map((_, idx) =>
                itemView === "list"
                  ? <ProductItemListView key={idx} />
                  : <ProductItem key={idx} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing