import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <img src="/StakeBookLogo.png" alt="StakeBook" className="hero-logo" />
        </h1>
        <p className="hero-subtitle">
          Your ultimate destination for premium gaming information, high-end packages, and a next-level community experience.
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn-primary">Explore Products</a>
          <a href="#contact" className="btn-outline">Join the Elite</a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>
    </section>
  );
};

export default Hero;
