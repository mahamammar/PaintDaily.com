import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './MeetingRoomImages.module.css';
import mt1 from '../../../assets/Images/mt1.jpg';
import mt2 from '../../../assets/Images/mt2.jpg';
import mt3 from '../../../assets/Images/mt3.jpg';
import mt4 from '../../../assets/Images/mt4.jpg';
import mt5 from '../../../assets/Images/mt5.jpg';
import mt6 from '../../../assets/Images/mt6.jpg';
import mt7 from '../../../assets/Images/mt7.jpg';
import mt8 from '../../../assets/Images/mt8.jpg';






function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Meeting Room</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={mt1} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt2} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt3} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt4} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt5} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt6} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt7} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={mt8} className={`d-block w-100 ${Style.Img}`} height={'650px'} alt="PaintDaily"/>
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