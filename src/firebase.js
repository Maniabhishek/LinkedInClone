import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC8pRhgKGgksZl6aAhHF397hvEHI_zi2yw",
  authDomain: "abhishekmani-5b3a3.firebaseapp.com",
  projectId: "abhishekmani-5b3a3",
  storageBucket: "abhishekmani-5b3a3.appspot.com",
  messagingSenderId: "1048437223454",
  appId: "1:1048437223454:web:94996eb50279d1c7b8be0f"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage };
export default db;