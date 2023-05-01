import React, { useState, useEffect } from 'react';
import AdminNavbar from "../../Navbar/AdminNavbar";
import Style from "../RegisterUsers/RegisterUsers.module.css";
import Avatar from "react-avatar";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Categories () {
    let count = 1;
    const [Category, SetCategory] = useState([]);
    const [change, SetChange] = useState({
        categoryImage:'',
        categoryName:''
    });
    
    useEffect(() => {
        axios({
          method: 'GET',
          url: `http://localhost:9090/api/getCategory`,
        }).then((res) => {
          console.log("res",res.data);
          SetCategory(res.data);
    
        }).catch((err) => {
          console.log(err);
        })
      }, []);    
      
        const handleSubmit = (event)=> {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:9090/api/addCategory',
            data:{
                ...change
            }    
        }).then((res)=>{
            console.log(res.status);
            if(res.status===200){
                toast.success('Add SuccessFully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

                SetCategory(res.data);
                SetChange([]);
        }).catch((err)=>{
            console.log(err);
        })
    }


    const handleproductColorImageChange = (e) =>{
        let data = new FormData();
        const file = e.target.files[0];
        console.log(file);
        if(file){
          console.log("File");
          data.append("image",file);
          console.log("formdata",...data);
          axios({
            method: 'POST',
            url: 'http://localhost:9090/api/upload',
            data,
            headers:{
              "Content-Type":"multipart/form-data"
            }
          }).then((res) => {
              console.log("path",res.data.fileName);
              change.categoryImage="http://localhost:9090/"+res.data.fileName;
          }).catch((err) => {
            console.log(err);
          })
        }
      }
    const handleChange = (event) =>{
        SetChange({
            ...change,
            [event.target.name]: event.target.value
        })  
    }
    const deleteCategory = (id) =>{
        axios({
            method: 'DELETE',
            url: `http://localhost:9090/api/deleteCategory/${id}`,
          }).then((res) => {
            console.log("res",res);
            SetCategory(res.data);
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
                            <h6 className="m-0 font-weight-bold text-primary" style={{fontSize:'x-large',fontWeight:'bold'}}> List of Categories</h6>
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group mx-lg-3">
                                </div>
                            </form>
                        </div>
                        <div className={`${Style.tableResponsive}`}>
                            <table className="table align-items-center table-hover">
                                <thead style={{backgroundColor:'#fc2b2b', color:'white'}}>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Category Name</th>
                                    <th>Category Image</th>
                                    <th >Remove Category</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Category.map(currentPosts=>(
                                    <tr>
                                        <td><a style={{color:'black',paddingTop:'30px'}} href="#">{count++}</a></td>
                                        <td style={{paddingTop:'30px'}}>{currentPosts.categoryName}</td>
                                        <td><Avatar src={currentPosts.categoryImage} size={70} /></td>
                                        <td><button className={"btn btn-danger"} onClick={()=>deleteCategory(currentPosts.id)}>Remove Category</button></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div style={{display:'flex', marginLeft:'100px', justifyContent:'flex-start', marginTop:'10px'}}>
                <button className={"btn btn-primary" } type={"button"} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Add Category</button>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Upload Image</label>
                                    <input 
                                     style={{marginLeft:"22px"}}
                                        type="file" 
                                        accept="image/png, image/jpeg" 
                                        className={`form-control-file`} 
                                        id="formFile" 
                                        name={"categoryImage"}
                                        onChange={handleproductColorImageChange}
                                        required={true}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Image Name </label>
                                    <input type="text"
                                        style={{marginLeft:"22px", width:'400px'}}
                                        className="form-control"
                                        name="categoryName"
                                        onChange={handleChange}
                                        id="exampleInputPassword1"
                                        placeholder={"Enter Image Name"}
                                        value={Category.name}
                                        />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={handleSubmit} className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="sticky-footer" style={{marginTop:'49px', backgroundColor:'#984fc2',boxShadow:  "20px 20px 60px #bebebe -20px -20px 60px #ffffff", padding:'12px', height:'60px'}}>
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
            <span style={{color:'white'}}>Copyright &copy; {new Date().getFullYear()} - Developed by PaintDaily
            </span>
                    </div>
                </div>
            </footer>
            <ToastContainer/>
        </div>
    );
}

export default Categories;