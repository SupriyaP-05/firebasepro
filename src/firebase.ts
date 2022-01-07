// Import the functions you need from the SDKs you need

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHtw_-Q29d-drre3_PaE9zVuj5-kDiMPs",
  authDomain: "fir-auth-a5b70.firebaseapp.com",
  projectId: "fir-auth-a5b70",
  storageBucket: "fir-auth-a5b70.appspot.com",
  messagingSenderId: "933937116383",
  appId: "1:933937116383:web:9db8cf32b8fbea2340256a",
  measurementId: "G-20E1M6CY6N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);
const db = firebase.firestore();
export const dbs = firebase.database();

export default db;