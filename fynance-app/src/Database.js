
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

// Fires the query and just lmao
function write(type, id, obj){
    // console.log("wrote a something");
    db.ref("users/"+type+"/"+id).set(obj);
}

// Returns the promise of the query
function read(type, id){
    return db.ref("users/"+type+"/"+id).once('value');
}

// Returns the promise of the query
function get_query(query){
    return db.ref(query).once('value');
}

// Demo usage for writing data to db

// var bob = {first: "bob9", last: "builder3", id: "demo"};
// DB.write("investor", "demo", bob)

const DB = {read, write, get_query};

export default DB;