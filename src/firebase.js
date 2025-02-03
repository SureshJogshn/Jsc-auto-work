import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// import { getFirestore } from "firebase/firestore"; // additional sata store

const firebaseConfig = {
    apiKey: "AIzaSyDfffh92uWo4NYk6erXsb1izJn28-XGUGY",
    authDomain: "jscautowork.firebaseapp.com",
    projectId: "jscautowork",
    storageBucket: "jscautowork.firebasestorage.app",
    messagingSenderId: "624896690425",
    appId: "1:624896690425:web:cad88d68d3343255d8fa28",
    measurementId: "G-BCDK78H4P4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }