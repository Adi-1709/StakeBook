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
import AdminPanel from './components/AdminPanel';
import { AdminProvider } from './context/AdminContext';
import './App.css';

function App() {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#admin') {
    return (
      <AdminProvider>
        <AdminPanel />
      </AdminProvider>
    );
  }

  return (
    <AdminProvider>
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
    </AdminProvider>
  );
}

export default App;
