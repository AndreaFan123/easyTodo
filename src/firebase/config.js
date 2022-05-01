import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPKjGHccpc5zgWXFPhWiR5ngJacsA_ht8",
  authDomain: "easytodo-0429.firebaseapp.com",
  projectId: "easytodo-0429",
  storageBucket: "easytodo-0429.appspot.com",
  messagingSenderId: "117197975120",
  appId: "1:117197975120:web:a4f314d9ddd9ce55c76b55",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firebase auth and get a reference to the service
const projectFirebaseAuth = getAuth(app);
const projectFirestore = getFirestore(app);

export { projectFirebaseAuth, projectFirestore };
