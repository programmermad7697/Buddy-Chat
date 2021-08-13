import firebase from "firebase";

const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyD7MDWKNFnLuGrbo-NLivPzQFB_T0NyrlI",
  authDomain: "buddy-chat-mp.firebaseapp.com",
  projectId: "buddy-chat-mp",
  storageBucket: "buddy-chat-mp.appspot.com",
  messagingSenderId: "24786741481",
  appId: "1:24786741481:web:5671fe54d01d76a67e2878",
  measurementId: "G-ZRDY0KJ8S6"
});

const db = firebaseConfig.firestore();

export default db;