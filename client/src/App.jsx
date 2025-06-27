import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { useAppContext } from './context/AppProvider.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AllProducts from './components/AllProducts.jsx'
import AllSellers from './components/AllSellers.jsx'
import ProductsRequests from './components/ProductsRequests.jsx'
function App() {

  const {isAdmin}=useAppContext();

  return (
   <Routes>
      <Route path='/admin' element={isAdmin ? <AdminDashboard/> : <AdminLogin/>}>
        <Route path='product-list' element={<AllProducts/>} />
        <Route path='seller-list' element={<AllSellers/>} />
        <Route path='new-product' element={<ProductsRequests/>}/>
      </Route>
   </Routes>
  )
}

export default App
