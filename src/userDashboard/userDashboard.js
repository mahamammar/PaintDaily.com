import React from 'react';
import Styled from './dashboard.module.css';
import SideBar from "./component/SideBar/sideBar";
import AddProducts from "./component/SideBarComponent/AddProducts/AddProducts";
const userDashboard = () => {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <AddProducts/>
            </div>
        </div>
    );
};

export default userDashboard;