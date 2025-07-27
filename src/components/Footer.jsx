import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-lg mb-4">SkyCRM</h5>
          <p className="text-sm text-gray-400">All-in-one CRM for IT service companies.</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Company</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Support</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Legal</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SkyCRM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
