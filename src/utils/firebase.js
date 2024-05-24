// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfyo6UAw5hY0hk0jBkNUJOnICweboMeMQ",
  authDomain: "netflixgpt-a7aea.firebaseapp.com",
  projectId: "netflixgpt-a7aea",
  storageBucket: "netflixgpt-a7aea.appspot.com",
  messagingSenderId: "248227923726",
  appId: "1:248227923726:web:809251def78e1d26c6b95f",
  measurementId: "G-4M887L7WNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();