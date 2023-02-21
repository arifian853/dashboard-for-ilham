// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJAlUYWGOSH4eVMNCJ0UJ47r1IcuKlyew",
  authDomain: "mytestbed-9e98e.firebaseapp.com",
  databaseURL: "https://mytestbed-9e98e-default-rtdb.firebaseio.com",
  projectId: "mytestbed-9e98e",
  storageBucket: "mytestbed-9e98e.appspot.com",
  messagingSenderId: "485671148561",
  appId: "1:485671148561:web:7873a14a3ef92db479e5b0",
  measurementId: "G-42M4JS63GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;