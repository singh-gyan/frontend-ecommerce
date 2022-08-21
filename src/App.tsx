import { useState } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import ComingSoon from './pages/ComingSoon';
function App() {
  return (
    <Layout>
      <ReactQueryDevtools initialIsOpen />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':product' element={<Product />} />
        <Route path=':product/:id' element={<ComingSoon />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='cart' element={<ComingSoon />} />
        <Route path='about' element={<ComingSoon />} />
        <Route path='profile' element={<ComingSoon />} />
        <Route path='contact' element={<ComingSoon />} />
        <Route path='orders' element={<ComingSoon />} />
        <Route path='products' element={<ComingSoon />} />
      </Routes>
    </Layout>
  );
}

export default App;
