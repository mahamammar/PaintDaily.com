import React from 'react';
import Styled from "./CustomStyle.module.css"
function CustomStyle ({text,colour}) {
    return (
        <div className={Styled.CustomBtn} style={{backgroundColor:colour}}>
            <span style={{paddingLeft:'5px'}}>{text}</span>
        </div>
    );
}

export default CustomStyle;