// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_B_apiKey,
  authDomain: import.meta.env.VITE_FIRE_B_authDomain,
  projectId: import.meta.env.VITE_FIRE_B_projectId,
  storageBucket: import.meta.env.VITE_FIRE_B_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIRE_B_messagingSenderId,
  appId: import.meta.env.VITE_FIRE_B_appId,
};
// console.log('firebaseConfig ===', firebaseConfig);

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export default app;
