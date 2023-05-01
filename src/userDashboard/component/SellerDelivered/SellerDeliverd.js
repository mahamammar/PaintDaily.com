import React from 'react'
import Styled from '../../dashboard.module.css';
import SideBar from "../SideBar/sideBar";
import DeliveredOrder from '../SideBarComponent/DeliveredOrder/DeliveredOrder';
function SellerDeliverd() {
  return (
    <div className={Styled.App}>
    <div className={Styled.AppGlass}>
        <SideBar/>
        <DeliveredOrder/>
    </div>
</div>
  )
}

export default SellerDeliverd