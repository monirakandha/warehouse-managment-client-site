// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId
    apiKey: "AIzaSyAEZuVPdLiXEvGG7w9FlAqZrVgRhOen1lQ",
    authDomain: "book-service-management-system.firebaseapp.com",
    projectId: "book-service-management-system",
    storageBucket: "book-service-management-system.appspot.com",
    messagingSenderId: "1050379589454",
    appId: "1:1050379589454:web:32eff92d34cb2b596f301f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;