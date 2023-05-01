import React, { useEffect, useState } from 'react'
import Style from './View.module.css';
import exp1 from '../../../../assets/Images/exp1.png';
import co3 from '../../../../assets/Images/co3.jpg';
import dis6 from '../../../../assets/Images/dis6.jpg';
import profile from '../../../../assets/Images/profile.png';
import man1 from '../../../../assets/Images/man1.jpg';
import man2 from '../../../../assets/Images/man2.jpg';
import women1 from '../../../../assets/Images/women1.jpeg';
import {Link, useNavigate} from "react-router-dom";
import "react-popupbox/dist/react-popupbox.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductPage=()=> {
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

  return (
    <main className={Style.ppage}>
    <div className={Style.id_counter}>
    </div>
    <h2 className={Style.prod_main_heading}>{AddProduct.productTitle}</h2>

    <div className={Style.img_btns}>

    <div className={Style.prod_imgs}>
        {/* image1 */}
      <div className={Style.w_prod}>
        <h3 className={Style.imgs_title}>Product</h3>
      <img src={AddProduct.productImage}/>
      </div>
        {/* image2 */}
      <div className={Style.w_prod}>
    
        <h3 className={Style.imgs_title}>Color</h3>
      <img src={AddProduct.productColorImage}/>
      </div>
    </div>

         <div style={{position:"absolute", top:"42%", left:"77.5%"}}>
          <h3 style={{color:"black"}}>About the Seller</h3>
          <img src={profile} style={{width:"100px", height:"100px", borderRadius:"50%", marginTop:"0%", marginLeft:"14%"}}></img>
          <Link to="#" style={{color:"black", fontWeight:"600", marginTop:"2%", marginLeft:"18%"}}>paintvillas</Link>
         </div>

    </div>


    <div className={Style.prod_desc_box}>
      <h3 className={Style.prod_desc}>Description</h3>
      <p>{AddProduct.description}
      </p>
    </div>

    <div className={Style.prod_review_box}>
     
        <button className={Style.add_comment}><Link style={{color: 'black'}} to="/Reviews">Post Review</Link></button>
        <h4 className={Style.comment_section} style={{color:"#000", fontSize:"1.6rem", fontWeight:"600", marginBottom:"5%", marginTop:"6%"}}>Reviews<span className={Style.no_reviews}>3</span></h4>
   </div>
   <div className={Style.all_reviews}>
        <div className={Style.ind_rev}>
          <div className={Style.prof_rev}>
          <img src={man1}/>
          <div className={Style.prof_stars}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
          </div>
          
          <span style={{fontWeight:'600'}}>Nadeem Aslam</span>
          <p style={{marginRight: '30px', marginLeft: '20px'}}>Very nice color. Overall good packing.</p>
          <img className={Style.prod_rev_img} src={exp1}/>
        </div>
        <div className={Style.ind_rev}>
        <div className={Style.prof_rev}>
          <img src={women1}/>
          <div className={Style.prof_stars}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
          </div>
        <span style={{fontWeight:'600'}}>Rabbia Shafique</span>
          <p className={Style.prod_rev_desc}>Amazing Product. Thank You.</p>
          <img className={Style.prod_rev_img} src={exp1}/>
          {/* <img className={Style.prod_rev_img} src={exp1}/> */}
          {/* <img className={Style.prod_rev_img} src={exp1}/> */}
        </div>
        <div className={Style.ind_rev}>
        <div className={Style.prof_rev}>
          <img src={man2}/>
          <div className={Style.prof_stars}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
          </div>
        <span style={{fontWeight:'600'}}>Zaheer Khan</span>
          <p className={Style.prod_rev_desc}>Really like the delivered product</p>
          <img className={Style.prod_rev_img} src={exp1}/>
        </div>

   </div>
    </main>
  )
}

export default ProductPage