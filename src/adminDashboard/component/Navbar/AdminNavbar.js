import React from 'react';
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';
import Style from './adminNavbar.module.css'
function AdminNavbar (props) {

    const handleLogout = ()=>{
        localStorage.setItem("check",false);
        console.log(localStorage.getItem("check"));
    } 
    return (
        <nav className="navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-end" style={{marginLeft:'35px'}}>

            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                </li>
                <li className="nav-item dropdown no-arrow ">
                    <div className="dropdown">
                        <Avatar  name={"B"} size={"50px"} round={true} style={{marginRight:'20px'}} />

                <div className={Style.Content}>
                  <div className={Style.dropdownContent}>
                      <ul style={{listStyle:'none'}}>
                          <li style={{paddingTop:'35px',marginLeft:'-32px'}}><button onClick={handleLogout} className={Style.LoginBtn}>LogOut</button></li>
                          <li style={{paddingTop:'15px',marginLeft:'-32px'}}><Link to={"/dashboard"}><button className={Style.LoginBtn}> Seller Dashboard</button> </Link></li>
                          <li style={{paddingTop:'15px',marginLeft:'-32px'}}><Link to={"/buyer_dashboard"}><button className={Style.LoginBtn}> Buyer Dashboard</button> </Link></li>
                      </ul>
                  </div>
              </div>

                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><a className="dropdown-item active" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </li>

            </ul>
        </nav>


    );
}

export default AdminNavbar;