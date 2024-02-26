import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import Product from './components/Pages/Product'
import Singleproduct from './components/Pages/Singleproduct'
import CartPage from './components/Pages/CartPage'

function App() {
  return (
    < Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Singleproduct />} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/contact' element={<Footer />} />


        </Routes>
      </BrowserRouter>

    </Provider>
  );

}


export default App