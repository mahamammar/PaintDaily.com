import React, { useEffect, useState } from 'react'
import Style from './ProductPage.module.css';
import Navbar from '../navbar/Navbar';
import profile from '../../assets/Images/profile.png';
import {Link} from "react-router-dom";
import "react-popupbox/dist/react-popupbox.css"
import Footer from '../footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment } from '../../features/counter/counterSlices';
import { Star } from '../../userDashboard/component/Stars/Star';
const ProductPage=()=> {

  const posts = useSelector(state => state.posts)

  const dispatch = useDispatch();
  const [AddProduct, SetAddProduct] = useState({});
  const [ProductById, SetProductById] = useState({});
  const [Reviews, SetReviews] = useState([]);
  const param = useParams();


  // Increment & Decrement
let [num, setNum]= useState(1);
  let incNum =()=>{
    setNum(Number(num)+1);
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
  const CartData = {
    productImage:ProductById.productImage,
    productPrice:parseInt(num*ProductById.price),
    productQuantity:num,
    productTitle:ProductById.productTitle,
    sellerId:ProductById.sellerId
  }
  // Get Product through ID
  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:9090/api/getbyid/${param.id}`,
    }).then((res) => {
       console.log("res",res.data);
      SetProductById(res.data);

    }).catch((err) => {
      console.log(err);
    })


    axios({
      method: 'GET',
      url: `http://localhost:9090/api/getReviewsById/${param.id}`,
    }).then((res) => {
      console.log(res.data);
      SetReviews(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  console.log("cartData",CartData);
  
  //Cart Handle 
    const cartHandle=()=>{
      console.log("post.is", posts.id);
      const id = posts.id;
      axios({
        method: 'POST',
        url: `http://localhost:9090/api/addtoCart/${id}`,
        data:{
          ...CartData,
        }
      }).then((res) => {
        //console.log("response",res.data);
        //SetAddProduct(res.data);
        setNum(0);
        // eslint-disable-next-line no-unused-expressions
        dispatch(increment());
      }).catch((err) => {
        console.log(err);
      })

    }

  return (
    <main className={Style.ppage}>
    <Navbar/>
    <div className={Style.id_counter}>

     <div className={Style.id_counter}>
    <div  className="col-xl-12">
    <div style={{display: 'flex'}}>
  <div>
    <button style={{width: '50px', backgroundColor: '#7f4a81', color: 'white', fontSize:'20px'}} className="btn" type="button" onClick={decNum}>-</button>
  </div>
  <input  style={{width: '60px', textAlign: 'center', fontWeight: '600', fontSize:'20px'}} type="text" className="form-control" value={num} onChange={handleChange}/>
  <div className="input-group-prepend">
    <button style={{width: '50px', backgroundColor: '#7f4a81', color: 'white', fontSize:'20px'}} className="btn" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
</div>

    </div>
    <h2 className={Style.prod_main_heading}>{ProductById.productTitle}</h2>

    <div className={Style.img_btns}>

    <div className={Style.prod_imgs}>
        {/* image1 */}
      <div className={Style.w_prod}>
        <h3 className={Style.imgs_title}>Product</h3>
      <img src={ProductById.productImage}/>
      </div>

        {/* image2 */}
      <div className={Style.w_prod}>
        <h3 className={Style.imgs_title}>Color</h3>
      <img src={ProductById.productColorImage}/>
      </div>
    </div>

        {/* buttons */}
        
        <div className={Style.pr}>
            <div style={{marginLeft: '60px'}}>
            <p className={Style.cart_headings} style={{backgroundColor: '#cacccb', padding: '8px 14px', borderRadius: '5px', marginTop: '72px'}}>{ProductById.price}</p>
            <p className={Style.cart_headings}>Quantity</p>
            </div>
            
          </div>
          {/* Quantity */}
        <div className={Style.all_btns} style={{width:"25%", marginLeft:"-14%"}}>
          
        <button type="button" className="btn" onClick={cartHandle} style={{width: '55%', height: '52%', fontSize:'1.4rem', background: '#FDC12A', color: 'black', fontWeight:'600', marginLeft: '60px', marginTop: '52px'}}
        >Add to Cart</button>
         </div>

         {/* <div style={{position:"absolute", top:"42%", left:"77.5%"}}>
          <h3 style={{color:"black"}}>About the Seller</h3>
          <img src={profile} style={{width:"100px", height:"100px", borderRadius:"50%", marginTop:"0%", marginLeft:"14%"}}></img>
          <Link to="#" style={{color:"black", fontWeight:"600", marginTop:"2%", marginLeft:"18%"}}>paintvillas</Link>
         </div> */}

    </div>


    <div className={Style.prod_desc_box}>
      <h3 className={Style.prod_desc}>Description</h3>
      <p>
        {ProductById.description}
      </p>
    </div>
    <div  className={Style.prod_review_box}>
     
        <button className={Style.add_comment}><Link style={{color: 'black'}} to="/Reviews">Post Review</Link></button>
        <h4 className={Style.comment_section} style={{color:"#000", fontSize:"1.6rem", fontWeight:"600", marginBottom:"5%", marginTop:"6%"}}>Reviews<span className={Style.no_reviews}>{Reviews.length}</span></h4>
   </div>
   <div className={Style.all_reviews}>
    {Reviews?Reviews.map((dta, index)=>(

      <div className={Style.ind_rev}>
      <div className={Style.prof_rev}>
        {/* <img src={women1}/> */}

        <span style={{fontWeight:'600'}}>{dta.username}</span>
        <div className={Style.prof_stars}>
              {}
              </div>
        </div>
        <p className={Style.prod_rev_desc}>{dta.review}.</p>
        <img className={Style.prod_rev_img} src={dta.image}/>
          <Star stars={dta.rating}/>
      </div>

    )):null}
       

   </div>

        <Footer/>
    </main>
  )
}

export default ProductPage;