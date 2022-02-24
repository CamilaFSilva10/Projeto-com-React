import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDkNTutBWAw3n4ZyA5_KJ8IW9OPpMhISj4",
    authDomain: "sistema-20fc1.firebaseapp.com",
    projectId: "sistema-20fc1",
    storageBucket: "sistema-20fc1.appspot.com",
    messagingSenderId: "133294502569",
    appId: "1:133294502569:web:e62abf470d9be347a66fb8",
    measurementId: "G-16SC979F3G"
  };
  

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;