import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import Layout from '../../components/Layout';

const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch ticket on mount
  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const { data } = await api.get(`/support/${id}`); 
        setTicket(data);
      } catch (err) {
        console.error(err);
        navigate('/dashboard/support');
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [id, navigate]);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      await api.put(`/support/${id}`, { status: newStatus });
      setTicket((t) => ({ ...t, status: newStatus }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    try {
      const { data } = await api.post(`/support/${id}/comments`, { comment });
      setTicket(data);
      setComment('');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <Layout>
        <p className="p-6">Loading ticket…</p>
      </Layout>
    );
  }

  if (!ticket) {
    return (
      <Layout>
        <p className="p-6 text-red-600">Ticket not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Ticket #{ticket._id}</h2>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="mb-4">
            <h3 className="font-semibold">Subject:</h3>
            <p>{ticket.subject}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Description:</h3>
            <p>{ticket.message || ticket.description}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Status:</h3>
            <select
              value={ticket.status}
              onChange={handleStatusChange}
              className="border rounded px-2 py-1"
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Comments</h3>
          {ticket.comments && ticket.comments.length ? (
            <ul className="space-y-4">
              {ticket.comments.map((c) => (
                <li key={c._id} className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-800">{c.body || c.text}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    By {c.author?.name || c.user} on {new Date(c.createdAt || c.date).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No comments yet.</p>
          )}
        </div>

        <form onSubmit={handleCommentSubmit} className="bg-white p-4 rounded-lg shadow">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment…"
            rows="3"
            className="w-full border rounded p-2 mb-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default TicketDetail;
