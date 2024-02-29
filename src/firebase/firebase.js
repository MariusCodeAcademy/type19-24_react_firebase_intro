// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIRE_B_apiKey,
  authDomain: import.meta.env.FIRE_B_authDomain,
  projectId: import.meta.env.FIRE_B_projectId,
  storageBucket: import.meta.env.FIRE_B_storageBucket,
  messagingSenderId: import.meta.env.FIRE_B_messagingSenderId,
  appId: import.meta.env.FIRE_B_appId,
};
console.log('firebaseConfig ===', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
