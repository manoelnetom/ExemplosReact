import {initializeApp} from "firebase/app"
import{getAuth} from "firebase/auth"

const firebaseConfig={
    apiKey: "AIzaSyB7ITk3GWhFzGnT5yP_0bv3T3wcveqGdAI",
    authDomain: "projetoinf012.firebaseapp.com",
    projectId: "projetoinf012",
    storageBucket: "projetoinf012.appspot.com",
    messagingSenderId: "139257341165",
    appId: "1:139257341165:web:229b6ec7bd5e9bf40698e4",
    measurementId: "G-CT71159JDV"
}

const app=initializeApp(firebaseConfig);
var auth=null;
if(app){
    auth=getAuth();
}

export default auth;