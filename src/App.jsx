// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/common/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const showSidebar = !['/login', '/signup'].includes(window.location.pathname);

  return (
    <div>
      <div className="flex">
        {showSidebar && <Sidebar />} 
          <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <ToastContainer />
    <App />
  </Router>
);

export default AppWrapper;
