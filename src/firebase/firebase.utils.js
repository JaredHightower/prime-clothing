import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJYZ6_UvsoIIEbQlZ9Gog-MkcBm9C5NHc",
  authDomain: "prime-clothing.firebaseapp.com",
  databaseURL: "https://prime-clothing.firebaseio.com",
  projectId: "prime-clothing",
  storageBucket: "prime-clothing.appspot.com",
  messagingSenderId: "756052400567",
  appId: "1:756052400567:web:e4d9653cf5be0537847032",
  measurementId: "G-JVEE685096",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
