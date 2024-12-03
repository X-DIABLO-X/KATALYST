import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlsrJuqwJGB6ReBUcH1EJVAD-g8GGmL-E",
    authDomain: "katalyst-harshit.firebaseapp.com",
    projectId: "katalyst-harshit",
    storageBucket: "katalyst-harshit.firebasestorage.app",
    messagingSenderId: "1040361086959",
    appId: "1:1040361086959:web:ab4ec7895c7ceba6a4601a",
    measurementId: "G-WT2B5H32K0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
};
