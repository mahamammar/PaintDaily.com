import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './CeoOffice.module.css';
import cf1 from '../../../assets/Images/cf1.jpg';
import cf2 from '../../../assets/Images/cf2.jpg';
import cf3 from '../../../assets/Images/cf3.jpg';
import cf4 from '../../../assets/Images/cf4.jpeg';
import cf5 from '../../../assets/Images/cf5.jpg';
import cf6 from '../../../assets/Images/cf6.jpg';
import cf7 from '../../../assets/Images/cf7.jpg';
import cf8 from '../../../assets/Images/cf8.jpg';
import cf9 from '../../../assets/Images/cf9.jpg';






function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Ceo Office</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={cf5} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf3} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf2} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf4} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf1} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf6} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf7} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cf8} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
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