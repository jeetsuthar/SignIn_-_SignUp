import React, { useState } from "react";
import "./style.css";
// import apple from '../../images/apple (1).png';
// import google from '../../images/google.png';
import { Link } from "react-router-dom";
const Index = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_outer_div">
      <h2 className="login_Heading">
        <span className="App_logo">MovieCo</span> Sign In
      </h2>
      <form onSubmit={handleLogin}>
        <div className="form_input_field_div">
          
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="Login_button">
            Register now
          </button>
        </div>
      </form>
      <p className="have_account">Already have an Account? <Link to="/signin">click here</Link></p>
    </div>
  );
};

export default Index;
