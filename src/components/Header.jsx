import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6 fixed left-64 top-0 z-10">
      <h1 className="text-xl font-bold text-gray-800">Welcome, {user?.name || 'Admin'}</h1>
      <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Logout
      </button>
    </header>
  );
};

export default Header;
