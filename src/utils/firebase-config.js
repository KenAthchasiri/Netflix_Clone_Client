
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrgFRFcj2BsW5LD6lyTgzrsb3UtxAcPKk",
    authDomain: "react-netflix-clone-35d0c.firebaseapp.com",
    projectId: "react-netflix-clone-35d0c",
    storageBucket: "react-netflix-clone-35d0c.appspot.com",
    messagingSenderId: "22477599393",
    appId: "1:22477599393:web:a3984317f8397a6a0bf6e0",
    measurementId: "G-81NRVDJX39"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);