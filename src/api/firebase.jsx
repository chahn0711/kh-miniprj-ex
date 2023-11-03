import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
 apiKey: "AIzaSyDrp6JCf-raZ-6qLOuGM76nEiQu7DWbMcM",
  authDomain: "kh-mini-project-4bd94.firebaseapp.com",
  projectId: "kh-mini-project-4bd94",
  storageBucket: "kh-mini-project-4bd94.appspot.com",
  messagingSenderId: "169963874652",
  appId: "1:169963874652:web:f701730e7ca502459cf999",
  measurementId: "G-BQNHJX8P1N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();