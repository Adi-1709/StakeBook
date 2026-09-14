import React from 'react';
import './EnquirySection.css';

const EnquirySection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="enquiry-wrapper glass-panel">
        <div className="enquiry-content">
          <h2 className="enquiry-title">Ready to be in <br/><span className="gradient-text">StakeBook</span>?</h2>
          <p className="enquiry-desc">
            Join the revolution today. Leave your details and our team will get back to you with an exclusive invitation to level up your gaming journey.
          </p>
          <div className="enquiry-stats">
            <div className="stat-box">
              <h4>10K+</h4>
              <p>Active Users</p>
            </div>
            <div className="stat-box">
              <h4>99.9%</h4>
              <p>Uptime</p>
            </div>
          </div>
        </div>
        <div className="enquiry-form-container">
          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select required defaultValue="">
                <option value="" disabled>Select Interest</option>
                <option value="products">Products</option>
                <option value="packages">Packages</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
