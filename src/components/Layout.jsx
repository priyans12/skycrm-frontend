import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {/* Example layout structure */}
      <header className="bg-gray-800 text-white p-4 text-center">SkyCRM</header>
      <main className="p-6">{children}</main>
      <footer className="bg-gray-200 text-center p-2 mt-6">© 2025 SkyCRM</footer>
    </div>
  );
};

export default Layout;
