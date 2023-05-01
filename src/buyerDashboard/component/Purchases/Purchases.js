import React from 'react';
import Styled from '../../dashboard.module.css';
import YourPurchase from "../SideBarComponent/YourPurchase/YourPurchase";
import SideBar from "../SideBar/sideBar";
import AddProducts from "../SideBarComponent/AddProducts/AddProducts";
function Purchases (props) {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <YourPurchase/>
            </div>
        </div>
    );
}

export default Purchases;