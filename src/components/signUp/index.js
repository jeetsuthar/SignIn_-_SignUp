import React, { useState } from "react";
import "./style2.css";
import apple from "../../images/apple (1).png";
import google from "../../images/google.png";
import { Link } from "react-router-dom";
const Index = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirm_Password, setConfirm_Password] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_outer_div">

      {/* Application logo  */}
      <h2 className="login_Heading">
        <span className="App_logo">MovieCo</span> Sign In
      </h2>

      {/* Sign UP form  */}
      <form onSubmit={handleLogin}>
        <div className="form_input_field_div">
          <input
            type="text"
            placeholder="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
            value={Confirm_Password}
            onChange={(e) => setConfirm_Password(e.target.value)}
            required
          />
          <button type="submit" className="Login_button">
            Register now
          </button>
        </div>
      </form>

      {/* sign Up with the google and Apple */}
      <p className="divider">Or</p>
      <div className="Social_account_links">
        <button type="submit">
          <img src={google} alt="🔃" />
          Continue with Google
        </button>
        <button type="submit">
          <img src={apple} alt="🔃" />
          Continue with Apple
        </button>
      </div>

      {/* Already have an account  */}
      <Link to="/" className="link_signIn">
        <p className="have_account">
          Already have an account? <span>Sign In</span>
        </p>
      </Link>

    </div>
  );
};

export default Index;
