import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBwhOdd8pPehfYipos-hHEU_t3z8BCDTe4",
  authDomain: "ao-db-a1255.firebaseapp.com",
  databaseURL: "https://ao-db-a1255.firebaseio.com",
  projectId: "ao-db-a1255",
  storageBucket: "ao-db-a1255.appspot.com",
  messagingSenderId: "508455962045",
  appId: "1:508455962045:web:567fcae140d6136126fed4",
  measurementId: "G-5P6QP5BLZR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
