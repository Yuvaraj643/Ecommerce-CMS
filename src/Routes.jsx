// src/Routes.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';
import ProductForm from './components/Products/AddProduct';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add-product" element={<ProductForm />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
