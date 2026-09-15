import React from 'react';
import { useAdmin } from '../context/AdminContext';
import './Reviews.css';
import { Star, UserCircle } from 'lucide-react';

const renderText = (text) => {
  if (!text) return null;
  const parts = text.split('<LOGO>');
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i !== parts.length - 1 && (
            <img src="/StakeBookLogo.png" alt="StakeBook" className="inline-logo" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

const Reviews = () => {
  const { reviews } = useAdmin();
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
            <p className="review-text">"{renderText(review.text)}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
