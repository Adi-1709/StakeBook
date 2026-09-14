import React from 'react';
import './Reviews.css';
import { Star, UserCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Alex 'Shadow' Chen",
    role: "Professional Gamer",
    text: "StakeBook completely transformed how I analyze my matches. The precision of the data and the elite community are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Esports Manager",
    text: "Faithbet99 is by far the most reliable platform we've used. Uptime is perfect and the premium support team is incredibly responsive.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus R.",
    role: "Content Creator",
    text: "As a streamer, the tools provided in the Creator Pack have been game-changing. My audience engagement has skyrocketed since I joined.",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-container">
      <h2 className="section-title">Client <span className="gradient-text">Reviews</span></h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card glass-panel">
            <div className="review-header">
              <div className="reviewer-icon">
                <UserCircle size={48} />
              </div>
              <div className="reviewer-info">
                <h3 className="reviewer-name">{review.name}</h3>
                <p className="reviewer-role">{review.role}</p>
              </div>
            </div>
            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} className="star-icon" fill="currentColor" />
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
