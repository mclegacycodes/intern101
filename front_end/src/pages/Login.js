import React from "react";
import Auth from "../components/Auth";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Auth title="LOGIN">
        <InputField label="Email" />
        <InputField label="Password" />

        <p className="flex-end text-xs text-blue-700 text-right mt-1">forgot password?</p>
        <button className=" w-full bg-blue-600 text-white font-regular mt-6 text-sm py-2">
          LOGIN
        </button>
      </Auth>
    </div>
  );
};

export default Login;
