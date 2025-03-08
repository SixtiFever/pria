// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAff_Oo_rMdsYxqok2ck38SQAPIo-VmqLQ",
  authDomain: "clientdive-test.firebaseapp.com",
  projectId: "clientdive-test",
  storageBucket: "clientdive-test.firebasestorage.app",
  messagingSenderId: "475002891211",
  appId: "1:475002891211:web:b6bc9fdd6cf7daafa1a44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(app);