// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './Routes';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/common/Footer';
import ProductStore from './store/ProductStore';
import Loader from './components/common/Loader';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(ProductStore.getLoading());

  const checkLoading = () => {
    setLoading(ProductStore.getLoading());
  };

  useEffect(() => {
    const interval = setInterval(checkLoading, 100); // Check loading state every 100ms
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const showSidebar = !['/login', '/signup'].includes(location.pathname);

  return (
    <div>
      <div className="flex">
      {loading && <Loader />}
        {showSidebar && <Sidebar />} {/* Conditionally render the sidebar */}
          <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
