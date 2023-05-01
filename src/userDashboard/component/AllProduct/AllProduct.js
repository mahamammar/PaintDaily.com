import React from 'react';
import SideBar from "../SideBar/sideBar";
import Styled from "../../dashboard.module.css";
import AllProducts from "../SideBarComponent/AllProducts/AllProducts";
function AllProduct (props) {
    return (
        <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <AllProducts/>
            </div>
        </div>
    );
}
export default AllProduct;