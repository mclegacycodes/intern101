import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
            <div>
               <nav class="navbar navbar-expand-md navbar-primary nav-bg  sticky-top">
        <div class="container-fluid">
            <div class=" p-2">
                <a class="navbar-brand " href="#">
                    <img src="static/images/ucc-logo.png"/>
                </a>
                <a class="text-white" href="#">INTERNSHIP UCC</a>
            </div>
           
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarResponsive">
              <span class="navbar-toggler-icon bg-light"></span>
          </button>
         
          <div class="collapse navbar-collapse navbarResponsive" >
            <div class=" mx-auto text-center">
                <a class="p-4 text-white" href="#">DEPARTMENTS</a>
                <a class="p-4 text-white" href="#">REVIEWS</a>
                <a class="p-4 text-white" href="#">FAQS</a>
           </div>
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                      <a class="nav-link border border-light p-2  text-white m-2" href="#">Create Account</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link btn btn-light text-blue p-2 m-2" href="#">Login</a>
                  </li>
              </ul>
          </div>
        </div>
      </nav> 
            </div>
        )
    }
}

export default Navbar
