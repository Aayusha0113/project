import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Footer from './component/Footer'
import AdminPanell from './pages/AdminPanell';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path="/admin" element={<AdminPanell />} />
        
        
      </Routes>
      
    </div>
  )
}

export default App


