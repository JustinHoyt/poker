import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBMU4KJAhnsitFWy_WdYUw2MTQjjVxIApo",
    authDomain: "simplepoker.firebaseapp.com",
    projectId: "simplepoker",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };