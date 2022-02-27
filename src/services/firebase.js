// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmQ_1e1G6MYJSLgIY0CjkwsBcmRwy_FRc",
    authDomain: "gbreactbase.firebaseapp.com",
    projectId: "gbreactbase",
    storageBucket: "gbreactbase.appspot.com",
    messagingSenderId: "1035135958885",
    appId: "1:1035135958885:web:3bfc61d4d4635fd163eb8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signUp = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);