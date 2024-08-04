import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB-SCPNJhfdkWViAuBgXVCZH08Biowoyn4",
  authDomain: "inventory-management-app-5caec.firebaseapp.com",
  projectId: "inventory-management-app-5caec",
  storageBucket: "inventory-management-app-5caec.appspot.com",
  messagingSenderId: "516434916087",
  appId: "1:516434916087:web:8ec779491776327cbb99f2",
  measurementId: "G-CS1K4N3T79"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };