import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";
import Style from './BuyerNavbar.module.css';
import user from "../../../assets/Images/user.png";
function BuyerNavbar (props) {
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        navigate("/login");
      }
    const handleRedirect = (e) =>{
        e.preventDefault();
        navigate("/dashboard");
    }
    const handleLogout = ()=>{
        localStorage.setItem("check",false);
        console.log(localStorage.getItem("check"));
        navigate("/BuyerLogin");
  
    }
    return (
        
                <div className={Style.Content}>
                {JSON.parse(localStorage.getItem("check")) === true?<img className={Style.Profile} src={user} alt={"paintdaily"}/>:null}
                  <div className={Style.dropdownContent}>
                      <ul style={{listStyle:'none'}}>
                            <li style={{paddingTop:'20px',marginLeft:'-32px'}}><Link style={{color: 'white'}} to={"/buyer_dashboard"}>Dashboard</Link></li>
                            <li style={{paddingTop:'20px',marginLeft:'-32px'}}><Link style={{color: 'white'}} to={"/"}>Buy Product</Link></li>
                          <li style={{paddingTop:'20px',marginLeft:'-32px'}}><button style={{color: 'white', backgroundColor:'transparent', border: 'None', fontSize: '18px'}} onClick={handleLogout}>LogOut</button></li>
                      </ul>
                  </div>
              </div>



    );
}

export default BuyerNavbar;