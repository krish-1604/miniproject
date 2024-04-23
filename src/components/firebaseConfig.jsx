import firebase from 'firebase/compat/app'; // Import Firebase from compat/app for compatibility with older versions
import 'firebase/compat/database'; // Import Firebase Database
import 'firebase/compat/storage'; // Import Firebase Storage

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase if it's not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();
export const storage = firebase.storage();
export default firebase;
