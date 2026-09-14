import React from 'react';
import './Footer.css';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaTelegram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container section-container">
        <div className="footer-grid">
          {/* Brand & Social */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-logo">
              <img src="/StakeBookLogo.png" alt="StakeBook Logo" />
            </a>
            <p className="footer-desc">
              Elevating the gaming experience with unparalleled analytics, premium packages, and an elite community of players worldwide.
            </p>
            <div className="social-links">
              <a href="http://instagram.com/Faithbet.vip" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram size={20} /></a>
              <a href="http://x.com/Faithbetvip" target="_blank" rel="noopener noreferrer" className="social-icon"><FaXTwitter size={20} /></a>
              <a href="https://t.me/stakebookindia" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTelegram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#packages">Pricing</a></li>
              <li><a href="#why-us">Why StakeBook</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-links">
              <li><a href="https://stakebet99.win/" target="_blank" rel="noopener noreferrer">Stakebet99</a></li>
              <li><a href="https://faithbet99.com/" target="_blank" rel="noopener noreferrer">Faithbet99</a></li>
              <li><a href="https://faithbet.vip/" target="_blank" rel="noopener noreferrer">Faithbet</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:contact@stakebook.com">contact@stakebook.com</a>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} StakeBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
