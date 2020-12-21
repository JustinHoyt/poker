const firebase = require("firebase");

require("firebase/firestore");

const config = {
    apiKey: "AIzaSyBMU4KJAhnsitFWy_WdYUw2MTQjjVxIApo",
    authDomain: "simplepoker.firebaseapp.com",
    projectId: "simplepoker",
}

firebase.initializeApp(config);

var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

function addSingleUserDoc() {
    db.collection("users").add({
        Name: "Ada Sherwood",
        Email: "Ada124@gmail.com"
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

addSingleUserDoc();