import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCklEkE_3sUHcfHYRIF9mwMXS5VBH4IqU",
  authDomain: "premium-apex-349213.firebaseapp.com",
  projectId: "premium-apex-349213",
  storageBucket: "premium-apex-349213.appspot.com",
  messagingSenderId: "239802001371",
  appId: "1:239802001371:web:c69e619bf22a9f77cb69fe",
  measurementId: "G-BNJSFM82X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);