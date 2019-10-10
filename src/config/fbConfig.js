import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBj2GOEAnDEPbBW4tAy2MS5fA4R6uvXR4g',
  authDomain: 'net-ninja-marioplan-f165a.firebaseapp.com',
  databaseURL: 'https://net-ninja-marioplan-f165a.firebaseio.com',
  projectId: 'net-ninja-marioplan-f165a',
  storageBucket: 'net-ninja-marioplan-f165a.appspot.com',
  messagingSenderId: '474395752591',
  appId: '1:474395752591:web:a368e5e0270c525f9018fa',
  measurementId: 'G-LW7XY3JJQQ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
