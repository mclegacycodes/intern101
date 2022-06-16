import React from "react";
import Mask from "../../components/Mask";
import ResetSent from "../../assets/reset-password-link.png"
import "./ResetPasswordConfirmed.modules.css"
import {Link} from "react-router-dom";

const ResetPasswordConfrimed = () =>{
    return(
        <Mask title="Check Your Mail!!!">
                <span>
                    A link for the password reset has been sent to the mail you
                     provided.Please Checkyour mail to reset password.
                </span>
                <img src={ResetSent} className="reset"/>
                <Link to="/login"><button className="submit-btn">
                    Back To Login
                </button></Link>
        </Mask>
    )
}

export default ResetPasswordConfrimed;