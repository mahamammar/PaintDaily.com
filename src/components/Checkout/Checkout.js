import React, {useEffect, useState} from 'react';
import '../login/Login.js';
import Style from './Checkout.module.css';
import Navbar from '../navbar/Navbar.js';
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems, total }) {
  const navigate = useNavigate();
    const posts = useSelector(state => state.posts)
    const [data, setData] = useState([]);
    const id = posts.id;
    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://localhost:9090/api/getcart/${id}`
          }).then((res) => {
            setData(res.data);
            console.log("Checkout",res);
          }).catch((err) => {
            console.log(err);
          })
    },[]);


    const newArray = data.map(item=>{
      return{
        address:item.buyerAccountDetail.address,
        emailAddress:item.buyerAccountDetail.email,
        fullName:item.buyerAccountDetail.fullName,
        userName:item.buyerAccountDetail.username,
        phoneNumber:item.buyerAccountDetail.phoneNumber,
        orderTitle:item.productTitle,
        quantity:item.productQuantity,
        orderImage:item.productImage,
        orderPrice:item.productPrice,
        buyerAccountId:item.buyerAccountDetail.buyerAccountId,
        sellerId:item.sellerId

      }
    })

    
    const deletePostItem = () => {
      fetch('http://localhost:9090/api/buyerProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArray)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
          axios({
            method: 'delete',
            url: `http://localhost:9090/api/deletecart/${id}`
          }).then((res) => {
            toast.success('👤 User Already Exist!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          navigate("/");

          }).catch((err) => {
            console.log(err);
          })
    }

    console.log("id", id);

  return (
      <React.Fragment>
          <Navbar/>
    <main className={Style.main}>
    <div className={Style.container}>
            <div className={Style.form}>
                <h2>CheckOut</h2>
                {/* <form onSubmit={handleCheckout}> */}
                <div className={Style.input_field} style={{marginBottom: "25px"}}>
                <h2 style={{fontSize: '26px', marginBottom: '40px', width: '500px', marginLeft: '-150px'}}>Shipping Address</h2>

                    </div>
                    <p className={Style.shippingAddress}>{posts.address}</p>

                    <div className={Style.input_field} style={{marginBottom: "25px"}}>
                    <h2  style={{fontSize: '26px', marginBottom: '40px'}}>Order Total:</h2>
                    
                    </div>
                    <p className={Style.shippingAddress}> {posts.SubTotal} </p>
                

                    {/* {formError.subcribed?<div><span style={{color:"red", paddingLeft:'50px'}}>{formError.subcribed}</span></div>:null} */}
                    <br />
                    <button  onClick={deletePostItem} className={Style.signup_btn}>Place Order</button>
                    
                {/* </form> */}
            </div>
            </div>
            <ToastContainer/>
            </main>
      </React.Fragment>
  )
}

export default Checkout