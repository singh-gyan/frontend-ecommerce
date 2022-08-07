import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
function App() {
  return (
    <Layout>
      <ReactQueryDevtools initialIsOpen />
      <Routes>
        <Route path='/:product' element={<Product />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
