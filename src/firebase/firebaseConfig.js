import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD0pMWajV2iMGrGGiORjheVfM1mKRFie8",
  authDomain: "react-app-curso-40642.firebaseapp.com",
  projectId: "react-app-curso-40642",
  storageBucket: "react-app-curso-40642.appspot.com",
  messagingSenderId: "336637056190",
  appId: "1:336637056190:web:262290cf3a745e8044baef",
  measurementId: "G-LMN28WVBZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
