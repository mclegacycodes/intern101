import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../components/Auth";
import InputField from "../../components/InputField";

const CreateAccount = () => {
  return (
    <Auth title="Create your Account">
      <div className="username">
        <InputField label="First Name" type="text" />
        <InputField label="Last Name" type="text" />
      </div>
      <InputField label="Index Number" type="text" />
      <InputField label="Student E-mail" type="e-mail" />
      <InputField label="Password" type="password" />
      <InputField label="Confirm Password" type="password" />
      <Link to="/login">
        <button className="submit-btn">Create Account</button>
      </Link>
    </Auth>
  );
};

export default CreateAccount;
