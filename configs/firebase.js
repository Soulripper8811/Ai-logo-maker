// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-netflix-clone-4a711.firebaseapp.com",
  projectId: "react-netflix-clone-4a711",
  storageBucket: "react-netflix-clone-4a711.firebasestorage.app",
  messagingSenderId: "575789813858",
  appId: "1:575789813858:web:ab84b2e1a9c6049af8c13b",
  measurementId: "G-DPNDS973EK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
