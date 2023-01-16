import firebase from "firebase/compat/app";
import "firebase/auth";

const conf = {
    apiKey: "AIzaSyConu2x5nDBaz61oL6wKbKkfAt-gBa4_w0",
    authDomain: "exquisito-1d188.firebaseapp.com",
    projectId: "exquisito-1d188",
    storageBucket: "exquisito-1d188.appspot.com",
    messagingSenderId: "469642482529",
    appId: "1:469642482529:web:bc786ce83198e4c7b82b20",
    measurementId: "G-03Y47808XX"
};

export default !firebase.apps.length ? firebase.initializeApp(conf) : firebase.app();