import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { useAppContext } from './context/AppProvider.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
function App() {

  const {isAdmin}=useAppContext();

  return (
   <Routes>
      <Route path='/admin' element={isAdmin ? <AdminDashboard/> : <AdminLogin/>}>
        {/* <Route index element={isSeller ? <AddProducts/> : null} />
        <Route path='product-list' element={<ProductList/>} />
        <Route path='orders' element={<Orders/>} /> */}
      </Route>
   </Routes>
  )
}

export default App
