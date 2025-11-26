"use client";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "@/lib/firebase";
import { AuthContext } from "./AuthContext";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


    const signInWithGoogleFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signoutUserFunc = () => {
    setLoading(true);
    document.cookie = "authToken=; Max-Age=0; path=/;";
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    updateProfileFunc,
    signoutUserFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currUser) => {
      // console.log(currUser);
      setUser(currUser);
      if(currUser){
        const token = await currUser.getIdToken();
        document.cookie = `authToken=${token}; path=/;`;
      }
      else{
        document.cookie = "authToken=; Max-Age=0; path=/;";
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;