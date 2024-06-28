import React from "react";
import SignIn from "./components/Sign-in";
import SignUp from "./components/signUp";
// import background from "./images/background.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import { click } from "@testing-library/user-event/dist/click";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <Link to="/signin" className="links">
              <li id="list1" className="movement link link--metis">
                Sign In
              </li>
            </Link>

            <Link to="/signup" className="links">
              <li id="list1" className="movement link link--metis">
                Sign Up{" "}
              </li>
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
