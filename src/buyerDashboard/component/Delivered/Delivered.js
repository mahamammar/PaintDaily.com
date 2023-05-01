import React from 'react'
import SideBar from "../SideBar/sideBar";
import Styled from '../../dashboard.module.css';
import Deliver from '../SideBarComponent/Delivered/Delivered';
function Delivered() {
  return (
    <div className={Styled.App}>
            <div className={Styled.AppGlass}>
                <SideBar/>
                <Deliver/>
            </div>
        </div>
  )
}

export default Delivered