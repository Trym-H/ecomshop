import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5HTzTYlJL0fNCWBVnJgUWhZ6Ne42Cpo4",
  authDomain: "ecomshop-dps313.firebaseapp.com",
  databaseURL: "https://ecomshop-dps313.firebaseio.com",
  projectId: "ecomshop-dps313",
  storageBucket: "",
  messagingSenderId: "614268166847",
  appId: "1:614268166847:web:d4396f4f1e681be7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  //vi kaller .get på userRef (som er et firestore dokument) for å få snapshot.
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
