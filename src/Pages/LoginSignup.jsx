import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing, I agree to the <b>terms of use & privacy</b>.
          </label>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;