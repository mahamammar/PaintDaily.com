import React from 'react';
import Styled from '../../dashboard.module.css';
import Setting from "../SideBarComponent/Setting/Setting";
import SideBar from "../SideBar/sideBar";
function Settings (props) {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <Setting/>
            </div>
        </div>
    );
}

export default Settings;