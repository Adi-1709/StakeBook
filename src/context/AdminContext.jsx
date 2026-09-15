import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  ref, 
  onValue, 
  push, 
  set, 
  remove, 
  update 
} from 'firebase/database';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Setup real-time listeners to Firebase Realtime Database
  useEffect(() => {
    const enquiriesRef = ref(db, 'enquiries');
    const unsubscribeEnquiries = onValue(enquiriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object of objects into array and sort by date descending
        const enquiriesArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).sort((a, b) => new Date(b.date) - new Date(a.date));
        setEnquiries(enquiriesArray);
      } else {
        setEnquiries([]);
      }
    }, (error) => {
      console.error("Error fetching enquiries:", error);
    });

    const reviewsRef = ref(db, 'reviews');
    const unsubscribeReviews = onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const reviewsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setReviews(reviewsArray);
      } else {
        // Optional: Add default reviews if none exist in the database yet
        setReviews([
          {
            id: 'default1',
            name: "Alex 'Shadow' Chen",
            role: "Professional Gamer",
            text: "<LOGO> completely transformed how I analyze my matches. The precision of the data and the elite community are unmatched.",
            rating: 5
          },
          {
            id: 'default2',
            name: "Sarah Jenkins",
            role: "Esports Manager",
            text: "StakeBook is by far the most reliable platform we've used. Uptime is perfect and the premium support team is incredibly responsive.",
            rating: 5
          }
        ]);
      }
    }, (error) => {
      console.error("Error fetching reviews:", error);
    });

    // Cleanup listeners on unmount
    return () => {
      unsubscribeEnquiries();
      unsubscribeReviews();
    };
  }, []);

  const addEnquiry = async (enquiry) => {
    try {
      const enquiriesRef = ref(db, 'enquiries');
      const newEnquiryRef = push(enquiriesRef);
      const newEnquiry = { ...enquiry, date: new Date().toISOString() };
      await set(newEnquiryRef, newEnquiry);
    } catch (err) {
      console.error("Error adding enquiry:", err);
    }
  };

  const deleteEnquiry = async (id) => {
    try {
      const enquiryRef = ref(db, `enquiries/${id}`);
      await remove(enquiryRef);
    } catch (err) {
      console.error("Error deleting enquiry:", err);
    }
  };

  const updateReview = async (updatedReview) => {
    try {
      const { id, ...data } = updatedReview;
      
      // If it's a default hardcoded review without a real ID, add it as a new one
      if (id.startsWith('default')) {
        const reviewsRef = ref(db, 'reviews');
        const newReviewRef = push(reviewsRef);
        await set(newReviewRef, data);
      } else {
        const reviewRef = ref(db, `reviews/${id}`);
        await update(reviewRef, data);
      }
    } catch (err) {
      console.error("Error updating review:", err);
    }
  };
  
  const deleteReview = async (id) => {
    try {
      if (!id.startsWith('default')) {
        const reviewRef = ref(db, `reviews/${id}`);
        await remove(reviewRef);
      }
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };
  
  const addReview = async (review) => {
    try {
      const reviewsRef = ref(db, 'reviews');
      const newReviewRef = push(reviewsRef);
      await set(newReviewRef, review);
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <AdminContext.Provider value={{
      enquiries,
      addEnquiry,
      deleteEnquiry,
      reviews,
      updateReview,
      deleteReview,
      addReview
    }}>
      {children}
    </AdminContext.Provider>
  );
};
