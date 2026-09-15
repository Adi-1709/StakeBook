import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import './AdminPanel.css';
import { Trash2, Edit2, Check, X, Plus } from 'lucide-react';

const AdminPanel = () => {
  const { enquiries, deleteEnquiry, reviews, updateReview, deleteReview, addReview } = useAdmin();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [activeTab, setActiveTab] = useState('enquiries');

  // Review editing state
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', role: '', text: '', rating: 5 });
  const [isAddingReview, setIsAddingReview] = useState(false);

  // =========================================================================
  // CHANGE ADMIN CREDENTIALS HERE
  // =========================================================================
  const ADMIN_USERNAME = 'akshat_hustles';
  const ADMIN_PASSWORD = 'COOSB@1540';
  // =========================================================================

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const startEditingReview = (review) => {
    setEditingReviewId(review.id);
    setEditForm(review);
    setIsAddingReview(false);
  };

  const startAddingReview = () => {
    setEditingReviewId(null);
    setEditForm({ name: '', role: '', text: '', rating: 5 });
    setIsAddingReview(true);
  };

  const cancelEdit = () => {
    setEditingReviewId(null);
    setIsAddingReview(false);
  };

  const saveReview = () => {
    if (isAddingReview) {
      addReview(editForm);
      setIsAddingReview(false);
    } else {
      updateReview(editForm);
      setEditingReviewId(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="glass-panel login-panel">
          <h2 className="gradient-text text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" className="btn-primary w-full">Login</button>
            <div className="text-center mt-4">
              <a href="#" onClick={() => window.location.hash = ''} className="back-link">Return to Main Site</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header glass-panel">
        <div className="admin-logo-area">
          <img src="/StakeBookLogo.png" alt="StakeBook" className="hero-logo" style={{ height: '40px' }} />
          <h2>Admin Dashboard</h2>
        </div>
        <div className="admin-nav">
          <button
            className={`admin-tab ${activeTab === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >
            Enquiries
          </button>
          <button
            className={`admin-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            className="btn-outline ml-4"
            onClick={() => {
              setIsAuthenticated(false);
              setUsername('');
              setPassword('');
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="admin-content section-container">
        {activeTab === 'enquiries' && (
          <div className="enquiries-section">
            <h3 className="dashboard-title">Recent Enquiries</h3>
            <div className="table-responsive glass-panel">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Interest</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.length === 0 ? (
                    <tr><td colSpan="6" className="text-center py-4">No enquiries found.</td></tr>
                  ) : (
                    enquiries.map((enquiry) => (
                      <tr key={enquiry.id}>
                        <td>{new Date(enquiry.date).toLocaleDateString()}</td>
                        <td>{enquiry.name}</td>
                        <td>{enquiry.email}</td>
                        <td><span className={`badge ${enquiry.interest}`}>{enquiry.interest}</span></td>
                        <td className="message-cell">{enquiry.message}</td>
                        <td>
                          <button
                            className="btn-icon delete"
                            onClick={() => deleteEnquiry(enquiry.id)}
                            title="Delete Enquiry"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews-section">
            <div className="reviews-header flex-between">
              <h3 className="dashboard-title">Manage Reviews</h3>
              {!isAddingReview && !editingReviewId && (
                <button className="btn-primary flex-center gap-2" onClick={startAddingReview}>
                  <Plus size={18} /> Add Review
                </button>
              )}
            </div>

            <div className="reviews-grid-admin">
              {(isAddingReview || editingReviewId) && (
                <div className="review-edit-card glass-panel highlight-border">
                  <h4>{isAddingReview ? 'Add New Review' : 'Edit Review'}</h4>
                  <div className="edit-form-grid">
                    <input
                      type="text"
                      placeholder="Name"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Role (e.g. Pro Gamer)"
                      value={editForm.role}
                      onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    />
                    <input
                      type="number"
                      min="1" max="5"
                      placeholder="Rating (1-5)"
                      value={editForm.rating}
                      onChange={(e) => setEditForm({ ...editForm, rating: parseInt(e.target.value) || 5 })}
                    />
                    <textarea
                      placeholder="Review Text (Use <LOGO> to insert logo inline)"
                      className="full-width"
                      rows="4"
                      value={editForm.text}
                      onChange={(e) => setEditForm({ ...editForm, text: e.target.value })}
                    ></textarea>

                    <div className="edit-actions full-width">
                      <button className="btn-primary" onClick={saveReview}>
                        <Check size={18} /> Save
                      </button>
                      <button className="btn-outline" onClick={cancelEdit}>
                        <X size={18} /> Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {reviews.map((review) => (
                <div key={review.id} className={`review-card-admin glass-panel ${editingReviewId === review.id ? 'hidden' : ''}`}>
                  <div className="review-admin-header flex-between">
                    <div>
                      <h4>{review.name}</h4>
                      <p className="text-muted text-sm">{review.role}</p>
                    </div>
                    <div className="review-actions">
                      <button className="btn-icon edit" onClick={() => startEditingReview(review)}>
                        <Edit2 size={16} />
                      </button>
                      <button className="btn-icon delete" onClick={() => deleteReview(review.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="rating-badge mt-2">{'★'.repeat(review.rating)}</div>
                  <p className="review-admin-text mt-3 text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
