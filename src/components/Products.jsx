import React from 'react';
import './Products.css';

const products = [
  {
    id: 1,
    name: "Stakebet99",
    description: "Experience the ultimate betting platform with Stakebet99. Unmatched odds and premium gameplay.",
    link: "https://stakebet99.win/",
    image: "/Stakebet99.jpeg"
  },
  {
    id: 2,
    name: "Faithbet99",
    description: "Join Faithbet99 for a secure, fast, and highly rewarding gaming experience.",
    link: "https://faithbet99.com/",
    image: "/Faithbet99.jpeg"
  },
  {
    id: 3,
    name: "Faithbet",
    description: "The VIP destination for elite players. Join Faithbet and elevate your game.",
    link: "https://faithbet.vip/",
    image: "/Faithbet.jpeg"
  }
];

const Products = () => {
  return (
    <section id="products" className="section-container">
      <h2 className="section-title">Our <span className="gradient-text">Products</span></h2>
      <div className="products-grid">
        {products.map((product) => (
          <a href={product.link} target="_blank" rel="noopener noreferrer" key={product.id} className="product-card glass-panel">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <div className="product-hover-effect"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Products;
