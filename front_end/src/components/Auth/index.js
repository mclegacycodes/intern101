import React from "react";
import students_img from './../../assets/students.png'
import './Auth.modules.css'

const Auth = (props) =>{
    return(
        <div className="auth">
            <div className="container">
                <img className="img" src={students_img}/>
                <div className="form">
                    <h1 className="title">{props.title}</h1>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth;