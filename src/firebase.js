// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_yAin1jWt5RKAs-Y0uyk_7gzeRH-F-4Y",
  authDomain: "brin-twav.firebaseapp.com",
  databaseURL: "https://brin-twav-default-rtdb.firebaseio.com",
  projectId: "brin-twav",
  storageBucket: "brin-twav.appspot.com",
  messagingSenderId: "629870480963",
  appId: "1:629870480963:web:bdbfa57ab75645ded6cef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;