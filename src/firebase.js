
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfffh92uWo4NYk6erXsb1izJn28-XGUGY",
    authDomain: "jscautowork.firebaseapp.com",
    projectId: "jscautowork",
    storageBucket: "jscautowork.firebasestorage.app",
    messagingSenderId: "624896690425",
    appId: "1:624896690425:web:cad88d68d3343255d8fa28",
    measurementId: "G-BCDK78H4P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

// ------------------------------------------------------------------------------------------

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getFirestore, collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDfffh92uWo4NYk6erXsb1izJn28-XGUGY",
//     authDomain: "jscautowork.firebaseapp.com",
//     projectId: "jscautowork",
//     storageBucket: "jscautowork.firebaseapp.com",
//     messagingSenderId: "624896690425",
//     appId: "1:624896690425:web:cad88d68d3343255d8fa28",
//     measurementId: "G-BCDK78H4P4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// // Ratings collection reference
// const ratingsRef = collection(db, "ratings");

// // Function to sign in with Google
// const signInWithGoogle = async () => {
//     try {
//         const result = await signInWithPopup(auth, provider);
//         return result.user;
//     } catch (error) {
//         console.error("Google Sign-In Error:", error);
//     }
// };

// // Function to add a rating with user info
// const addRating = async (rating, user) => {
//     try {
//         await addDoc(ratingsRef, {
//             rating,
//             name: user.displayName,
//             photo: user.photoURL,
//             timestamp: new Date(),
//         });
//         console.log("Rating added successfully!");
//     } catch (error) {
//         console.error("Error adding rating:", error);
//     }
// };

// // Function to listen for real-time ratings
// const listenToRatings = (callback) => {
//     const q = query(ratingsRef, orderBy("timestamp", "desc"));
//     return onSnapshot(q, (snapshot) => {
//         const ratingsArray = snapshot.docs.map(doc => doc.data());
//         callback(ratingsArray);
//     });
// };

// // Export Firebase functions
// export { auth, provider, db, signInWithGoogle, addRating, listenToRatings };

// --------------------------------------------------------------------
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // import { getFirestore } from "firebase/firestore"; // additional sata store

// const firebaseConfig = {
//     apiKey: "AIzaSyDfffh92uWo4NYk6erXsb1izJn28-XGUGY",
//     authDomain: "jscautowork.firebaseapp.com",
//     projectId: "jscautowork",
//     storageBucket: "jscautowork.firebasestorage.app",
//     messagingSenderId: "624896690425",
//     appId: "1:624896690425:web:cad88d68d3343255d8fa28",
//     measurementId: "G-BCDK78H4P4"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider, db }
// ----------------------------------------------------------------------------------------
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDfffh92uWo4NYk6erXsb1izJn28-XGUGY",
//     authDomain: "jscautowork.firebaseapp.com",
//     projectId: "jscautowork",
//     storageBucket: "jscautowork.firebaseapp.com",
//     messagingSenderId: "624896690425",
//     appId: "1:624896690425:web:cad88d68d3343255d8fa28",
//     measurementId: "G-BCDK78H4P4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// // Ratings collection reference
// const ratingsRef = collection(db, "ratings");

// // Function to add a rating
// const addRating = async (rating) => {
//     try {
//         await addDoc(ratingsRef, { rating });
//         console.log("Rating added successfully!");
//     } catch (error) {
//         console.error("Error adding rating:", error);
//     }
// };

// // Function to listen for real-time ratings
// const listenToRatings = (callback) => {
//     return onSnapshot(ratingsRef, (snapshot) => {
//         const ratingsArray = snapshot.docs.map(doc => doc.data().rating);
//         callback(ratingsArray);
//     });
// };

// // Export Firebase functions
// export { auth, provider, db, addRating, listenToRatings };
