import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBUF40knK_eiJIVwTNwWA8uCF08crrUfuY",
    authDomain: "linkedinclone-7bf22.firebaseapp.com",
    projectId: "linkedinclone-7bf22",
    storageBucket: "linkedinclone-7bf22.appspot.com",
    messagingSenderId: "411312191540",
    appId: "1:411312191540:web:c605b43696d98c43667261"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage };
export default db;