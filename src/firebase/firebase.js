// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxZUtl0A1IaQ1JedFIxh-NSBC8Y-hTuWI",
  authDomain: "facebook-f963a.firebaseapp.com",
  projectId: "facebook-f963a",
  storageBucket: "facebook-f963a.appspot.com",
  messagingSenderId: "919743830939",
  appId: "1:919743830939:web:58dc3b2eb313fe39775f3e",
  measurementId: "G-MSK012EST3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

const provider = new GoogleAuthProvider();

export { provider };
export default db;
