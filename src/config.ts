// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpfEvsbHKuDc4EJPT092eCIKmVb_Qtbt0",
  authDomain: "realtimedb-666a3.firebaseapp.com",
  databaseURL: "https://realtimedb-666a3-default-rtdb.firebaseio.com",
  projectId: "realtimedb-666a3",
  storageBucket: "realtimedb-666a3.appspot.com",
  messagingSenderId: "996940702034",
  appId: "1:996940702034:web:f086e682de210728189a8b",
  measurementId: "G-8KMQE3VL23"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

export default database;