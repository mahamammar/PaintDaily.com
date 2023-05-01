import React from 'react';
import Style from "../CustomButton/CustomButton.module.css";
import "react-popupbox/dist/react-popupbox.css"
import {useNavigate} from "react-router-dom";
function CustomButtom ({colour, text}) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
        <div>
            <button className={Style.Bottn} onClick={()=>{navigate("/edit")}} style={{backgroundColor:colour}} >{text}</button>
        </div>
        </React.Fragment>
    );
}

export default CustomButtom;