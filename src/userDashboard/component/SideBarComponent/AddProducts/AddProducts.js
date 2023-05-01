import React, { useState } from 'react';
import Styled from './addproducts.module.css';
import AdminNavbar from "../../../../adminDashboard/component/Navbar/AdminNavbar";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function AddProducts(props) {

  const post = useSelector((state)=>state.SellerPosts);
  console.log(post.sellerId);
  console.log(post.id);
  const [val, setVal] = useState("");
  const [AddProduct, SetAddProduct] = useState({
    productTitle: '',
    selectCategory: '',
    productColorName: '',
    productImage: '',
    productColorImage: '',
    description: '',
    price:'',
    productWeight:''
  });
  const [fileList, setFileList] = useState(null);
  const handleproductImageChange = (e) =>{
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
          AddProduct.productImage="http://localhost:9090/"+res.data.fileName;
      }).catch((err) => {
        console.log(err);
      })
    }
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
          AddProduct.productColorImage="http://localhost:9090/"+res.data.fileName;
      }).catch((err) => {
        console.log(err);
      })
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:9090/api/addproducts',
      data:{
        ...AddProduct,
        sellerId:post.sellerId,
        sellerSignupId:post.id,
        rating:""
      }
    }).then((res) => {
        console.log(res);
        SetAddProduct({
          productTitle: '',
          selectCategory: '',
          productColorName: '',
          productImage: '',
          productColorImage: '',
          description: '',
          price:''
        });
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
    }).catch((err) => {
      console.log(err);
    })
  }
  

  const  CheckNumericValue = (e)=> {
    var key = e.which ? e.which : e.keyCode;
    //enter key  //backspace //tabkey      //escape key                  
    if ((key >= 48 && key <= 57) || key == 13 || key == 8 || key == 9 || key == 27) {
        return true;
    }
    else {
        alert("Please Enter Number Only");
        return false;
    }
 }

  const handleChange = (event) => {
    SetAddProduct({
      ...AddProduct,
      [event.target.name]: event.target.value
    })
  }


  return (
    <React.Fragment>
      <div className={Styled.App}>
        <div className={Styled.AppGlass}>
          <AdminNavbar />


          <div style={{ marginTop: '40px', marginLeft: '60px', marginRight: "40px", overflowY: "scroll", height: '553px', }} className={Styled.ScrollBar} >
            <form style={{ marginTop: '5%', marginLeft: '5%', marginRight: '4%', width: '85%' }}>

              <h3 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'center' }}>Add Products</h3>

              <div class="form-group" style={{ width: '50%' }}>
                <label
                  for="exampleFormControlInput1" style={{ marginLeft: '-0.1%', marginBottom: '2%', marginTop: '2%', fontWeight: '600', color: '#3f403f' }} >Product Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  placeholder="Enter Product Title"
                  value={AddProduct.productTitle}
                  name={"productTitle"}
                  onChange={handleChange}
                  required={true} />
              </div>


              <div className="form-group" style={{ width: '50%' }}>
                <label for="exampleFormControlSelect1" style={{ marginLeft: '-0.1%', marginBottom: '2%', marginTop: '2%', fontWeight: '600', color: '#3f403f' }}>Select Category</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={AddProduct.selectCategory}
                  name={"selectCategory"}
                  onChange={handleChange}
                >
                  <option selected>Select Category</option>
                  <option>Interior Paint</option>
                  <option>Exterior Paint</option>
                  <option>Distemper Paint</option>
                  <option>Emulsion Paint</option>
                  <option>Enamel Paint</option>
                  {/* <option>Corporate Office</option> */}
                  {/* <option>Educational Institutes</option> */}
                  {/* <option>Hospital & Healthcare</option> */}
                  {/* <option>Hotel & Resorts</option> */}
                  {/* <option>Bank & Financial Institutes</option> */}
                  {/* <option>Government Buildings</option> */}
                  {/* <option>Cafeteria</option> */}
                  {/* <option>Meeting Room</option> */}
                  <option>Wallpaper</option>
                  <option>Brushes & Rollers</option>
                  <option>Painting Tools</option>
                </select>
              </div>

              <div className="form-group" style={{ width: '50%' }}>
                <label htmlFor="exampleFormControlInput1" style={{
                  marginLeft: '-0.1%',
                  marginBottom: '2%',
                  marginTop: '2%',
                  fontWeight: '600',
                  color: '#3f403f'
                }}>Enter Color Code</label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  value={AddProduct.productColorName}
                  // onChange={(e) =>
                  //   setVal((v) => (e.target.validity.valid ? e.target.value : v))
                  // }
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  placeholder="Enter Color Code"
                  name={"productColorName"}
                  onChange={handleChange}
                />
              </div>



              <div className="form-group" style={{ width: '50%' }}>
                <label htmlFor="exampleFormControlInput1" style={{
                  marginLeft: '-0.1%',
                  marginBottom: '2%',
                  marginTop: '2%',
                  fontWeight: '600',
                  color: '#3f403f'
                }}>Enter Weight</label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  placeholder="Enter Weight"
                  name={"productWeight"}
                  value={AddProduct.productWeight}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group" style={{ width: '50%' }}>
                <label htmlFor="exampleFormControlInput1" style={{
                  marginLeft: '-0.1%',
                  marginBottom: '2%',
                  marginTop: '2%',
                  fontWeight: '600',
                  color: '#3f403f'
                }}>Enter Price</label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  value={AddProduct.price}
                  // onChange={(e) =>
                  //   setVal((v) => (e.target.validity.valid ? e.target.value : v))
                  // }
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  placeholder="Enter Price"
                  name={"price"}
                  onChange={handleChange}
                />
              </div>
              {/*<div class="form-group">*/}
              {/*  <label for="exampleFormControlInput1" style={{marginLeft:'-0.1%', marginBottom:'2%', marginTop:'2%', fontWeight:'600', color:'#3f403f'}} > Pick Color</label>*/}
              {/*  <input type="color" className="form-control" id="exampleFormControlInput1"  class="form-control form-control-color" required={true}/>*/}
              {/*</div>*/}

              <div className="form-group" style={{ width: '50%' }}>

                <label htmlFor={"formFile"} className={"form-label"} style={{ marginLeft: '-0.1%', marginBottom: '2%', marginTop: '3%', fontWeight: '600', color: '#3f403f' }}>Product Image</label>
                <br />
                <input
                  type="file"
                  className={`form-control-file`}
                  id="formFile"
                  name={"Image"}
                  onChange={handleproductImageChange}
                  required={true} />
              </div>

              <div className="form-group" style={{ width: '50%' }}>

                <label htmlFor={"formFile"} style={{ marginLeft: '-0.1%', marginBottom: '2%', marginTop: '2%', fontWeight: '600', color: '#3f403f' }}>Color Image</label>
                <br />
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className={`form-control-file`}
                  id="formFile"
                  name={"productColorImage"}
                  onChange={handleproductColorImageChange}
                  required={true}
                  
                  />
              </div>

              <div className="form-group" style={{ width: '50%' }}>
                <label
                  for="exampleFormControlTextarea1"
                  style={{ marginLeft: '-0.1%', marginBottom: '1%', marginTop: '3%', fontWeight: '600', color: '#3f403f' }}>Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  rows="3"
                  placeholder='Enter Description'
                  value={AddProduct.description}
                  name={"description"}
                  onChange={handleChange}
                  required={true}>
                </textarea>
              </div>
              <br />
              <button type="submit" class="btn btn-primary" onClick={handleSubmit} style={{ background: '#1d28f3', color: 'white', width: '10%', fontSize: '1.2rem', marginBottom: '20%' }}>Add</button>

            </form>
          </div>
          <footer className="sticky-footer" style={{ boxShadow: "20px 20px 60px #bebebe -20px -20px 60px #ffffff", backgroundColor: '#984fc2', padding: '12px', height: '60px', marginTop: '90px' }}>
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span style={{ color: 'white' }}>Copyright &copy; {new Date().getFullYear()} - Developed by PaintDaily
                </span>
              </div>
            </div>
          </footer>
        </div>
        <ToastContainer/>
      </div>
    </React.Fragment>

  );
}

export default AddProducts;