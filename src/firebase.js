import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

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
export const auth = getAuth(app);