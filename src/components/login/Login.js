import React, {useState,useEffect} from 'react'
import Style from './Login.module.css';
import {Link, useNavigate} from "react-router-dom";
import Navbar from '../navbar/Navbar';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postAdded ,getAddress,getPassword,getEmail,getUsername,getSellerId} from '../../features/sellerPost/sellerPost';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const [Seller, SetSeller] = useState({
        email:'',
        password:''
    });
    const [formError, SetFormError] = useState({
        email:'',
        password:''
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const handlePostSubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:9090/api/sellerlogin',
            data: {
                ...Seller
            }
        }).then((res) => {
            // console.log(JSON.parse(res.data));
                console.log("responseData",res.data);
                if(res.data ===""){
                    console.log("Inside if");
                    toast.error('👤 User Not Found!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    // navigate("/signUp");
                }
                if(res.data.checkSellerId === 1){
                    Dispatch(
                        postAdded(res.data.id)
                    )
                    Dispatch(
                        getAddress(res.data.address)
                    )
                    Dispatch(
                        getPassword(res.data.password)
                    )
                    Dispatch(
                        getEmail(res.data.email)
                    )
                    Dispatch(
                        getUsername(res.data.username)
                    )
                    Dispatch(
                        getSellerId(res.data.sellerId)
                    )
                        navigate("/dashboard");
                }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleChange = (event) => {
        console.log(event.target.value);
        SetSeller({
            ...Seller,
            [event.target.name]: event.target.value

        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        SetFormError(validate(Seller))
        setIsSubmit(true);
        if(Object.keys(formError).length === 0 && isSubmit){
            handlePostSubmit();
        }
    }
    useEffect(()=>{
        console.log(formError);
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log(formError);
        }

    })

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


  return (
      <React.Fragment>
      <Navbar/>
    <main className={Style.main}>
    <div className={Style.container}>
            <div className={Style.form}>
                <h2>Login</h2>
                                <form onSubmit={(event)=>{handleSubmit(event)}}>
                                    <label className={Style.form_lbl} htmlFor="email">Email Address: </label>
                                    <input className={Style.form_input} name="email" type="email" onChange={handleChange} placeholder="Email" />
                                    <p style={{color: 'red', marginLeft: '220px', marginTop: '10px'}}>{formError.email}</p>
                                  
                                        {/* <div className={Style.err_msgs}>{formError.email}</div> */}
                                    <br />
                                    <label className={Style.form_lbl} htmlFor="email">Password: </label>
                                    <input className={Style.form_input} name="password" type="password" onChange={handleChange} placeholder="Password" />
                                        <p style={{color: 'red', marginLeft: '220px', marginTop: '10px'}}>{formError.password}</p>

                                    <button className={Style.submit_btn} type="submit">Submit</button>
                                    <div className={Style.create_acc}>
                                    <p>Don't have an account?</p><Link to='/signup' style={{color: '#0066f2', fontSize: '17px', marginLeft: '5px'}} >Create Account</Link>
                                    </div>
                                    <div className={Style.create_acc}>
                                    <Link style={{color: '#0066f2', fontSize: '17px', marginLeft: '70px', marginTop: '-14px'}} to='/forgotpassword'>Forgot Password?</Link>
                                    </div>
                                </form>
            </div>
    </div>
    <ToastContainer/>
    </main>
      </React.Fragment>
  )
}
export default Login;