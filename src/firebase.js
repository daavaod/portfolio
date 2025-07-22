// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdBrfS8LAhBbqJIMB0l7OXXos_tsrBPuU",
  authDomain: "danijel-avramov-portfolio.firebaseapp.com",
  projectId: "danijel-avramov-portfolio",
  storageBucket: "danijel-avramov-portfolio.firebasestorage.app",
  messagingSenderId: "659179069035",
  appId: "1:659179069035:web:c326f303dd2262c04f1b2e",
  measurementId: "G-1KRBP4438F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);