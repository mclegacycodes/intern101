import React from "react";

const Auth = (props) => {
  return (
    <div className="flex flex-1 h-screen bg-slate-200 ">
      <div className=" flex flex-row w-[60%] h-fit bg-white mx-auto overflow-hidden rounded-lg mt-10">
        <img
          src={require("../assets/students.png")}
          alt="login"
          className="w-[50%] "
        />
        <div className="flex-1 px-6 pb-4">
          <p className="text-blue-600 font-semibold text-lg text-center my-5  ">
            {props.title}
          </p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Auth;
