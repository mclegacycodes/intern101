import React from "react";
import Auth from "../../components/Auth";
import InputField from "../../components/InputField";
import {Link} from "react-router-dom"

const ResetPassword =()=>{
    return(
        <Auth title="Reset password">
            <p>
                Enter your registered email for this account.<br/>
                A password reset link will be sent to the email account.
            </p>
            <InputField type="e-mail" placeholder="📩 Enter Email"/>
            <a className="link l">back to Sign in page</a>
            <Link to="/done"><button className="submit-btn r">Reset</button></Link>
        </Auth>
    )
}
export default ResetPassword;