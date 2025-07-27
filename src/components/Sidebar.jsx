import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiFileText, FiUsers, FiList } from 'react-icons/fi';

const Sidebar = () => {
  const menu = [
    { label: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
    { label: 'Tasks',     icon: <FiList />, path: '/dashboard/tasks' },
    { label: 'Support',   icon: <FiFileText />, path: '/dashboard/support' },
    { label: 'Users',     icon: <FiUsers />, path: '/dashboard/users' },
  ];

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white fixed top-0 left-0 flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">SkyCRM</div>
      <nav className="flex-1 p-4 overflow-auto">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700 transition ${
                isActive ? 'bg-blue-600' : ''
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
