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
      <div className="box w-[30vw] h-full !rounded-lg flex flex-col relative bg-[rgb(227,221,221)]">
        <div className="heading shadow-md flex items-center justify-between  !px-4 rounded-lg !py-4 w-[full]">
          <h1 className="!text-xl">Wishlist</h1>
          <IoCloseOutline
            onClick={onClose}
            className="text-3xl cursor-pointer link"
          />
        </div>
        <div className="scroll w-full flex flex-col gap-2 !p-3 max-h-[60vh] overflow-y-auto overflow-x-hidden flex-1">
          {Array.isArray(wishListItems) && wishListItems.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Your wishlist is empty.</div>
          ) : (
            Array.isArray(wishListItems) &&
            wishListItems.map((item) => (
              <div key={item.id} className="cart rounded-md !bg-white shadow-md w-fit flex items-center w-full !px-3 !py-5">
                <div className="imag !w-[20%] flex items-center justify-center">
                  <img
                    className="w-[4vw] h-[4vw] border object-cover rounded"
                    src={item.image}
                    alt="Product"
                  />
                </div>
                <div className="w-[80%] relative gap-10 items-center justify-between flex bg-white px-2 py-1 rounded">
                  <div className="info">
                    <Link className="link" to="/productDetails">
                      <h1 className="!text-black !font-[500]">{item.name}</h1>
                    </Link>
                    <h2 className="!text-black !font-[500]">{item.category}</h2>
                    <h3 className="!text-[.81vw]">
                      <span className="!text-red-400">${item.price}</span>
                    </h3>
                  </div>
                  <MdDelete
                    className="absolute link text-black cursor-pointer !text-2xl -top-3 right-5"
                    onClick={() => handleDelete(item.id)}
                  />
                  <Button className="w-[40%] h-[50%] btn-org">Add to Cart</Button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Fixed bottom panel */}
        <div className="!bottom-10 !rounded-lg !shadow-md left-3 w-[95%] bg-white border-t !border-zinc-400 px-5 py-4 z-10"
          style={{ position: "sticky", bottom: 0 }}>
          <div className="bottomInfo gap-3 !py-5 !px-4 flex flex-col !items-center !justify-between w-full">
            <div className="flex items-center w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Items</h1>
              <span>{Array.isArray(wishListItems) ? wishListItems.length : 0}</span>
            </div>
            <div className="flex items-center w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Total</h1>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="w-[100%] !p-5 !pb-10 mt-2">
            <Link to={"/cart"} onClick={() => setWishListItems(false)} className="w-1/2">
              <Button className="btn-org hover:!bg-black !font-[500] !w-full !text-white">Go to Cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default WishListPanel;