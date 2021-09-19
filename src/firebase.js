import firebase from "firebase";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyApc9nvy7aJ3gcumhLAUgZ20wVvo86z_1s",
    authDomain: "noxconnect.firebaseapp.com",
    projectId: "noxconnect",
    storageBucket: "noxconnect.appspot.com",
    messagingSenderId: "716839728636",
    appId: "1:716839728636:web:d7ddbf86eae8db2d4e6e79",
  })
  .auth();
