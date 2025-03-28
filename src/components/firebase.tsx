// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDoRGAx32mMWLqTBGmfZnNQrKTSki2sCVo",
	authDomain: "onedb-5b2f4.firebaseapp.com",
	projectId: "onedb-5b2f4",
	storageBucket: "onedb-5b2f4.firebasestorage.app",
	messagingSenderId: "652011679386",
	appId: "1:652011679386:web:c0475a25c0de89e9583923",
	measurementId: "G-MNF7DHBKRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
