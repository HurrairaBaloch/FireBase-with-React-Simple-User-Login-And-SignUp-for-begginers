import { createContext, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const FireBaseContext = createContext(null);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvCvO17PPEw1HNc5-YV__RIB5IFDNS9Aw",
  authDomain: "react-8b1e7.firebaseapp.com",
  databaseURL: "https://react-8b1e7-default-rtdb.firebaseio.com",
  projectId: "react-8b1e7",
  storageBucket: "react-8b1e7.appspot.com",
  messagingSenderId: "81020931704",
  appId: "1:81020931704:web:07f7813b0b4af760fee78d",
};

export const UseFirebase = () => useContext(FireBaseContext);
export const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

export const FireBaseProvider = (props) => {
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      console.log("user created");
    } catch (error) {}
  };

  return (
    <FireBaseContext.Provider value={signup}>
      {props.children}
    </FireBaseContext.Provider>
  );
};
