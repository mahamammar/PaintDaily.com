import React, {useState} from 'react';
import Avatar from "react-avatar";
import AdminNavbar from "../../../../adminDashboard/component/Navbar/AdminNavbar";
import {DummyUser} from "../../../../adminDashboard/component/SideBarComponent/dumyUser";
import Pagination from "../../../../adminDashboard/component/SideBarComponent/Pagination/Pagination";
import Styled from "../AllProducts/allproducts.module.css";
import Timer from '../../../Timer/Timer';
import Style from "../../../../adminDashboard/component/SideBarComponent/RegisterUsers/RegisterUsers.module.css";
import {exteriorPaint} from "../../../../utils/categoryArray";
function YourPurchase (props) {
    return (
        <div>
            <AdminNavbar/>
            <div style={{marginTop:'50px', marginLeft:'60px', marginRight:"40px",overflowY: "scroll", overflowX:'hidden', height: '450px',}} className={Styled.ScrollBar}>
                <div className="row" style={{marginLeft:'30px'}}>
                    <div className="col-lg-12 mb-4 col-md-6 col-sm-3">
                        <div className="card" style={{borderColor:'transparent',boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary" style={{fontSize:'x-large',fontWeight:'bold'}}> Your Purchase</h6>
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group mx-lg-3">
                                        <input type="text" className="form-control bg-white border-0 small" style={{boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}} placeholder="Search for..."
                                               aria-label="Search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={`${Style.tableResponsive}`}>
                                <table className="table align-items-center table-hover">
                                    <thead style={{backgroundColor:'#ffa700', color:'white'}}>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Product Name</th>
                                        <th>Product Image</th>
                                        <th>Quantity</th>
                                        <th>Prices</th>
                                        <th>status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {DummyUser.map(currentPosts=>(
                                        <tr>
                                            <td><a style={{paddingTop:'22px',color:'black',fontSize:'20px', fontWeight:'bold'}} href="#">{currentPosts.key}</a></td>
                                            <td style={{paddingTop:'30px',fontSize:'20px', fontWeight:'bold'}}> {currentPosts.desc}</td>
                                            <td><Avatar src={currentPosts.Img} size={70} /></td>
                                            <td style={{paddingTop:'30px',fontSize:'20px', fontWeight:'bold'}}>{currentPosts.purchased}</td>
                                            <td style={{paddingTop:'30px',fontSize:'20px', fontWeight:'bold'}}>{currentPosts.price}</td>
                                            <td style={{paddingTop:'30px',fontSize:'20px', fontWeight:'bolder'}}><p style={{color:"green"}}>In-Progress</p></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="sticky-footer" style={{marginTop:'20px',boxShadow:  "20px 20px 60px #bebebe -20px -20px 60px #ffffff",backgroundColor:'#984fc2', padding:'12px', height:'60px'}}>
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
            <span style={{color:'white'}}>Copyright &copy; {new Date().getFullYear()} - Developed by PaintDaily
            </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default YourPurchase;