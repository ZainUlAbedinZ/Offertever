// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD7BuOjculD-EhsQxb2lSBiHQsFV6lDYC4",
  authDomain: "uidesign-d8541.firebaseapp.com",
  projectId: "uidesign-d8541",
  storageBucket: "uidesign-d8541.appspot.com",
  messagingSenderId: "282603252591",
  appId: "1:282603252591:web:164dc939096b137735169a",
  measurementId: "G-P7YSB41E6B"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;