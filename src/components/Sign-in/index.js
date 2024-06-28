import React, { useState } from "react";
import "./style.css";
import apple from '../../images/apple (1).png';
import google from '../../images/google.png';

const Index = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_outer_div">
      {/*     */}
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
          <button type="submit" className="Login_button">
            Login
          </button>
        </div>
      </form>
      <p>Or</p>
      <div className="Social_account_links">
        <button type="submit"><img src={google} alt="🔃" />Continue with Google</button>
        <button type="submit"><img src={apple} alt="🔃"  />Continue with Apple</button>
      </div>
      <div className="check_term_and_conditions">
        <input type="checkbox" /><span>Accept all the <a href="#">Term & Condition</a></span>
      </div>
    </div>
  );
};

export default Index;
