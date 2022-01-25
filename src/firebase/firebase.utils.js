import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAYw-s4eckEwaD6DFSp3L3hFWZJqOrsrDg",
  authDomain: "crown-db-a4914.firebaseapp.com",
  projectId: "crown-db-a4914",
  storageBucket: "crown-db-a4914.appspot.com",
  messagingSenderId: "130814926453",
  appId: "1:130814926453:web:3438d6c7569422f116a23c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
