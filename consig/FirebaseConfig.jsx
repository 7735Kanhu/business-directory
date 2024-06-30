// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYCp_F3K0fg9VVI1E0hp0yp0LBnWb5C1k",
  authDomain: "stulms.firebaseapp.com",
  databaseURL: "https://stulms-default-rtdb.firebaseio.com",
  projectId: "stulms",
  storageBucket: "stulms.appspot.com",
  messagingSenderId: "193798511261",
  appId: "1:193798511261:web:f9f661f23ad88727ca1274",
  measurementId: "G-S3EXD5Z8BP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage=getStorage(app)