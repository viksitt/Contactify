// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMgj-dk8oDXtHfIucwugH0E8ob-fxlouk",
  authDomain: "vite-contact-cc0e3.firebaseapp.com",
  projectId: "vite-contact-cc0e3",
  storageBucket: "vite-contact-cc0e3.firebasestorage.app",
  messagingSenderId: "556021191456",
  appId: "1:556021191456:web:51e94c11cf4bd568a53d45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);