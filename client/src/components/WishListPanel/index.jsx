import Drawer from "@mui/material/Drawer";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import { useState, useContext } from "react";
import { MyContext } from "../../App";

const initialWishListItems = [
  {
    id: 1,
    name: "Wish Item",
    category: "Category",
    price: 199,
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
  },
  // Add more wishlist items as needed
];

const WishListPanel = ({ open, onClose }) => {
  const [wishListItems, setWishListItems] = useState([...initialWishListItems]);
  const context = useContext(MyContext);

  const handleDelete = (id) => {
    setWishListItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Ensure wishListItems is always an array before reduce
  const total = Array.isArray(wishListItems)
    ? wishListItems.reduce((sum, item) => sum + (item.price || 0), 0)
    : 0;

  return (
    <Drawer
      open={open}
      className=""
      transitionDuration={200}
      anchor="right"
      onClose={onClose}
    >
      <div className="box w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw] h-full !rounded-lg flex flex-col relative bg-[rgb(227,221,221)]">
        <div className="heading shadow-md flex items-center justify-between !px-4 rounded-lg !py-4 w-full">
          <h1 className="!text-lg sm:!text-xl">Wishlist</h1>
          <IoCloseOutline
            onClick={onClose}
            className="text-2xl sm:text-3xl cursor-pointer link"
          />
        </div>
        <div className="scroll w-full flex flex-col gap-2 !p-3 max-h-[60vh] overflow-y-auto overflow-x-hidden flex-1">
          {Array.isArray(wishListItems) && wishListItems.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Your wishlist is empty.</div>
          ) : (
            Array.isArray(wishListItems) &&
            wishListItems.map((item) => (
              <div key={item.id} className="cart rounded-md !bg-white shadow-md w-full flex flex-col sm:flex-row items-center !px-3 !py-4 gap-3">
                <div className="imag w-full sm:w-[20%] flex items-center justify-center mb-2 sm:mb-0">
                  <img
                    className="w-20 h-20 sm:w-[4vw] sm:h-[4vw] border object-cover rounded"
                    src={item.image}
                    alt="Product"
                  />
                </div>
                <div className="w-full sm:w-[80%] relative gap-4 items-center justify-between flex flex-col sm:flex-row bg-white px-2 py-1 rounded">
                  <div className="info w-full sm:w-auto text-center sm:text-left">
                    <Link className="link" to="/productDetails">
                      <h1 className="!text-black !font-[500] text-base sm:text-lg">{item.name}</h1>
                    </Link>
                    <h2 className="!text-black !font-[500] text-sm sm:text-base">{item.category}</h2>
                    <h3 className="!text-xs sm:!text-[.81vw]">
                      <span className="!text-red-400">${item.price}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                    <MdDelete
                      className="link text-black cursor-pointer !text-xl sm:!text-2xl"
                      onClick={() => handleDelete(item.id)}
                    />
                    <Button className="w-1/2 sm:w-[40%] h-8 sm:h-[50%] btn-org text-xs sm:text-sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Fixed bottom panel */}
        <div
          className="!bottom-10 !rounded-lg !shadow-md left-3 w-[98%] sm:w-[95%] bg-white border-t !border-zinc-400 px-3 sm:px-5 py-3 sm:py-4 z-10"
          style={{ position: "sticky", bottom: 0 }}
        >
          <div className="bottomInfo gap-3 !py-3 sm:!py-5 !px-2 sm:!px-4 flex flex-col !items-center !justify-between w-full">
            <div className="flex items-center w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Items</h1>
              <span>{Array.isArray(wishListItems) ? wishListItems.length : 0}</span>
            </div>
            <div className="flex items-center w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Total</h1>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="w-full !p-2 sm:!p-5 !pb-6 sm:!pb-10 mt-2">
            <Link to={"/cart"} onClick={() => setWishListItems(false)} className="w-full sm:w-1/2">
              <Button className="btn-org hover:!bg-black !font-[500] !w-full !text-white text-sm sm:text-base">Go to Cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default WishListPanel;