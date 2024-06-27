// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASECONFIG_API_KEY,
  authDomain: "enzo-2b216.firebaseapp.com",
  projectId: "enzo-2b216",
  storageBucket: "enzo-2b216.appspot.com",
  messagingSenderId: "89633736184",
  appId: "1:89633736184:web:c8ffbfd57d7e2638c1820d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);