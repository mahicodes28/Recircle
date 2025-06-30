import { useState } from 'react'
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

function App() {
  const { isAdmin , isseller} = useAppContext();
  const location = useLocation();


  // Hide header/footer on any /admin route
  const hideHeaderFooter = location.pathname.startsWith('/admin');

  return (
    <MyContext.Provider value={values}>
      <>
        {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productListing" element={<ProductListing />} />
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
          </Route>
          <Route path='/seller' element={isseller ? <SellerDashboard /> : <SellerLogin />}>
            <Route path='product-list' element={<SellerProducts />} />
            <Route path='orders' element={<SeeOrders/>} />
            <Route path='add-product' element={<AddProduct />} />
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
        <WishListPanel open={wishLIstOpen} onClose={handleWishlistClose}/>
        {/* wish list drawer end */}
      
      </>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };