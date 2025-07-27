import React, { useState, useContext } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { setToken } from '../utils/auth';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      setToken(res.data.token);
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form className="bg-white shadow p-8 rounded max-w-md w-full space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full border p-2" />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} className="w-full border p-2" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
