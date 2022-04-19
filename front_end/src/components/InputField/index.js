import React, {useState} from "react";
import './Input.modules.css'


const InputField = (props) =>{
    const [value, setValue] = useState("")
    const onValueChange = (e)=>{
        setValue(e.target.value)
    }
    return(
        <div className="input-container">
            <label className="label">{props.label}</label>
            <input value={value} onChange={onValueChange} type={props.type} className="input" placeholder={props.placeholder}/>
        </div>
    )
}

export default InputField;