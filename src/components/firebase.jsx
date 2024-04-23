import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpzoMap-ctLO31udsbjy9UMLGI6Vq5NX0",
  authDomain: "miniproject-93414.firebaseapp.com",
  projectId: "miniproject-93414",
  storageBucket: "miniproject-93414.appspot.com",
  messagingSenderId: "942437599547",
  appId: "1:942437599547:web:a63eae91ca5e3a0ca34f1e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;