// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-SCPNJhfdkWViAuBgXVCZH08Biowoyn4",
  authDomain: "inventory-management-app-5caec.firebaseapp.com",
  projectId: "inventory-management-app-5caec",
  storageBucket: "inventory-management-app-5caec.appspot.com",
  messagingSenderId: "516434916087",
  appId: "1:516434916087:web:8ec779491776327cbb99f2",
  measurementId: "G-CS1K4N3T79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}