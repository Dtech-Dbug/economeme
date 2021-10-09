// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//! firebase auth
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import firebase from "./firebase";

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkuchgB6A-jWTF0PjpopVmoiDmlpOk2Bo",
  authDomain: "economeme-519c0.firebaseapp.com",
  projectId: "economeme-519c0",
  storageBucket: "economeme-519c0.appspot.com",
  messagingSenderId: "352789904148",
  appId: "1:352789904148:web:be10b2304ae01ec91f2001",
  measurementId: "G-EXQBTH5GJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Provider = new GoogleAuthProvider();
