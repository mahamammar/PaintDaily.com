import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './GovtBuildings.module.css';
import slider1 from '../../../assets/Images/slider1.jpg';
import multiplecolors from '../../../assets/Images/multiplecolors.png';
import img11 from '../../../assets/Images/img11.jpg';
import img22 from '../../../assets/Images/img22.jpg';
import img19 from '../../../assets/Images/img19.png';
import image5 from '../../../assets/Images/image5.jpg';
import cs2 from '../../../assets/Images/cs2.jpg';
import cs3 from '../../../assets/Images/cs3.png';
import cs4 from '../../../assets/Images/cs4.jpg';
import cs5 from '../../../assets/Images/cs5.jpg';
import cs6 from '../../../assets/Images/cs6.jpeg';
import cs7 from '../../../assets/Images/cs7.jpg';


import image10 from '../../../assets/Images/image10.jpg';
import img6 from '../../../assets/Images/img6.png';


function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Classroom</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={cs3} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cs2} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cs4} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cs5} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cs6} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cs7} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cs4} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={image10} className={`d-block w-100 ${Style.Img}`} height={'620px'} alt="PaintDaily"/>
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