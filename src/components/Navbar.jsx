import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="/StakeBookLogo.png" alt="StakeBook Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#contact" className="btn-primary">Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
