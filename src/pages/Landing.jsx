import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Landing = () => {
  console.log('✅ Landing component loaded');
  
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTASection />
      <Footer />
    </>
  );
};

export default Landing;
