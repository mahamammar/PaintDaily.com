import React from 'react';
import Styled from './dashboard.module.css';
import SideBar from "./component/SideBar/sideBar";
import YourPurchase from "./component/SideBarComponent/YourPurchase/YourPurchase";
const buyerDashboard = () => {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <YourPurchase/>
            </div>
        </div>
    );
};

export default buyerDashboard;