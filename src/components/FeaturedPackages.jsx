import React from 'react';
import './FeaturedPackages.css';

const packages = [
  { id: 1, title: "Starter Tier", price: "$19/mo", features: ["Basic Analytics", "Community Access", "Standard Support"] },
  { id: 2, title: "Pro Tier", price: "$49/mo", features: ["Advanced Analytics", "Priority Queue", "Premium Support", "Custom Badges"] },
  { id: 3, title: "Elite Tier", price: "$99/mo", features: ["Full API Access", "Dedicated Account Manager", "Early Beta Access"] },
  { id: 4, title: "Team Pack", price: "$149/mo", features: ["Up to 5 Users", "Team Analytics", "Tournament Entry"] },
  { id: 5, title: "Creator Pack", price: "$79/mo", features: ["Streaming Tools Overlay", "Audience Insights", "Partner Program"] },
  { id: 6, title: "Enterprise", price: "Custom", features: ["White-label Solutions", "Custom Integration", "24/7 SLA"] }
];

const FeaturedPackages = () => {
  return (
    <section id="packages" className="section-container">
      <h2 className="section-title">Featured <span className="gradient-text">Packages</span></h2>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card glass-panel">
            <div className="package-header">
              <h3 className="package-title">{pkg.title}</h3>
              <div className="package-price">{pkg.price}</div>
            </div>
            <ul className="package-features">
              {pkg.features.map((feature, idx) => (
                <li key={idx}><span className="feature-check">✓</span> {feature}</li>
              ))}
            </ul>
            <button className="btn-primary w-full">Select Package</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPackages;
