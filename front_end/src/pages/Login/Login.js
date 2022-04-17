import React from "react";
import Auth from "../../components/Auth";
import InputField from "../../components/InputField";

const Login = () =>{
    return(
        <Auth title="Login">
            <InputField label="Email" type="email"/>
            <InputField label="Password" type="password"/>
            <div style={{display:"flex", justifyContent:'space-between', width:'80%', marginBottom: 20}}>
                <a className="link">Already have an account?</a>
                <a className="link">Forgot password?</a>
            </div>
            <button className="submit-btn">
                LOGIN
            </button>
        </Auth>
    )
}

export default Login;