import React from 'react';

const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-700 mb-4">SkyCRM Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded">Tasks: 0</div>
        <div className="bg-white shadow p-6 rounded">Tickets: 0</div>
        <div className="bg-white shadow p-6 rounded">Invoices: 0</div>
      </div>
    </div>
  );
};

export default DashboardHome;
