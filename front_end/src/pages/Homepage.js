import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";
import {BsCheck2Circle} from "react-icons/bs";

const Homepage = () => {
    return (
      <div className="h-screen w-full m-auto bg-slate-200">
        <div className="w-full flex flex-row py-12 items-center justify-around bg-white ">
          <div className="flex flex-col w-1/3">
            <h1 className="text-5xl font-bold text-blue-800 leading-[60px]">
              Find the right internship for you.
            </h1>
            <p className="text-xl mt-4">
              Gain work experience & kickstart your career.
            </p>
            <Link
              to="/"
              className="py-1 mt-4 px-3 bg-blue-800 text-white w-fit flex flex-row items-center rounded"
            >
              Get Started
              <BsChevronRight className="ml-4" />
            </Link>
          </div>
          <img
            src={require("../assets/Hero.png")}
            alt="Hero"
            className="w-1/3"
          />
        </div>
        <div className="w-full flex-col py-12 bg-neutral-200  ">
          <h2 className="text-3xl text-blue-800 text-center font-bold">
            All you need to know about internship Application
          </h2>
          <div className="flex flex-row items-center  justify-around py-6 mx-auto w-full">
            <img
              src={require("../assets/information.png")}
              alt="Group 1"
              className="w-1/3"
            />
            <div >
              <h3 className="text-2xl font-bold">General Requirements</h3>
              <p className="flex flex-row font-semibold my-4">
                <BsCheck2Circle size="25" className="mr-4 text-blue-800" />A
                person applying must be a student of the University of Cape
                Coast.
              </p>
              <p className="flex flex-row font-semibold my-4">
                <BsCheck2Circle size="25" className="mr-4 text-blue-800" />
                Student must have completed at least 1 academic year at the
                University of Cape Coast.
              </p>
              <p className="flex flex-row font-semibold my-4">
                <BsCheck2Circle size="25" className="mr-4 text-blue-800" />
                Applicant must have read about the Place of internship.
              </p>
              <p className="flex flex-row font-semibold my-4 ">
                <BsCheck2Circle size="25" className="mr-4 text-blue-800" />
                Applicant must have updated profile details for easy
                application.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Homepage