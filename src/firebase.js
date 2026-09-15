// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Fim3wMM7WiGh8qpb-OIpIE4w0pbRlls",
  authDomain: "stakebook-a2c71.firebaseapp.com",
  projectId: "stakebook-a2c71",
  storageBucket: "stakebook-a2c71.firebasestorage.app",
  messagingSenderId: "404020090735",
  appId: "1:404020090735:web:af1a036bbd2ad71e5cfa9a",
  measurementId: "G-E5810YCF4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const analytics = getAnalytics(app);
