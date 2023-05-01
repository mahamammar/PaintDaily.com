import React, {useState, useEffect} from 'react';
import AdminNavbar from "../../../adminDashboard/component/Navbar/AdminNavbar";
import Style from "../../../adminDashboard/component/SideBarComponent/RegisterUsers/RegisterUsers.module.css";
import axios from 'axios';
function Seller (props) {
    let count = 1;
        const [Seller, SetSeller] = useState([]);
        const [modalData, SetModalData] = useState([]);
        console.log(Seller.sellerId);
    useEffect(() => {
        axios({
          method: 'GET',
          url: `http://localhost:9090/api/AllSignupUser`,
        }).then((res) => {
           console.log("res",res.data);
          SetSeller(res.data);
        }).catch((err) => {
          console.log(err);
        })
      }, []);


      const showDetailByID = (id) =>{
        axios({
            method: 'GET',
            url: `http://localhost:9090/api/getSellerByID/${id}`,
          }).then((res) => {
            // console.log("res",res.data);
            SetModalData(res.data);
      
          }).catch((err) => {
            console.log(err);
          })
      }

      const DeleteByID = (id) =>{
        axios({
            method: 'DELETE',
            url: `http://localhost:9090/api/DeleteByID/${id}`,
          }).then((res) => {
            // console.log("res",res.data);
            SetSeller(res.data);
      
          }).catch((err) => {
            console.log(err);
          })
          axios({
            method: 'DELETE',
            url: `http://localhost:9090/api/DeleteSellerProductByID/${Seller.id}`,
          }).then((res) => {
            // console.log("res",res.data);
            SetSeller(res.data);
      
          }).catch((err) => {
            console.log(err);
          })
      }

    return (
        <div >
            <AdminNavbar/>

            <div style={{marginTop:'50px', marginLeft:'60px', marginRight:"40px",overflowY: "scroll", overflowX:'hidden', height: '450px', }} className={Style.ScrollBar}>
                <div>
                    <div className="row" style={{marginLeft:'30px'}}>
                        <div className="col-lg-12 mb-4 col-md-6 col-sm-3">
                            <div className="card" style={{borderColor:'transparent',boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary" style={{fontSize:'x-large',fontWeight:'bold'}}> List of Registered Sellers</h6>
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
                                        <thead style={{backgroundColor:'#083cc4', color:'white'}}>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>User Name</th>
                                            <th>View Details</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Seller.map(currentPosts=>(
                                            <tr>
                                                <td><a style={{color:'black'}} href="#">{count++}</a></td>
                                                <td>{currentPosts.username}</td>
                                                <td><button type={"button"} className={"btn btn-secondary"}  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>showDetailByID(currentPosts.id)}>View Details</button></td>
                                                <td><button type="button" className="btn btn-danger" onClick={()=>DeleteByID(currentPosts.id)}>Remove</button></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
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
                                            <input type="text" style={{marginLeft:"22px",width:'400px'}} className="form-control" value={modalData.username} id="exampleInputPassword1" readOnly={true}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email
                                                address</label>
                                            <input type="email" style={{marginLeft:"22px",width:'400px'}} value={modalData.email} className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" readOnly={true}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1"
                                                   className="form-label">Phone Number</label>
                                            <input type="text" style={{marginLeft:"22px",width:'400px'}} className="form-control"  value={modalData.phoneNumber} readOnly={true} id="exampleInputPassword1"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1"
                                                   className="form-label">Address</label>
                                            <input type="text" style={{marginLeft:"22px",width:'400px'}} className="form-control" value={modalData.address} id="exampleInputPassword1" readOnly={true}/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Close</button>
                                </div>
                            </div>
                        </div>
                                 </div>
                            </div>
                        </div>
                    </div>


                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                         tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Delete User</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                             className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                             viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path
                                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                        <div>
                                            Are you sure?
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="sticky-footer " style={{marginTop:'90px', backgroundColor:'#984fc2', boxShadow:  "20px 20px 60px #bebebe -20px -20px 60px #ffffff", padding:'12px', height:'60px'}}>
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
export default Seller;