import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-700">Welcome to SkyCRM</h1>
      <p className="text-gray-600 mt-2">You're logged in as: {user?.email || 'Unknown'}</p>
      <button onClick={logout} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Logout</button>
    </div>
  );
};

export default Dashboard;
