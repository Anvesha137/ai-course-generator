// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-8bd4f.firebaseapp.com",
  projectId: "ai-course-generator-8bd4f",
  storageBucket: "ai-course-generator-8bd4f.firebasestorage.app",
  messagingSenderId: "32498094433",
  appId: "1:32498094433:web:2337c016044063ee57f520",
  measurementId: "G-DV5ZE68N8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)