import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-[5%] py-2 flex flex-row bg-blue-700 justify-between">
      <Link to="/" className=" flex flex-row justify-start items-center">
        <img
          src={require("../assets/ucc-logo.png")}
          alt="logo"
          className="h-10"
        />
        <p className="text-white font-semibold ml-2">INTENSHIP UCC</p>
      </Link>
      <div className="flex flex-row items-center text-white w-[20%] justify-between font-semibold">
        <p>Departments</p>
        <p>Reviews</p>
        <p>FAQs</p>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <Link to="/createaccount" className="border-[1px] rounded text-sm border-white-50 font-semibold text-white py-1 px-2">
          CREATE ACCOUNT
        </Link>
        <Link to="/login" className="border-[1px] rounded text-sm font-semibold border-white text-blue-600 py-1 px-4 ml-2 bg-white">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
