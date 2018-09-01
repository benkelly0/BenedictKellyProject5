import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAnmJQWfAxDHXs81rieYXkw6os3T_3ekNE",
    authDomain: "project5-5cec4.firebaseapp.com",
    databaseURL: "https://project5-5cec4.firebaseio.com",
    projectId: "project5-5cec4",
    storageBucket: "project5-5cec4.appspot.com",
    messagingSenderId: "836563177649"
};
firebase.initializeApp(config);

export default firebase;