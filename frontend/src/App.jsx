import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Navbar from './components/Navbar'
const App = () => {
  return (
   <>
<Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/Collection' element={<Collection></Collection>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/orders' element={<Orders></Orders>}></Route>
  
    <Route path='/placeOrder' element={<Orders></Orders>}></Route>
    <Route path='/products/:id' element={<Products></Products>}></Route>
   </Routes>
   </>
  )
}

export default App
