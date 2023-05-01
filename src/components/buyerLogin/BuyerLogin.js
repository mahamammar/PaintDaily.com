import React, {useState} from 'react'
import Style from './BuyerLogin.module.css';
import {Link, useNavigate} from "react-router-dom";
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded, getAddress, getPassword, getEmail, getUsername, getBuyerAccountID,getQuantity } from '../../features/Post/post';
import { useEffect } from 'react';

function Login() {
    const Dispatch = useDispatch();
    const posts = useSelector((state)=>state.posts);
    const id = posts.id;
    const navigate = useNavigate();
    const [Seller, SetSeller] = useState({
        email:'',
        password:''
    });
    const [Checkout, setCheckout] = useState([]);
    const [formError, SetFormError] = useState({
        email:'',
        password:''
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const handlePostSubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:9090/api/buyerlogin',
            data: {
                ...Seller
            }
        }).then((res) => {
            console.log("Response",res);
            if (res.status === 200)
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
                getBuyerAccountID(res.data.buyerAccountId)
            )
                navigate("/")
        }).catch((err) => {
            console.log(err);
        })
        axios({
            method: 'get',
            url: `http://localhost:9090/api/getcart/${id}`
          }).then((res) => {
            console.log("checlout",res);
            setCheckout(res.data)
            console.log();
            if(res.status === 200){
                Dispatch(
                    getQuantity(res.data.length)
                )
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

    // function validateEmail(value) {
    //     let error;
    //     if (!value) {
    //       error = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    //       error = 'Invalid email address';
    //     }
    //     return error;
    //   }
  return (
      <React.Fragment>
      <Navbar/>
    <main className={Style.main}>
    <div className={Style.container}>
            <div className={Style.form}>
                <h2>Login</h2>
                                <form onSubmit={(event)=>{handleSubmit(event)}}>
                                    <label className={Style.form_lbl} htmlFor="email">Email Address: </label>
                                    <input className={Style.form_input} name="email" value={Seller.email}
                                    onChange={handleChange}
                                    placeholder="Email" />
                                    <p style={{color: 'red', marginLeft: '220px', marginTop: '10px'}}>{formError.email}</p>
                                    <br />

                                    <label className={Style.form_lbl} htmlFor="password">Password: </label>
                                    <input className={Style.form_input} name="password" value={Seller.password}
                                    type="password"
                                    onChange={handleChange}
                                    placeholder="Password" />
                                    <p style={{color: 'red', marginLeft: '220px', marginTop: '10px'}}>{formError.password}</p>
                                    <button className={Style.submit_btn} type="submit">Submit</button>
                                    <div className={Style.create_acc}>
                                    <p>Don't have an account?</p><Link style={{color: '#0066f2', fontSize: '17px', marginLeft: '5px'}} to='/BuyerAccount'>Create Account</Link>
                                    </div>
                                    <div className={Style.create_acc}>
                                    <Link style={{color: '#0066f2', fontSize: '17px', marginLeft: '70px', marginTop: '-14px'}} to='/forgotpassword'>Forgot Password?</Link>
                                    </div>
                                </form>
                          
            </div>
    </div>
    </main>
      </React.Fragment>
  )
}
export default Login;