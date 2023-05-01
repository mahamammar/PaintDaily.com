import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './CafeAndRestaurant.module.css';
import cr1 from '../../../assets/Images/cr1.jpg';
import cr2 from '../../../assets/Images/cr2.jpg';
import cr3 from '../../../assets/Images/cr3.jpg';
import cr4 from '../../../assets/Images/cr4.jpg';
import cr5 from '../../../assets/Images/cr5.jpg';
import cr6 from '../../../assets/Images/cr6.jpg';
import cr7 from '../../../assets/Images/cr7.jpg';
import cr8 from '../../../assets/Images/cr8.jpg';






function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Cafe & Restaurant</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={cr1} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr2} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr3} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr7} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr5} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr6} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr4} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={cr8} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
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