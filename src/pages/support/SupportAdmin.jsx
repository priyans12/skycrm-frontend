import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import Layout from '../../components/Layout';
import { FiFileText } from 'react-icons/fi';

const SupportAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/support');
        setRequests(data);
      } catch (err) {
        console.error('Failed to load support requests', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <Layout>
        <p className="p-6">Loading support requests…</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center">
          <FiFileText className="mr-2" /> Support Requests
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">#</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Subject</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requests.length > 0 ? (
                requests.map((req, idx) => (
                  <tr key={req._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-600">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{req.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{req.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{req.subject}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{req.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                    No support requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default SupportAdmin;
