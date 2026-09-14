import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import FeaturedPackages from './components/FeaturedPackages';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <FeaturedPackages />
        <WhyChooseUs />
        <Reviews />
        <EnquirySection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
