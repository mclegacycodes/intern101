import React from "react";
import "./Mask.modules.css"

const Mask = (props) =>{
    return(
            <div className="mask">
                <div className="mask-container">
                    <div className="pop-up">
                        <h1 className="title">
                            {props.title}
                        </h1>
                        {
                        props.children 
                        }
                    </div> 
                </div>
            </div>
    )
}
export default Mask;