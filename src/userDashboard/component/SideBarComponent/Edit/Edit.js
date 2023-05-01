import React, { useEffect, useState } from 'react'
import Styled from './Edit.module.css';
import AdminNavbar from "../../../../adminDashboard/component/Navbar/AdminNavbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function AddProducts(props) {
    const navigate = useNavigate();
    const param = useParams();
  const [AddProduct, SetAddProduct] = useState({
    productTitle: '',
    selectCategory: '',
    productColorName: '',
    productImage: '',
    productColorImage: '',
    description: '',
    price:''
  });


  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:9090/api/getbyid/${param.id}`,
    }).then((res) => {
      console.log(res.data);
      SetAddProduct(res.data);

    }).catch((err) => {
      console.log(err);
    })
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'PUT',
      url: `http://localhost:9090/api/updatebyid`,
      data:{
        ...AddProduct
      }
    }).then((res) => {
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

          <button type="submit" class="btn btn-primary" onClick={()=>navigate("/dashboard")} style={{ background: '#1d28f3', color: 'white', width: '10%', fontSize: '1.2rem', marginLeft: '5%' }}>Back</button>
            <form style={{ marginLeft: '5%', marginRight: '4%', width: '85%' }}>

              <h3 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'center' }}>Edit Product</h3>

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
                  <option>Corporate Office</option>
                  <option>Educational Institutes</option>
                  <option>Hospital & Healthcare</option>
                  <option>Hotel & Resorts</option>
                  <option>Bank & Financial Institutes</option>
                  <option>Government Buildings</option>
                  <option>Cafeteria</option>
                  <option>Meeting Room</option>
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
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  placeholder="Enter Color Code"
                  value={AddProduct.productColorName}
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
                }}>Enter Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  style={{ outline: 'none', marginBottom: '0.5%' }}
                  placeholder="Enter Price"
                  value={AddProduct.price}
                  name={"price"}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group" style={{ width: '50%' }}>

                <label htmlFor={"formFile"} className={"form-label"} style={{ marginLeft: '-0.1%', marginBottom: '2%', marginTop: '3%', fontWeight: '600', color: '#3f403f' }}>Product Image</label>
                <br />
                <input
                  type="file"
                  className={`form-control-file`}
                  id="formFile"
                  // value={AddProduct.productImage}
                  name={"productImage"}
                  onChange={handleChange}
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
                  // value={AddProduct.productColorImage}
                  name={"productColorImage"}
                  onChange={handleChange}
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
              <button type="submit" class="btn btn-primary" onClick={handleSubmit} style={{ background: '#1d28f3', color: 'white', width: '10%', fontSize: '1.2rem', marginBottom: '20%' }}>Update</button>

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