
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiU_5XP0O4nhxbpvjWzTCmVKNS-lcy_Nk",
  authDomain: "proyectofinalnodejs-casserly.firebaseapp.com",
  projectId: "proyectofinalnodejs-casserly",
  storageBucket: "proyectofinalnodejs-casserly.firebasestorage.app",
  messagingSenderId: "463273704940",
  appId: "1:463273704940:web:c0769704c3c071977d54c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };