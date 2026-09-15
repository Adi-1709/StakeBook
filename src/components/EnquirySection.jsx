import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import './EnquirySection.css';

const EnquirySection = () => {
  const { addEnquiry } = useAdmin();
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEnquiry(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', interest: '', message: '' });
    
    // Reset submission message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <section id="contact" className="section-container">
      <div className="enquiry-wrapper glass-panel">
        <div className="enquiry-content">
          <h2 className="enquiry-title">Ready to be in <br/><img src="/StakeBookLogo.png" alt="StakeBook" className="inline-logo" />?</h2>
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
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <select 
                required 
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option value="" disabled>Select Interest</option>
                <option value="products">Products</option>
                <option value="packages">Packages</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Message" 
                rows="4" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              {submitted ? "Enquiry Sent!" : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
