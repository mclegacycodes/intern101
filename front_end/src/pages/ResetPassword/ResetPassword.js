import React from "react";
import Auth from "../../components/Auth";
import InputField from "../../components/InputField";

const ResetPassword =()=>{
    return(
        <Auth title="Reset password">
            <p>
                Enter your registered email for this account.<br/>
                A password reset link will be sent to the email account.
            </p>
            <InputField type="e-mail" placeholder="📩 Enter Email"/>
            <a className="link l">back to Sign in page</a>
            <button className="submit-btn r">Reset</button>
        </Auth>
    )
}
export default ResetPassword;