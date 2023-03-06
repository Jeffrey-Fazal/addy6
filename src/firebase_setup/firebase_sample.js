// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth"

// import * as dotenv from 'dotenv'
// dotenv.config()

const firebaseConfig = {
// Get config from fireabse console  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const firestore = getFirestore(app);

export { app, auth, database, firestore };