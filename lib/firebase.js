const firebase= require('firebase');

const firebaseConfig = require('c:/apikeys/apikeycmdparams.json')
const Firebase = firebase.initializeApp(firebaseConfig);
module.exports = Firebase;
