import React, { useState } from 'react';
import api from '../utils/api';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    tenantName: '',
    subdomain: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', form);
      alert('Registered successfully. Now login.');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form className="bg-white shadow p-8 rounded max-w-md w-full space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center text-blue-600">Register Your Company</h2>
        <input type="text" name="tenantName" placeholder="Company Name" required onChange={handleChange} className="w-full border p-2" />
        <input type="text" name="subdomain" placeholder="Subdomain (e.g. yourcompany)" required onChange={handleChange} className="w-full border p-2" />
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full border p-2" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full border p-2" />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} className="w-full border p-2" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
};

export default Register;
