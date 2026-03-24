import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-dab59.firebaseapp.com",
  projectId: "interviewiq-dab59",
  storageBucket: "interviewiq-dab59.firebasestorage.app",
  messagingSenderId: "858053265407",
  appId: "1:858053265407:web:edf130aabc5e8ad52ac9ca"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };