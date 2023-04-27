import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEbRRXoFeWA5Y3ipVBbDG8P1B_OzuuUeI",
  authDomain: "chatapp-238b4.firebaseapp.com",
  projectId: "chatapp-238b4",
  storageBucket: "chatapp-238b4.appspot.com",
  messagingSenderId: "264917257545",
  appId: "1:264917257545:web:792ff49975dc49721cde98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
