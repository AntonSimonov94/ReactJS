import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCnPPUaHpy75Pt1QTQr0RMlIGQiLQytlFw",
    authDomain: "authfirebase-54e19.firebaseapp.com",
    projectId: "authfirebase-54e19",
    storageBucket: "authfirebase-54e19.appspot.com",
    messagingSenderId: "743200606357",
    appId: "1:743200606357:web:c90f339bafad043927339c"
};

export const firebaseDb = firebase.initializeApp(firebaseConfig);
export const db = firebaseDb.database().ref();
export const auth = firebase.auth();