import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import '../scss/components/Layout.scss';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
