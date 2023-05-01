import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './Kitchen.module.css';
import slider1 from '../../../assets/Images/slider1.jpg';
import multiplecolors from '../../../assets/Images/multiplecolors.png';
import img11 from '../../../assets/Images/img11.jpg';
import img22 from '../../../assets/Images/img22.jpg';
import img19 from '../../../assets/Images/img19.png';
import image5 from '../../../assets/Images/image5.jpg';
import k1 from '../../../assets/Images/k1.jpeg';
import k2 from '../../../assets/Images/k2.jpg';
import k3 from '../../../assets/Images/k3.jpg';
import k5 from '../../../assets/Images/k5.jpg';
import k6 from '../../../assets/Images/k6.jpg';
import k7 from '../../../assets/Images/k7.jpg';
import k8 from '../../../assets/Images/k8.jpg';
import k4 from '../../../assets/Images/k4.png';
import img6 from '../../../assets/Images/img6.png';






function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Kitchen</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={k1} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k2} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k3} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k4} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k5} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k6} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k7} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={k8} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Next</span>
               </button>
             </div>  
             </div>


      <Footer/>
    </main>
    
  )
}

export default Bedroom