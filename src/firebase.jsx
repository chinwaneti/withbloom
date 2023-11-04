// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2f7KDnBCFmYCeNxGWVkZCmx4BD1MgW04",
  authDomain: "withbloom-a7ba5.firebaseapp.com",
  projectId: "withbloom-a7ba5",
  storageBucket: "withbloom-a7ba5.appspot.com",
  messagingSenderId: "860243330198",
  appId: "1:860243330198:web:7f6a79fa7e79c6af7c2eb7",
  measurementId: "G-08SC6HHQKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {analytics, auth}