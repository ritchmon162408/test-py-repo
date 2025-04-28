import { createContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { googleProvider } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged (auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

 

};

export default AuthContext;
