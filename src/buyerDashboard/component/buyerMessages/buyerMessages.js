import React from 'react';
import Styled from "../../dashboard.module.css";
import chat from "../SideBarComponent/Chat/Chat";
import SideBar from "../SideBar/sideBar";
function BuyerMessages (props) {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <chat/>
            </div>
        </div>
    );
}

export default BuyerMessages;