import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './Bedroom.module.css';
import slider1 from '../../../assets/Images/slider1.jpg';
import multiplecolors from '../../../assets/Images/multiplecolors.png';
import img11 from '../../../assets/Images/img11.jpg';
import img22 from '../../../assets/Images/img22.jpg';
import img19 from '../../../assets/Images/img19.png';
import image5 from '../../../assets/Images/image5.jpg';
import image10 from '../../../assets/Images/image10.jpg';
import bd1 from '../../../assets/Images/bd1.jpg';
import bd2 from '../../../assets/Images/bd2.jpg';
import bd3 from '../../../assets/Images/bd3.jpg';
import bd4 from '../../../assets/Images/bd4.png';
import bd5 from '../../../assets/Images/bd5.jpg';
import bd7 from '../../../assets/Images/bd7.jpg';
import bd8 from '../../../assets/Images/bd8.jpg';
import bd6 from '../../../assets/Images/bd6.png';



import img6 from '../../../assets/Images/img6.png';






function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Bedrooms</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={bd2} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd4} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd3} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd1} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd5} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd8} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd6} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={bd7} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
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