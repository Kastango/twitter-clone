import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDW_aH6O8NG5Fi8qsAY3N_NKO8fcDmCJcU",
  authDomain: "twedir-43e8a.firebaseapp.com",
  projectId: "twedir-43e8a",
  storageBucket: "twedir-43e8a.appspot.com",
  messagingSenderId: "689746952521",
  appId: "1:689746952521:web:5b4c70c7812a3385c1da98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
