import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "", 
    authDomain: "", 
    projectID: "", 
    storageBucket: "", 
    messagingSenderId: "", 
    appId: "", 
    databaseURL: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new MicrosoftAuthProvider();

export{auth, database, googleProvider, microsoftProvider}
