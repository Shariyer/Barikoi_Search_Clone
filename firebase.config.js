/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  REACT_APP_apiKey: process.env.REACT_APP_apiKey,
  REACT_APP_authDomain: process.env.REACT_APP_authDomain,
  REACT_APP_projectId: process.env.REACT_APP_projectId,
  REACT_APP_storageBucket: process.env.REACT_APP_storageBucket,
  REACT_APP_messagingSenderId: process.env.REACT_APP_messagingSenderId,
  REACT_APP_appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
