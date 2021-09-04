import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// web-gallery app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQP5ydInjtXalwRxnWcrKcYCAGZcrxyXQ",
  authDomain: "msk-web-gallery.firebaseapp.com",
  projectId: "msk-web-gallery",
  storageBucket: "msk-web-gallery.appspot.com",
  messagingSenderId: "453342914119",
  appId: "1:453342914119:web:ef036971bfaf4b1aa4f362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };