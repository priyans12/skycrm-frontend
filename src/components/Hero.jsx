import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 text-center">
      <h2 className="text-5xl font-extrabold text-blue-700 mb-6">
        The Complete CRM Solution for IT Service Companies
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Streamline customer relationships, support tickets, project management, and billing in one powerful platform built for IT service providers.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
          Start Free Trial
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition">
          Schedule Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
