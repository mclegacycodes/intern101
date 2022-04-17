import React from "react";
import Auth from "../../components/Auth";
import InputField from "../../components/InputField";

const CreateAccount = () =>{
    return(
        <Auth title="Create your Account">
            <div className="username">
            <InputField label="First Name" type="text"/>
            <InputField label="Last Name" type="text"/>
            </div>
            <InputField label="Index Number" type="text"/>
            <InputField label="Student E-mail" type="e-mail"/>
            <InputField label="Password" type="password"/>
            <InputField label="Confirm Password" type="password"/>
            <button className="submit-btn">
                Create Account
            </button>
        </Auth>
    )
}

export default CreateAccount;