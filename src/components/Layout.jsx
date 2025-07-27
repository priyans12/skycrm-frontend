import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header  from './Header';

const Layout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-64">
      <Header />
      <main className="mt-16 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
