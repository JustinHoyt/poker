import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMU4KJAhnsitFWy_WdYUw2MTQjjVxIApo",
    authDomain: "simplepoker.firebaseapp.com",
    databaseURL: "https://simplepoker-default-rtdb.firebaseio.com",
    projectId: "simplepoker",
    storageBucket: "simplepoker.appspot.com",
    messagingSenderId: "349034050638",
    appId: "1:349034050638:web:b8065e00239a36df67ff1f",
    measurementId: "G-ZC9XMVKS13"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };