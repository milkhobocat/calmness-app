import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyCCwGwl5npFdaDmE-vzuF09qhtP-JYZy9k",
    authDomain: "calmness-app-fa25b.firebaseapp.com",
    projectId: "calmness-app-fa25b",
    storageBucket: "calmness-app-fa25b.appspot.com",
    messagingSenderId: "529653040961",
    appId: "1:529653040961:web:75f6f240dfaaeedc5383c0",
    measurementId: "G-97LD52GLSE"
  });

  export const auth = getAuth()
export default app;
