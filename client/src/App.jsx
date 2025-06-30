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
import SellerDashboard from './pages/SellerDashboard.jsx'
import SellerLogin from './pages/SellerLogin.jsx'
import SellerProducts from './components/Seller/SellerProducts.jsx'
import SeeOrders from './components/Seller/SeeOrders.jsx'
import AddProduct from './components/Seller/AddProduct.jsx'

function App() {
  const { isAdmin , isseller} = useAppContext();
  const location = useLocation();


  // Hide header/footer on any /admin route
const hideHeaderFooter = location.pathname.startsWith('/admin') || location.pathname.startsWith('/seller');
  return (
    <>
      <div>
        {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/productListing' element={<ProductListing />} />
          <Route path='productDetails' element={<ProductDetails/>}/>
          <Route path='/admin' element={isAdmin ? <AdminDashboard /> : <AdminLogin />}>
            <Route path='product-list' element={<AllProducts />} />
            <Route path='seller-list' element={<AllSellers />} />
            <Route path='new-product' element={<ProductsRequests />} />
          </Route>
          <Route path='/seller' element={isseller ? <SellerDashboard /> : <SellerLogin />}>
            <Route path='product-list' element={<SellerProducts />} />
            <Route path='orders' element={<SeeOrders/>} />
            <Route path='add-product' element={<AddProduct />} />
          </Route>
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </div>
    </>
  )
}
export default App