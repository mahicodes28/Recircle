import { createContext, useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { useAppContext } from './context/AppProvider.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AllProducts from './components/AllProducts.jsx'
import AllSellers from './components/AllSellers.jsx'
import ProductsRequests from './components/ProductsRequests.jsx'
import Home from "./pages/Home.jsx"
import Header from "./components/header"
import ProductListing from './pages/ProductListing.jsx'
import Footer from './components/Footer/index.jsx'
import ProductDetails from './components/ProductDetail/index.jsx'
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import ProductInfo from './components/ProductDetail/ProductInfo';
import { IoMdClose } from "react-icons/io";

// Create context at top-level
const MyContext = createContext();

function App() {
  const { isAdmin } = useAppContext();
  const location = useLocation();

  // Hide header/footer on any /admin route
  const hideHeaderFooter = location.pathname.startsWith('/admin');

  // Dialog state and transition
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = ()=>{
    setOpen(true)
  }

  const Transition = (props, ref) => <Slide direction="up" ref={ref} {...props} />;

  // Provide setOpen in context so children can open the dialog
  const values = { setOpen };

  return (
    <MyContext.Provider value={values}>
      <>
        {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <AdminLogin />}>
            <Route path="product-list" element={<AllProducts />} />
            <Route path="seller-list" element={<AllSellers />} />
            <Route path="new-product" element={<ProductsRequests />} />
          </Route>
        </Routes>
        {!hideHeaderFooter && <Footer />}

        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="lg"
          fullWidth
        >
          <DialogContent className='!rounded-xl !overflow-y-hidden'>
            <div className='relative' style={{ width: "100%", height: "100%", overflowY: "hidden" }}>
              <ProductInfo padding='!p-0' />
              <div className="close">
                <h1 className='absolute top-0 right-0 pointer' onClick={handleClose}>
                  <IoMdClose className='!text-4xl' />
                </h1>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };