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

function App() {
  const { isAdmin } = useAppContext();
  const location = useLocation();

  // Hide header/footer on any /admin route
  const hideHeaderFooter = location.pathname.startsWith('/admin');

  return (
    <>
      <div>
        {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/productListing' element={<ProductListing />} />
          <Route path='/admin' element={isAdmin ? <AdminDashboard /> : <AdminLogin />}>
            <Route path='product-list' element={<AllProducts />} />
            <Route path='seller-list' element={<AllSellers />} />
            <Route path='new-product' element={<ProductsRequests />} />
          </Route>
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </div>
    </>
  )
}
export default App