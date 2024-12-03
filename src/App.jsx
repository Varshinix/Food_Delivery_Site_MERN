import './App.css'
import { Login, Register, Home, Product, Cart, Checkout, Payment, Address, Success } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/address" element={<Address />} />
          <Route path="/success" element={<Success />} />

        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  )
}

export default App
