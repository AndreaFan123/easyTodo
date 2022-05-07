import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV7FILz1nkI96OXMSVY0yzeVlF3AtGmm4",
  authDomain: "easytodo-0508.firebaseapp.com",
  projectId: "easytodo-0508",
  storageBucket: "easytodo-0508.appspot.com",
  messagingSenderId: "747285328103",
  appId: "1:747285328103:web:fb39c7384004da61523242",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firebase auth and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
