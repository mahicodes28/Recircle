import Drawer from "@mui/material/Drawer";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import { useState, useMemo, useContext } from "react";
import { MyContext } from "../../App";

const initialCartItems = [
  {
    id: 1,
    name: "Name",
    category: "Category",
    qty: 2,
    price: 234,
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
  },
  // Add more items as needed
];

const SHIPPING_COST = 20; // Example shipping cost

const CartPanel = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const context = useContext(MyContext)
  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals using useMemo for performance
  const { itemsTotal, shipping, totalInc, totalExc } = useMemo(() => {
    const itemsTotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    const shipping = cartItems.length > 0 ? SHIPPING_COST : 0;
    const totalInc = itemsTotal + shipping; // tax included (for demo, no tax breakdown)
    const totalExc = itemsTotal; // tax excluded (for demo)
    return { itemsTotal, shipping, totalInc, totalExc };
  }, [cartItems]);

  return (
    <Drawer
      open={open}
      className=""
      transitionDuration={200}
      anchor="right"
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100vw', sm: '80vw', md: '30vw' },
          maxWidth: '100vw',
          borderRadius: { xs: 0, sm: '16px 0 0 16px' },
        }
      }}
    >
      <div className="box h-full flex flex-col relative bg-[rgb(227,221,221)]">
        <div className="heading shadow-md flex items-center justify-between !px-4 rounded-lg !py-4 w-full">
          <h1 className="text-lg xl:text-xl">Shopping Cart</h1>
          <IoCloseOutline
            onClick={onClose}
            className="text-2xl xl:text-3xl cursor-pointer link"
          />
        </div>
        <div className="scroll w-full flex flex-col !gap-2 !p-3 max-h-[60vh] overflow-y-auto overflow-x-hidden flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 !py-10">Your cart is empty.</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart rounded-md bg-white shadow-md flex flex-col xl:flex-row items-center w-full !px-3 !py-4 xl:!py-5">
                <div className="imag w-full xl:w-[20%] flex items-center justify-center !mb-2 xl:!mb-0">
                  <img
                    className="w-20 h-20 xl:w-[4vw] xl:h-[4vw] border object-cover rounded"
                    src={item.image}
                    alt="Product"
                  />
                </div>
                <div className="w-full xl:w-[80%] relative bg-white !px-2 !py-1 rounded">
                  <Link className="link" to="/">
                    <h1 className="text-black font-[500] text-base xl:text-lg">{item.name}</h1>
                  </Link>
                  <h2 className="text-black font-[500] text-sm xl:text-base">{item.category}</h2>
                  <h3 className="text-xs xl:text-sm">
                    Qty: <span className="text-red-400">{item.qty} x</span>{" "}
                    <span className="text-red-400">${item.price}</span>
                  </h3>
                  <MdDelete
                    className="absolute link text-black cursor-pointer text-xl xl:text-2xl top-0 right-5"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
        {/* Fixed bottom panel */}
        <div
          className="bottom-0 rounded-lg shadow-md left-0 w-full bg-white border-t border-zinc-400 px-3 xl:!px-5 !py-4 z-10"
          style={{ position: "sticky", bottom: 0 }}
        >
          <div className="bottomInfo !gap-3 !py-5 !px-2 xl:!px-4 flex flex-col items-center justify-between w-full">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-md capitalize font-[500]">Items</h1>
              <span>${itemsTotal.toFixed(2)}</span>
            </div>
            <div className="shipping flex items-center w-full justify-between">
              <h1 className="text-md capitalize font-[500]">Shipping</h1>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex border-t items-center !py-2 w-full justify-between">
              <h1 className="text-md capitalize font-[500]">Total (tax inc.)</h1>
              <span>${totalInc.toFixed(2)}</span>
            </div>
            <div className="flex items-center w-full justify-between">
              <h1 className="text-md capitalize font-[500]">Total (tax exc.)</h1>
              <span>${totalExc.toFixed(2)}</span>
            </div>
            <div className="flex border-t items-center !py-2 w-full justify-between">
              <h1 className="text-md capitalize font-[600]">Total</h1>
              <span>${totalInc.toFixed(2)}</span>
            </div>
          </div>
          <div className="w-full !px-0 xl:!px-5 !pb-8 !mt-2">
            <Link to={"/cart"} onClick={onClose} className="w-full">
              <Button className="btn-org !text-lg hover:!bg-black font-[500] w-full text-white">Go to Cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CartPanel;