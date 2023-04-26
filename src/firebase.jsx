// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDEbRRXoFeWA5Y3ipVBbDG8P1B_OzuuUeI",
    authDomain: "chatapp-238b4.firebaseapp.com",
    projectId: "chatapp-238b4",
    storageBucket: "chatapp-238b4.appspot.com",
    messagingSenderId: "264917257545",
    appId: "1:264917257545:web:792ff49975dc49721cde98",
  })
  .auth();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
