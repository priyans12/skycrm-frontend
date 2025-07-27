import React, { useEffect, useState } from 'react';
import './SupportList.css';

const SupportList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/support`);
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Failed to fetch support tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="support-list-container">
      <h2>Support Tickets</h2>
      <div className="support-table">
        <div className="support-table-header">
          <div>Name</div>
          <div>Email</div>
          <div>Subject</div>
          <div>Message</div>
        </div>
        {tickets.map((ticket) => (
          <div key={ticket._id} className="support-table-row">
            <div>{ticket.name}</div>
            <div>{ticket.email}</div>
            <div>{ticket.subject}</div>
            <div>{ticket.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportList;
