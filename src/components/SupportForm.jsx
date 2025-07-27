import React, { useState } from 'react';
import './SupportForm.css';
import api from '../utils/api';

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setLoading(true);

    try {
      // ← POST to /api/support/submit
      await api.post('/support/submit', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Support submission failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="support-form-container">
      <h2 className="support-form-title">Support Request</h2>
      {submitted && <p className="success-message">✅ Your request has been submitted.</p>}
      <form className="support-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Describe your issue..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Sending…' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default SupportForm;
