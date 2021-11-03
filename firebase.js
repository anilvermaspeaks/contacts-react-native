import { initializeApp } from "firebase/app";

import { API_KEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGESENDERID, APPID, MESUREMENTID } from "@env"

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGESENDERID,
  appId: APPID,
  measurementId: MESUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const appAuth = getAuth(app);
export const fireBaseLogin = signInWithEmailAndPassword;

