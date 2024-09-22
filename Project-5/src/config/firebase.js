// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getFirestore from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzvxzqYje7f3lym9eU1vZqigg0C1W2ss",
  authDomain: "vite-contacts-5e542.firebaseapp.com",
  projectId: "vite-contacts-5e542",
  storageBucket: "vite-contacts-5e542.appspot.com",
  messagingSenderId: "929061069231",
  appId: "1:929061069231:web:7df64484744394f9564f5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);