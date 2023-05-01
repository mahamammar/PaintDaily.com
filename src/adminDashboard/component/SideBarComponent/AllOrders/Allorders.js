import React from 'react';
import AdminNavbar from "../../Navbar/AdminNavbar";
import Style from "../RegisterUsers/RegisterUsers.module.css";
import {DummyUser} from "../dumyUser";
import Avatar from "react-avatar";
import {useEffect, useState} from 'react';
import axios from 'axios';
function Allorders (props) {

    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);
    const [approved, setApproved] = useState([]);

    useEffect(()=>{
    axios({
        method: 'get',
        url: `http://localhost:9090/api/getBuyerProducts`
      }).then((res) => {
        setData(res.data);
        console.log("Checkout",res.data);
      }).catch((err) => {
        console.log(err);
      })
    },[]);

    const detaildata=(detail)=>{
        axios({
            method: 'get',
            url: `http://localhost:9090/api/getBuyerProductsDetail/${detail}`
          }).then((res) => {
            setDetail(res.data);
            console.log("Checkout",res);
          }).catch((err) => {
            console.log(err);
          })
    }
    const updateStatus=(id)=>{
        axios({
            method: 'patch',
            url: `http://localhost:9090/api/BuyerProductsDetailStatus/${id}`
          }).then((res) => {
            console.log("CheckoutUpdateStatus",res.data);
            setData(res.data);
          }).catch((err) => {
            console.log(err);
          })

        axios({
            method: 'POST',
            url: `http://localhost:9090/api/tranasctiondata`,
            data:{
                "address":data[0].address,
                "emailAddress":data[0].emailAddress,
                "fullName":data[0].fullName,
                "orderImage":data[0].orderImage,
                "orderPrice":data[0].orderPrice,
                "orderTitle":data[0].orderTitle,
                "phoneNumber":data[0].phoneNumber,
                "quantity":data[0].quantity,
                "userName":"AhmadYounas"
            }
          }).then((res) => {
            setApproved(res.data);
            console.log("CheckoutTransaction",res);
          }).catch((err) => {
            console.log(err);
          })
    } 

    return (
        <div>
            <AdminNavbar/>
            <div style={{marginTop:'50px', marginLeft:'60px', marginRight:"40px",overflowY: "scroll", overflowX:'hidden', height: '450px' }} className={Style.ScrollBar}>
                <div className="row" style={{marginLeft:'30px'}}>
                    <div className="col-lg-12 mb-4 col-md-6 col-sm-3">
                        <div className="card" style={{borderColor:'transparent',boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary" style={{fontSize:'x-large',fontWeight:'bold'}}>Pending Orders</h6>
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group mx-lg-3">
                                        {/* <input type="text" className="form-control bg-white border-0 small" placeholder="Search for..."
                                               aria-label="Search" aria-describedby="basic-addon2" style={{boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                            <div className={`${Style.tableResponsive}`}>
                                <table className="table align-items-center table-hover">
                                    <thead style={{backgroundColor:'#035403', color:'white'}}>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>UserName</th>
                                        <th>Product Image</th>
                                        <th>Product Title</th>
                                        <th>Order Price</th>
                                        <th>Details</th>
                                        <th>Approve</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(currentPosts=>(
                                        <tr>
                                            <td><a style={{color:'black'}} href="#">{currentPosts.id}</a></td>
                                            <td>{currentPosts.userName}</td>
                                            <td><Avatar src={currentPosts.orderImage} /></td>
                                            <td>{currentPosts.orderTitle}</td>
                                            <td>{currentPosts.orderPrice}</td>
                                            <td><button type="button" onClick={()=>detaildata(currentPosts.id)} className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button></td>
                                            <td><button type="button" onClick={()=>updateStatus(currentPosts.id)} className="btn btn-danger">Approve</button></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                         tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">View User</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1"
                                                   className="form-label">Full Name</label>
                                            <input type="text" style={{marginLeft:"22px",width:'400px'}} className="form-control" value={detail.fullName} id="exampleInputPassword1" readOnly={true}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email
                                                address</label>
                                            <input type="email" style={{marginLeft:"22px",width:'400px'}} value={detail.emailAddress} className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" readOnly={true}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1"
                                                   className="form-label">Phone Number</label>
                                            <input type="text" style={{marginLeft:"22px",width:'400px'}} className="form-control"  value={detail.phoneNumber} readOnly={true} id="exampleInputPassword1"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1"
                                                   className="form-label">Address</label>
                                            <input type="text" style={{marginLeft:"22px",width:'400px'}} className="form-control" value={detail.address} id="exampleInputPassword1" readOnly={true}/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button"data-bs-toggle="modal"  className="btn btn-primary">Close</button>
                                </div>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="sticky-footer " style={{marginTop: '98px', backgroundColor:'#984fc2', boxShadow:  "20px 20px 60px #bebebe -20px -20px 60px #ffffff", padding:'12px', height:'60px'}}>
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

export default Allorders;