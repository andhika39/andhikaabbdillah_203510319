import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC3H63W6o8oUBFXHjDp-SxIVoYMIJdMylg",
	authDomain: "signal-clone-cc713.firebaseapp.com",
	projectId: "signal-clone-cc713",
	storageBucket: "signal-clone-cc713.appspot.com",
	messagingSenderId: "266105085421",
	appId: "1:266105085421:web:025ea1bc23a31beec1dbe4",
	measurementId: "G-52Q0R1SPVY"
};

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
