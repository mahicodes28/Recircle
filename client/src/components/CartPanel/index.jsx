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
    >
      <div className="box w-[30vw] h-full !rounded-lg flex flex-col relative bg-[rgb(227,221,221)]">
        <div className="heading shadow-md flex items-center justify-between  !px-4 rounded-lg !py-4 w-[full]">
          <h1 className="!text-xl">Shopping Cart</h1>
          <IoCloseOutline
            onClick={onClose}
            className="text-3xl cursor-pointer link"
          />
        </div>
        <div className="scroll w-full flex flex-col gap-2 !p-3 max-h-[60vh] overflow-y-auto overflow-x-hidden flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Your cart is empty.</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart rounded-md !bg-white shadow-md w-fit flex items-center w-full !px-3 !py-5">
                <div className="imag !w-[20%] flex items-center justify-center">
                  <img
                    className="w-[4vw] h-[4vw] border object-cover rounded"
                    src={item.image}
                    alt="Product"
                  />
                </div>
                <div className="w-[80%] relative bg-white px-2 py-1 rounded">
                  <Link className="link" to="/">
                    <h1 className="!text-black !font-[500]">{item.name}</h1>
                  </Link>
                  <h2 className="!text-black !font-[500]">{item.category}</h2>
                  <h3 className="!text-[.81vw]">
                    Qty: <span className="!text-red-400">{item.qty} x</span>{" "}
                    <span className="!text-red-400">${item.price}</span>
                  </h3>
                  <MdDelete
                    className="absolute link text-black cursor-pointer !text-2xl top-0 right-5"
                    onClick={() => handleDelete(item.id)}
                  />
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
              <span>${itemsTotal.toFixed(2)}</span>
            </div>
            <div className="shipping flex items-center w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Shipping</h1>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex border-t items-center !py-2 w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Total (tax inc.)</h1>
              <span>${totalInc.toFixed(2)}</span>
            </div>
            <div className="flex items-center w-full justify-between">
              <h1 className="!text-md capitalize !font-[500]">Total (tax exc.)</h1>
              <span>${totalExc.toFixed(2)}</span>
            </div>
            <div className="flex border-t items-center !py-2 w-full justify-between">
              <h1 className="!text-md capitalize !font-[600]">Total</h1>
              <span>${totalInc.toFixed(2)}</span>
            </div>
          </div>
          <div className="w-full !p-5 !pb-10 flex gap-2 mt-2">
            <Link to={"/cart"} onClick={()=>setOpenDrawer(false)} className="w-1/2">
              <Button className="btn-org !font-[500] w-full !text-white">View to Cart</Button>
            </Link>
            <Link to={"/"} className="w-1/2">
              <Button className="btn-org !font-[500] w-full !bg-red-500 !text-white">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CartPanel;