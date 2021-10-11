import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxiisYTs9NvOLA9RNqXy7LyCXRM09k9jE",
  authDomain: "nextfire-2a29f.firebaseapp.com",
  projectId: "nextfire-2a29f",
  storageBucket: "nextfire-2a29f.appspot.com",
  messagingSenderId: "404063733322",
  appId: "1:404063733322:web:e73c066f500849171e08b3",
  measurementId: "G-G14JNRJC4L",
};

if (firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
