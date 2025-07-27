import React, { useState } from 'react';
import './Support.css';
import axios from 'axios';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/support`, formData);
      setStatus('Support ticket submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="support-container">
      <h2 className="support-title">Need Help? We're Here for You</h2>
      <form className="support-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your issue..."
          required
        ></textarea>
        <button type="submit">Submit Ticket</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Support;
