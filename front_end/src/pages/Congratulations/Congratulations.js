import React from "react";
import Mask from "../../components/Mask";
import submited from "../../assets/application-submitted.png"

const Congratulations = () =>{
    return(
        <Mask title="congratulations!!!">
                <img src={submited}  className="image"/>
                <p className="text">
                    Your application has been submitted pending approval.
                    Shortlisted Applicants will be notified soon.
                </p>
                <button className="submit-btn r">
                    Finish
                </button>
        </Mask>
    )
}

export default Congratulations;