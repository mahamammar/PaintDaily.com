import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './DiningHall.module.css';
import slider1 from '../../../assets/Images/slider1.jpg';
import multiplecolors from '../../../assets/Images/multiplecolors.png';
import img11 from '../../../assets/Images/img11.jpg';
import img22 from '../../../assets/Images/img22.jpg';
import img19 from '../../../assets/Images/img19.png';
import image5 from '../../../assets/Images/image5.jpg';
import image10 from '../../../assets/Images/image10.jpg';
import img6 from '../../../assets/Images/img6.png';
import dn1 from '../../../assets/Images/dn1.jpg';
import dn2 from '../../../assets/Images/dn2.jpg';
import dn3 from '../../../assets/Images/dn3.jpg';
import dn4 from '../../../assets/Images/dn4.jpg';
import dn5 from '../../../assets/Images/dn5.jpg';
import dn6 from '../../../assets/Images/dn6.jpg';
import dn7 from '../../../assets/Images/dn7.jpg';
import dn8 from '../../../assets/Images/dn8.jpg';
import dn9 from '../../../assets/Images/dn9.jpg';
import dn10 from '../../../assets/Images/dn10.jpg';
import dn11 from '../../../assets/Images/dn11.jpg';


function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Dining Hall</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={dn9} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn6} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn3} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn11} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn1} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn8} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn10} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={dn7} className={`d-block w-100 ${Style.Img}`} height={'600px'} alt="PaintDaily"/>
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