import React from 'react';
import Styled from "../../dashboard.module.css";
import SideBar from "../SideBar/sideBar";
import Order from "../SideBarComponent/Order/Order";
import AllProducts from "../SideBarComponent/AllProducts/AllProducts";
function Orders (props) {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <Order/>
            </div>
        </div>
    );
}

export default Orders;