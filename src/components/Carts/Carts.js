import React from 'react';
import Style from './cart.module.css';
import {Link} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getPrice } from '../../features/Post/post';
import {useNavigate} from "react-router-dom"; 
import { getSubTotal } from '../../features/Post/post';
function Carts (props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [Checkout, setCheckout] = useState([]);
    const posts = useSelector(state => state.posts);
    const id = posts.id;


    console.log(id)
    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://localhost:9090/api/getcart/${id}`
          }).then((res) => {
            console.log(res);
            setData(res.data)
          }).catch((err) => {
            console.log(err);
          })
    },[]);

    const handleDeleteProduct = (id) =>{
        console.log("ID :"+id);
        axios({
            method:"delete",
            url:`http://localhost:9090/api/deleteProduct/${id}`
        }).then((res)=>{
            setData(res.data);
            
        }).catch((err)=>{
            console.log(err);
        })
    }

   const total =  data.reduce((total, item)=>total+(item.productPrice),0);
   console.log(total);
   const StoreCart = () =>{
    dispatch(
        getSubTotal(total)
    );
}

    return (
        <main className={Style.checkout_page}>
            <Navbar/>
            <div className={Style.cart_prod_list_heading}>
                <h3>Product Image</h3>
                <h3>Product Title</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
            </div>
            {data===null?<h1>NoItem in the Cart</h1>:data.map((item)=>(  

                 <div className={Style.cart_prod_list}>
                 <div className={Style.cart_prod}>
                     <img className={Style.cart_prod_img} src={item.productImage}/>
                     <p style={{fontWeight:'600'}} className={Style.desc}>{item.productTitle}</p>
                     <p  style={{fontWeight:'600'}} className={Style.cart_prod_q}>{item.productQuantity}</p>
                     <p  style={{fontWeight:'600'}} className={Style.cart_prod_q}>{item.productPrice}</p>
                 </div>
                 <button className={Style.remove} type="submit" onClick={()=>handleDeleteProduct(item.id)}>Remove</button>
             </div>
            ))}
        <span className={Style.subtotal}>Total: {total} Rs </span>
        <button className={Style.checkout_btn} onClick={StoreCart}><Link style={{color: 'white'}} to="/Checkout" >Check Out</Link></button>
        </main>
        // {item.productPrice * item.productQuantity} 
    );
}

export default Carts;