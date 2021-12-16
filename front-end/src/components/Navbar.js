import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
        <nav className={`navbar navbar-expand-md navbar-primary nav-bg  sticky-top`}>
           <div className={`container-fluid`}>
              <div className={`navbar-brand`}>
                  <a className={`navbar-brand`} href="#">
                    <img src="static/images/ucc-logo.png"/>
                  </a>
                  <a className={`text-white`} href="/">INTERNSHIP UCC</a>
              </div>
           
             <button className={`navbar-toggler`} type="button" data-toggle="collapse" data-target=".navbarResponsive">
                 <span className={`navbar-toggler-icon bg-light`}></span>
             </button>
         
            <div className={`collapse navbar-collapse navbarResponsive`}>
                <div className={`mx-auto text-center`}>
                   <a className={`p-4 text-white`} href="#">DEPARTMENTS</a>
                   <a className={`p-4 text-white`} href="#">REVIEWS</a>
                   <a className={`p-4 text-white`} href="#">FAQS</a>
             </div>
              <ul className={`navbar-nav ml-auto`}>
                  <li className={`nav-item active`}>
                      <a className={`nav-link border border-light p-2  text-white m-2`} href="#">Create Account</a>
                  </li>
                  <li className={`nav-item`}>
                      <a className={`nav-link btn btn-light text-blue p-2 m-2`} href="#">Login</a>
                  </li>
              </ul>
          </div>
        </div>
      </nav> 
        )
    }
}

export default Navbar
