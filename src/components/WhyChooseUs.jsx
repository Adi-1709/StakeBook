import React from 'react';
import './WhyChooseUs.css';
import { Target, TrendingUp, Users, Lock, Zap, Award } from 'lucide-react';

const reasons = [
  { id: 1, title: "Precision Tracking", desc: "Pinpoint accuracy in all our data metrics.", icon: <Target size={32} /> },
  { id: 2, title: "Growth Analytics", desc: "Understand your trajectory and scale fast.", icon: <TrendingUp size={32} /> },
  { id: 3, title: "Elite Community", desc: "Join thousands of top-tier gamers globally.", icon: <Users size={32} /> },
  { id: 4, title: "Ironclad Security", desc: "Your data is encrypted and secure at all times.", icon: <Lock size={32} /> },
  { id: 5, title: "Lightning Fast", desc: "Zero latency on our premium servers.", icon: <Zap size={32} /> },
  { id: 6, title: "Award Winning", desc: "Recognized as an industry leader in 2026.", icon: <Award size={32} /> }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-container">
      <h2 className="section-title">Why Choose <span className="gradient-text">StakeBook</span></h2>
      <div className="reasons-grid">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card glass-panel">
            <div className="reason-icon-wrapper">
              <div className="reason-icon">{reason.icon}</div>
            </div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-desc">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
