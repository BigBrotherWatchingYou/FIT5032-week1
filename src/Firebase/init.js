import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnrSn7JVtVeI5NRDR0xQUfVRZioFgUTfo",
  authDomain: "week7-junxiang.firebaseapp.com",
  projectId: "week7-junxiang",
  storageBucket: "week7-junxiang.firebasestorage.app",
  messagingSenderId: "663824614556",
  appId: "1:663824614556:web:b60e789fc4312c44c6d959",
  measurementId: "G-ZK0WGJL7FP"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;