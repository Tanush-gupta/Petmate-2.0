// src/firebaseConfig.js
import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBXH1kYEIm332xn6ywk02KyrtbE9OCS5FQ',
    authDomain: 'petmate-e01d8.firebaseapp.com',
    projectId: 'petmate-e01d8',
    storageBucket: 'petmate-e01d8.appspot.com',
    messagingSenderId: '473208483707',
    appId: '1:871038621890:android:971456d78519ce1b18035b',
};

if (!firebase.apps.length) {
    console.log("Initializing Firebase...");
    firebase.initializeApp(firebaseConfig);
} else {
    console.log("Firebase app already initialized.");
}