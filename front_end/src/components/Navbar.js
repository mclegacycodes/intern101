import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ucc-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <div>
      <Link to="/">
          <img width="40" src={logo} alt="ucc logo" />
      </Link>
      <Link to="/">
          <span>internship ucc</span>
      </Link>
        </div>
      <div className="tabs">
        <a href="">DEPARTMENTS</a>
        <a href="">REVIEW</a>
        <a href="">FAQs</a>
      </div>

      <div className="buttons">
        <Link to="/signup">
          <button className="btn">CREATE ACCOUNT</button>
        </Link>
        <Link to="/login">
          <button className="btn full">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
