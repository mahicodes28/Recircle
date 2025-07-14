import React, { useContext, useEffect, useState } from "react";
import Filter from "../components/Filter";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import ProductItem from "../components/ProductSlider/ProductItem/index";
import ProductItemListView from "../components/ProductItemListView";
import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AppContext } from "../context/AppProvider";

const ProductListingByCate = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { category } = useParams();
  const { productsByCategory, searchByCategory } = useContext(AppContext);

  console.log(category);
  useEffect(() => {
    if (category) {
      searchByCategory(category);
    }
  }, [category]);

  // Sorting logic (example: A-Z, Z-A, Price High-Low, Price Low-High)
  const [sortType, setSortType] = useState("");
  let sortedProducts = [...(productsByCategory || [])];
  if (sortType === "A-Z") {
    sortedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
  } else if (sortType === "Z-A") {
    sortedProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
  } else if (sortType === "Price: High to Low") {
    sortedProducts.sort((a, b) => b.offerPrice - a.offerPrice);
  } else if (sortType === "Price: Low to High") {
    sortedProducts.sort((a, b) => a.offerPrice - b.offerPrice);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    setAnchorEl(null);
    if (type) setSortType(type);
  };

  return (
    <section className="!py-5 !w-[100vw] xl:!w-full">
      <div className="container !py-4 !text-zinc-400 ">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" className="link text-zinc-400 transition-all" color="inherit" to="/">
            Home
          </Link>
          <span className="text-blue-600 capitalize">{category}</span>
        </Breadcrumbs>
      </div>
      <div className="!w-[100%] xl:!px-3 xl:!px-16 flex !items-start gap-4 p-4">
        {/* Sidebar */}
        <Filter />
        {/* Main Content */}
        <div className="rightSection !px-1 xl:!pl-8 !min-h-[20vw] !py-2 xl:!py-5 w-full xl:!w-[80%] bg-white h-full !rounded-lg">
          <div className="flex bg-zinc-900 px-4 xl:!px-4 !py-3 w-[98%] xl:!w-[99%] rounded-md mb-3 items-center justify-between">
            <div className="col1 flex items-center itemViewActions">
              <Button
                className={`scale-0 xl:scale-100 flex xl:flex flex-col items-center justify-center xl:h-[40px] xl:w-[40px] xl:min-w-[40px] text-white rounded-full ${itemView === "list" ? "bg-blue-500" : ""}`}
                onClick={() => setItemView("list")}
              >
                <MdMenu />
              </Button>
              <Button
                className={`flex flex-col items-center justify-center xl:h-[40px] xl:w-[40px] xl:min-w-[40px] text-white rounded-full ${itemView === "grid" ? "bg-blue-500" : ""}`}
                onClick={() => setItemView("grid")}
              >
                <IoGrid />
              </Button>
              <span className="text-xs xl:text-md font-[500] !ml-2">
                There are <span className="font-semibold text-blue-600">{sortedProducts.length}</span> Products
              </span>
            </div>
            <div className="col2">
              <Button
                className="link !text-xs xl:text-auto !font-[500] !shadow-md !text-black !bg-white"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Sort By
              </Button>
              <Menu
                className="!mt-2"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleClose("A-Z")}>A to Z</MenuItem>
                <MenuItem onClick={() => handleClose("Z-A")}>Z to A</MenuItem>
                <MenuItem onClick={() => handleClose("Price: High to Low")}>Price: High to Low</MenuItem>
                <MenuItem onClick={() => handleClose("Price: Low to High")}>Price: Low to High</MenuItem>
              </Menu>
            </div>
          </div>
          <div
            className={
              itemView === "list"
                ? "hidden md:flex xl:flex flex-col gap-4 !mt-4 w-full p-4"
                : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-4"
            }
          >
            {sortedProducts?.map((product, idx) =>
              itemView === "list" ? (
                <ProductItemListView key={idx} product={product} />
              ) : (
                <ProductItem key={idx} product={product} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListingByCate;
