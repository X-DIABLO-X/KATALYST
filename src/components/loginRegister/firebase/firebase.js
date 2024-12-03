import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlsrJuqwJGB6ReBUcH1EJVAD-g8GGmL-E",
    authDomain: "katalyst-harshit.firebaseapp.com",
    projectId: "katalyst-harshit",
    storageBucket: "katalyst-harshit.firebasestorage.app",
    messagingSenderId: "1040361086959",
    appId: "1:1040361086959:web:ab4ec7895c7ceba6a4601a",
    measurementId: "G-WT2B5H32K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export the functions and auth object
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail }; 