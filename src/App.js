import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout        from './components/Layout';
import Landing       from './pages/Landing';
import SupportForm   from './components/SupportForm';
import Login         from './pages/Login';
import Register      from './pages/Register';
import DashboardHome from './pages/dashboard/DashboardHome';
import SupportAdmin  from './pages/support/SupportAdmin';
import TicketDetail  from './pages/support/TicketDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔥 Test‐only route (bypasses dashboard nesting) */}
        <Route path="/test-support" element={<SupportAdmin />} />

        {/* Public pages */}
        <Route path="/"         element={<Landing />} />
        <Route path="/support"  element={<SupportForm />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard (all nested under /dashboard) */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index           element={<DashboardHome />} />
          <Route path="support"  element={<SupportAdmin />} />
          <Route path="support/:id" element={<TicketDetail />} />
          {/* …add more dashboard routes here */}
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<div className="p-6">Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
