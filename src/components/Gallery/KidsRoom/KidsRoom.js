import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './KidsRoom.module.css';
import slider1 from '../../../assets/Images/slider1.jpg';
import multiplecolors from '../../../assets/Images/multiplecolors.png';
import img11 from '../../../assets/Images/img11.jpg';
import img22 from '../../../assets/Images/img22.jpg';
import img19 from '../../../assets/Images/img19.png';
import image5 from '../../../assets/Images/image5.jpg';
import image10 from '../../../assets/Images/image10.jpg';
import img6 from '../../../assets/Images/img6.png';
import kidsroom from '../../../assets/Images/kidsroom.jpg';
import kd2 from '../../../assets/Images/kd2.jpg';
import kd3 from '../../../assets/Images/kd3.jpg';
import kd4 from '../../../assets/Images/kd4.jpg';
import kd5 from '../../../assets/Images/kd5.jpg';
import kd6 from '../../../assets/Images/kd6.jpg';
import kd7 from '../../../assets/Images/kd7.jpg';




function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Kids Room</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={kd2} className={`d-block w-100 ${Style.Img}`} height={'550px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd3} className={`d-block w-100 ${Style.Img}`} height={'550px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd4} className={`d-block w-100 ${Style.Img}`} height={'550px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd5} className={`d-block w-100 ${Style.Img}`} height={'550px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd6} className={`d-block w-100 ${Style.Img}`} height={'550px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd4} className={`d-block w-100 ${Style.Img}`} height={'515px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd6} className={`d-block w-100 ${Style.Img}`} height={'550px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={kd5} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily"/>
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