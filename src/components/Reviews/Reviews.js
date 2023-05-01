import React from 'react'
import Style from './Reviews.module.css';
import Navbar from '../navbar/Navbar.js';
import Footer from "../footer/Footer";
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Reviews = () => {

  const posts = useSelector(state => state.posts);
  const navigate = useNavigate();
  console.log(posts.id);
  const [AddProduct, SetAddProduct] = useState({
    rating: '',
    image: '',
    review: '',
    username:''
  });
  const param = useParams();

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: `http://localhost:9090/api/getbyid/${param.id}`,
  //   }).then((res) => {
  //     console.log(res.data);
  //     SetAddProduct(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:9090/api/postReview',
      data:{
        ...AddProduct,
        product_id: param.id,
        buyer_id:posts.id
      }
    }).then((res) => {
      toast.success('Reviews submitted', {
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

    axios({
      method: 'POST',
      url: `http://localhost:9090/api/addproductRating/${param.id}`,
      data:{rating:AddProduct.rating}
    }).then((res) => {
      console.log("ratingStore",res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleChange = (event) => {
    SetAddProduct({
      ...AddProduct,
      [event.target.name]: event.target.value
    })
  }

  const handleproductColorImageChange = (e) =>{
    let data = new FormData();
    const file = e.target.files[0];
    console.log(file);
    if(file){
      console.log("File");
      data.append("image",file);
      console.log("formdata",data);
      axios({
        method: 'POST',
        url: 'http://localhost:9090/api/upload',
        data,
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }).then((res) => {
          console.log(res);
          AddProduct.image="http://localhost:9090/"+res.data.fileName;
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  return (
<main className={Style.main}>
    <Navbar/>
    <h2 className={Style.review_heading}>Post a Review</h2>
    <div className={Style.give_review}>
    {/* <label className={Style.type_review}>Select Rating</label> */}


    <div className="form-group" style={{width:'30%'}}>
                <label for="exampleFormControlSelect1" onChange={handleChange} style={{ marginBottom:'20px', marginTop:'40px', fontSize: '24px', fontWeight:'600', color:'#3f403f'}}>Select Rating</label>
                <select 
                onChange={handleChange}
                name={"rating"}
                value={AddProduct.rating}
                style={{marginLeft: '20px', marginBottom: '20px'}} class="form-select" aria-label="Default select example">
                  <option selected>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
    <label style={{fontWeight: '600', fontSize: '24px', marginBottom: '30px'}} >Select Image</label>
    <br/>
        <input style={{marginLeft: '25px'}} 
          onChange={handleproductColorImageChange}
          name={"image"}
          required={true}
          type="file"
        />
        <br/>
        <label style={{fontWeight: '600', fontSize: '24px', marginBottom: '30px'}} >Enter Name</label>
        <br/>
        <input style={{marginLeft: '25px'}} 
          onChange={handleChange}
          name={"username"}
          required={true}
          type="text"
        />
        <br/>
        <label className={Style.type_review}>Type Review</label>
        <br/>
        <textarea style={{marginLeft: '25px', padding: '10px', outline: 'none'}} id="w3review" onChange={handleChange}
        value={AddProduct.review}
        name={"review"}

       rows="8" cols="60" placeholder="Type here"/>
        <br/>
        <button className={Style.post_rev} onClick={handleSubmit}  type="submit">Post</button>
    </div>
    <ToastContainer/>
    <Footer/>
</main>
  )
}

export default Reviews