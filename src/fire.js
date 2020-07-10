import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAipRtSFMoSXoDY8LPKveoVuofX2B1dd5Y",
  authDomain: "fandesign-4f366.firebaseapp.com",
  databaseURL: "https://fandesign-4f366.firebaseio.com",
  projectId: "fandesign-4f366",
  storageBucket: "fandesign-4f366.appspot.com",
  messagingSenderId: "646530596302",
  appId: "1:646530596302:web:bdd64e534a90fa585a7f9f"
};
  // Initialize Firebase
var app = firebase.initializeApp(config);
var fire = firebase.firestore(app);
export default fire;