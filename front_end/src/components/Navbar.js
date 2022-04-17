import React from "react";
import logo from './../assets/ucc-logo.png'

const Navbar = () =>{
    return(
        <div className="navbar">
                <div>
                    <img width="40" src={logo}/>
                    <span>internship ucc</span>
                </div>
                <div className="tabs">
                    <a href="">DEPARTMENTS</a>
                    <a href="">REVIEW</a>
                    <a href="">FAQs</a>
                </div>

                <div className="buttons">
                    <button className="btn">CREATE ACCOUNT</button>
                    <button className="btn full">LOGIN</button>
                </div>
        </div>
    )
}

export default Navbar;