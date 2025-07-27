import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">SkyCRM</h1>
      <div className="space-x-4">
        <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#cta" className="text-gray-700 hover:text-blue-600">Pricing</a>
        <a href="#cta" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Start Free Trial</a>
      </div>
    </nav>
  );
};

export default Navbar;
