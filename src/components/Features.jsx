import React from 'react';

const features = [
  {
    title: 'Customer Management',
    desc: 'Centralise all customer data, interactions, and communication history.',
  },
  {
    title: 'Support Ticketing',
    desc: 'Track, assign, and resolve customer issues with automated workflows.',
  },
  {
    title: 'Analytics & Reports',
    desc: 'Get insights into performance, revenue trends, and customer metrics.',
  },
  {
    title: 'Enterprise Security',
    desc: 'Bank-grade security with role-based access control and encryption.',
  },
  {
    title: 'Automation',
    desc: 'Automate tasks, notifications, and follow-ups to boost productivity.',
  },
  {
    title: 'Multi-Tenant',
    desc: 'Perfect for agencies managing multiple clients with isolated billing.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50 text-center">
      <h3 className="text-4xl font-bold text-gray-800 mb-12">Everything You Need to Grow Your IT Business</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded shadow p-6 hover:shadow-lg transition text-left">
            <h4 className="text-xl font-semibold text-blue-600">{feature.title}</h4>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
