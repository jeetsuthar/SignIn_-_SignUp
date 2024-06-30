import React from "react";
import SignIn from "./components/Sign-in";
import SignUp from "./components/signUp";
// import background from "./images/background.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import { click } from "@testing-library/user-event/dist/click";

const App = () => {
  return (
    <div className="fully-body">
    <div className="images_section">
      <img src="https://static.vecteezy.com/system/resources/previews/000/192/215/non_2x/under-construction-sign-vector.jpg" alt="" />
    </div>
    <Router>
      <div className="App">
        <nav>
          <ul>
            <Link to="/" className="links">
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
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </Router>
    
    </div>
  );
};

export default App;
