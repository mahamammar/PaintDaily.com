import React, {useState,useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import Style from './AdminLogin.module.css';
import adminDashboard from '../adminDashboard/adminDashboard';
import Navbar from '../components/navbar/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminLogin() {
const [formError, SetFormError] = useState({
  email:'',
  password:''
});

const [isSubmit, setIsSubmit] = useState(false);


const navigate = useNavigate();
    const Dispatch = useDispatch();
    const [Seller, SetSeller] = useState({
        email:'',
        password:''
    });

const handleChange = (event) => {
  console.log(event.target.value);
  SetSeller({
      ...Seller,
      [event.target.name]: event.target.value

  });
}
const validate = (value) =>{
  const errors={}
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!value.password){
      errors.password="Password is required"
  }
  if(!value.email){
      errors.email="Email is required"
  }
  return errors;

}

console.log("Error", formError);
const handleSubmit = (e) =>{
  console.log("Insidefunction");
  e.preventDefault();
  SetFormError(validate(Seller))
  setIsSubmit(true);
  if(Object.keys(formError).length === 0 && isSubmit){
      handlePostSubmit();
  }
}
const handlePostSubmit = () => {
  console.log("inside Submitted");
  axios({
      method: 'post',
      url: 'http://localhost:9090/api/Adminlogin',
      data: {
          ...Seller
      }
  }).then((res) => {
      console.log("Response",res);
      if(res.data ===""){
        toast.error('👤 User Not Found!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
        navigate("/adminDashboard")  
      }
  }).catch((err) => {
      console.log(err);
  })
}
  return (
    <React.Fragment>
    <Navbar/>
  <main className={Style.main}>
  <div className={Style.container}>
          <div className={Style.form}>
              <h2>Admin Login</h2>
                <form onSubmit={(event)=>{handleSubmit(event)}}>
                                  <label className={Style.form_lbl} htmlFor="email">Email Address: </label>
                                  <input className={Style.form_input} name="email" type="email" onChange={handleChange} placeholder="Email" required />
                                  <p style={{color: 'red', marginLeft: '220px', marginTop: '10px'}}>{formError.email}</p>
                                
                                      {/* <div className={Style.err_msgs}>{formError.email}</div> */}
                                  <br />
                                  <label className={Style.form_lbl} htmlFor="email">Password: </label>
                                  <input className={Style.form_input} name="password" type="password" onChange={handleChange} placeholder="Password" />
                                  <p style={{color: 'red', marginLeft: '220px', marginTop: '10px'}}>{formError.password}</p>
                                      {/* <div className={Style.err_msgs}>{formError.password}</div> */}

                                  <button className={Style.submit_btn} type="submit">Login</button>
                </form>
          </div>
  </div>
  <ToastContainer/>
  </main>
    </React.Fragment>
  
  )
}
export default AdminLogin;
