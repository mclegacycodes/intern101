import React from "react";
import Mask from "../../components/Mask/index"
import InputField from "../../components/InputField";
import "./ApplicationForm.css";

const ApplicationForm =()=>{
    return(
        <Mask title="Application Form">
            <div className="form">
                <InputField label="Full Name" placeholder="John Doe"/>
                <InputField label="Email" placeholder="example@stu.ucc.edu.gh"/>
                <div className="inline">
                    <div>
                        <InputField label="Programme" placeholder="Bsc.Maths &amp; Art"/>
                        <InputField label="Index Number" placeholder="ps/itc/18/2000"/>
                    </div>
                    <div>
                        <div className="input-container">
                        <label className="label">Level</label>
                        <select className="input">
                            <option>300</option>
                            <option>400</option>
                            <option>500</option>
                        </select>
                        </div>
                        <InputField label="Application ID" placeholder="KT123456"/>
                    </div>
                    
                </div>
                <InputField label="Office of Internship" placeholder="Directorate of ICT"/>
                <button type="submit" className="submit-btn centered">SUBMIT</button>
            </div>
            
        </Mask>
    )
}
export default ApplicationForm;