import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBGi4NDuRdypmosQ9Q2L1HwSTkoohPE-Uw",
  authDomain: "tidings--db.firebaseapp.com",
  databaseURL: "https://tidings--db.firebaseio.com",
  projectId: "tidings--db",
  storageBucket: "tidings--db.appspot.com",
  messagingSenderId: "370379687781",
  appId: "1:370379687781:web:8a0ce71a38d82b5eb3838c",
  measurementId: "G-ZER5G1RGRK"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();