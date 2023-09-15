import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import { onAuthStateChanged, getAuth } from "firebase/auth";
// import { useState, useEffect } from "react";
// import { app } from "./context/firebase";
// import Header from "./Components/Navbar";
// import AddListing from "./Components/AddListing";

// const firebase = getAuth(app);

const App = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(firebase, (user) => {
  //     if (user) {
  //       setUser(user);
  //       if (
  //         window.location.pathname === "/register" ||
  //         window.location.pathname === "/login"
  //       ) {
  //         navigate("/");
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, [firebase, navigate]);

  return (
    <div className="container">
      <h1>Register</h1>

      <Register />
      <hr />
      <h1>Login</h1>
      <Login />
    </div>
  );
};

export default App;
