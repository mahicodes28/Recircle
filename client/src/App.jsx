import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import { useAppContext } from "./context/AppProvider.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AllProducts from "./components/AllProducts.jsx";
import AllSellers from "./components/AllSellers.jsx";
import ProductsRequests from "./components/ProductsRequests.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/header";
import ProductListing from "./pages/ProductListing.jsx";
import Footer from "./components/Footer/index.jsx";
import ProductDetails from "./components/ProductDetail/index.jsx";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import ProductInfo from "./components/ProductDetail/ProductInfo";
import { IoMdClose } from "react-icons/io";
import CartPanel from "./components/CartPanel";
import Cart from "./pages/Cart.jsx";
import WishListPanel from "./components/WishListPanel"
import MyOrders from "./pages/MyOrders.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import SellerLogin from './pages/SellerLogin.jsx';
import SellerDashboard from './pages/SellerDashboard.jsx';
import SellerProducts from './components/Seller/SellerProducts.jsx'
import SeeOrders from './components/Seller/SeeOrders.jsx'
import AddProduct from './components/Seller/AddProduct.jsx'
import BannnerDetails from "./components/BannnerDetails.jsx";
import { ToastContainer , toast } from "react-toastify";
import ProductListingByCate from "./pages/ProductListingByCate.jsx";
// Create context at top-level
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
const MyContext = createContext();

function App() {
  const { isAdmin , isseller } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  })
  // Hide header/footer on any /admin or /seller route
  const hideHeaderFooter = location.pathname.startsWith("/admin") || location.pathname.startsWith("/seller");

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Wishlist state
  const [wishLIstOpen, setWishListOpen] = useState(false);
  const handleWishlistOpen = () => {
    setWishListOpen(true)
  }
  const handleWishlistClose = () => {
    setWishListOpen(false)
  }
  // Provide setOpen for dialog in context
  const values = { setOpen: setDialogOpen, setDrawerOpen, setWishListOpen };

  return (
    
    <MyContext.Provider value={values}>
      <ToastContainer/>
      <div className="min-h-screen flex flex-col bg-black !text-white">
        {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/productListing/:category" element={<ProductListingByCate />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/Order-tracking" element={<MyOrders/>}/>
          <Route
            path="/admin"
            element={isAdmin ? <AdminDashboard /> : <AdminLogin />}
          >
            <Route path="product-list" element={<AllProducts />} />
            <Route path="seller-list" element={<AllSellers />} />
            <Route path="new-product" element={<ProductsRequests />} />
            <Route path="banners" element={<BannnerDetails/>}/>
          </Route>
          <Route
            path="/seller"
            element={isseller ? < SellerDashboard/> : <SellerLogin />}
          >
            <Route path="product-list" element={<SellerProducts />} />
            <Route path="orders" element={<SeeOrders />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
        </Routes>
        {!hideHeaderFooter && <Footer />}

        {/* Product Detail Dialog */}
        <Dialog
          open={dialogOpen}
          keepMounted
          onClose={handleDialogClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="lg"
          fullWidth
        >
          <DialogContent className="!rounded-xl !overflow-y-hidden">
            <div
              className="relative"
              style={{ width: "100%", height: "100%", overflowY: "hidden" }}
            >
              <ProductInfo padding="!p-0" />
              <div className="close">
                <h1
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={handleDialogClose}
                >
                  <IoMdClose className="!text-4xl" />
                </h1>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        {/* Product Detail Dialog end */}

        {/* Cart Drawer */}
        <CartPanel open={drawerOpen} onClose={handleDrawerClose} />
        {/* Cart Drawer end */}

        {/* wish list drawer */}
        <WishListPanel open={wishLIstOpen} onClose={handleWishlistClose} />
        {/* wish list drawer end */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };