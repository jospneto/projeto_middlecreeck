// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuqIm_CabQMffHaIn03orfg-AAbuWLKz8",
  authDomain: "projeto-mobile-app.firebaseapp.com",
  projectId: "projeto-mobile-app",
  storageBucket: "projeto-mobile-app.appspot.com",
  messagingSenderId: "379410333569",
  appId: "1:379410333569:web:7182862661eb46259d3280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);