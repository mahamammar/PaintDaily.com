import React, { useEffect, useState } from 'react'
import Avatar from "react-avatar";
import AdminNavbar from "../../../../adminDashboard/component/Navbar/AdminNavbar";
import { DummyUser } from "../../../../adminDashboard/component/SideBarComponent/dumyUser";
import Pagination from "../../../../adminDashboard/component/SideBarComponent/Pagination/Pagination";
import CustomButtom from "../../../../adminDashboard/component/SideBarComponent/CustomButton/CustomButtom";
import Styled from "./allproducts.module.css"
import { exteriorPaint } from '../../../../utils/categoryArray';
import { Link } from "react-router-dom";
import Style from "../../../../adminDashboard/component/SideBarComponent/RegisterUsers/RegisterUsers.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function AllProducts(props) {
    const post = useSelector((state)=>state.SellerPosts);
    const id = post.sellerId;
    console.log(post.sellerId);
    const [data, Setdata] = useState([]);
    const [getid, setId] =  useState([]);
    const [check, SetCheck] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      axios({
        method: 'GET',
        url: `http://localhost:9090/api/addproducts/${id}`,
      }).then((res) => {
        console.log("data",res.data);
        Setdata(res.data);
  
      }).catch((err) => {
        console.log(err);
      })
    }, []);
    
    const getId = (id) =>{
        setId(id);
        SetCheck(true);
    }
    const DeleteProduct = (e) =>{
        e.preventDefault();
                axios({
                method: 'DELETE',
                url: `http://localhost:9090/api/deleteproducts/${getid}`,
              }).then((res) => {
                console.log("res",res.data);
                SetCheck(false);
                toast.success('🦄 Successfully Add Product!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/allProducts");
          
              }).catch((err) => {
                console.log(err);
              })
    }
    return (
        <React.Fragment>
            <div>
                <AdminNavbar />
                <div style={{ marginTop: '50px', marginLeft: '60px', marginRight: "40px", overflowY: "scroll", overflowX: 'hidden', height: '450px', }} className={Styled.ScrollBar} >
                    <div className="row" style={{ marginLeft: '30px' }}>
                        <div className="col-lg-12 mb-4 col-md-6 col-sm-3">
                            <div className="card" style={{ borderColor: 'transparent', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h1 className="m-0 font-weight-bold text-primary" style={{ fontSize: 'x-large', fontWeight: 'bold' }}>All Products</h1>
                                    <form
                                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group mx-lg-3">
                                            {/* <input type="text" className="form-control bg-white border-0 small" placeholder="Search for..."
                                                aria-label="Search" aria-describedby="basic-addon2" style={{ boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }} />
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
                                        <thead className={"table-dark"} style={{ height: "50px" }}>
                                            <tr>
                                                <th>Sr.No</th>
                                                <th>Product Title</th>
                                                <th>Product Image</th>
                                                <th>Edit</th>
                                                <th>View Product</th>
                                                <th>Remove</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((dta,index) => (
                                                <tr key={index}>
                                                    <td><a style={{ color: 'black', paddingTop: "22px", fontSize: '20px', fontWeight: 'bold' }} href="#">{dta.id}</a></td>
                                                    <td style={{ paddingTop: '30px', paddingLeft: '22px', fontSize: '20px', fontWeight: 'bold' }}>{dta.productTitle}</td>
                                                    <td><Avatar src={dta.Img} size={50} /></td>
                                                    <td style={{ paddingTop: "30px" }}><button className={"btn btn-success"} type={"button"}><Link  to={`/edit/${dta.id}`}>Edit</Link></button></td>
                                                    <td style={{ paddingTop: "30px" }}><button className={"btn btn-success"} type={"button"}><Link to={`/View/${dta.id}`}>View</Link></button></td>
                                                    <td style={{ paddingTop: "30px" }}><button type="button" className="btn btn-danger" onClick={()=>getId(dta.id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Remove</button></td>
                                                     
                                                </tr>
                                                // <CustomButtom colour={ArrayColour[0].purple} text={"View"}/>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Model */}
                   
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
                                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div>
                                            Are you sure?
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit"  data-bs-dismiss="modal"
                                        aria-label="Close"  className="btn btn-danger" onClick={(e)=>DeleteProduct(e)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Model */}

                </div>
                <footer className="sticky-footer" style={{ boxShadow: "20px 20px 60px #bebebe -20px -20px 60px #ffffff", marginTop: '95px', backgroundColor: '#984fc2', padding: '12px', height: '60px' }}>
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span style={{ color: 'white' }}>Copyright &copy; {new Date().getFullYear()} - Developed by PaintDaily
                            </span>
                        </div>
                    </div>
                </footer>
                <ToastContainer/>
            </div>
        </React.Fragment>
    );
}

export default AllProducts;