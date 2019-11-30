var firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDV3WdQn9iITjXBqIcoE6M9OLNA1s-Sot8",
    authDomain: "fynance-ai.firebaseapp.com",
    databaseURL: "https://fynance-ai.firebaseio.com",
    projectId: "fynance-ai",
    storageBucket: "fynance-ai.appspot.com",
    messagingSenderId: "969634276824",
    appId: "1:969634276824:web:4576c36c0ce94883c77ead",
    measurementId: "G-XVL7FTX62D"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();

function writeSomething(type, id, first, last){
    db.ref("users/"+type+"/"+id).set({
        id: id,
        first:first,
        last:last
    });
}

function readSomething(type, id){
    db.ref("users/"+type+"/"+id).once('value').then(function(snapshot){
        console.log(snapshot.toJSON());
    })
}

writeSomething("investee", "UmzMcIGkNj", "Bob3", "Builder");

readSomething("investors", "XAoas6acwn")