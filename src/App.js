import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import DashboardHome from './pages/dashboard/DashboardHome';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected layout route */}
        <Route
          path="/dashboard/*"
          element={
            <Layout>
              <DashboardHome />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
