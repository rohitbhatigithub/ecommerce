import React,{useState} from 'react'
import Home from "./Home";
import "./App.css";
import Cart from "./Cart";
import PaymentChackout from './PaymentChackout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const App = () => {
  const[cartItem , setCartItem] = useState([])
  const[checkOutItem , setCheckOutItem] = useState()
  return (
    <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setCartItem={setCartItem} cartItem={cartItem}/>}/>
        <Route path="/cart" element={<Cart cartItem={cartItem} setCartItem={setCartItem} setCheckOutItem={setCheckOutItem}/>}/>
        <Route path="/paymentchackout" element={<PaymentChackout cartItem={cartItem}  checkOutItem={checkOutItem}/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}


export default App
