import React from "react";
import Auth from "../components/Auth";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
          <Auth title='Create Your Account'>
              <div className="flex flex-row gap-x-6">
              <InputField label="First Name"/>
              <InputField label="Last Name"/>
              </div>
              <InputField label="Index Number"/>
              <InputField label="Student Email"/>
              <InputField label="Password"/>
              <InputField label="Confirm Password" />
              <button className=" w-full bg-blue-600 text-white font-regular mt-6 text-sm py-2">Create Account</button>
      </Auth>
    </div>
  );
};

export default Login;
