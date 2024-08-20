import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Home from './Home';
import Footer from './footer';
import Navibar from './Navibar'; 

const Layout = () => {
  const location = useLocation();

 
  const isHomePage = location.pathname === '/';

  return (
    <div className="layout">
      <Home />
      {isHomePage && <Navibar />}
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
