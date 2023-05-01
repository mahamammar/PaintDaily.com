import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './StudyRoom.module.css';
import st1 from '../../../assets/Images/st1.jpg';
import st2 from '../../../assets/Images/st2.jpg';
import st3 from '../../../assets/Images/st3.jpg';
import st4 from '../../../assets/Images/st4.jpg';
import st5 from '../../../assets/Images/st5.jpg';
import st6 from '../../../assets/Images/st6.jpg';
import st7 from '../../../assets/Images/st7.jpg';
import st8 from '../../../assets/Images/st8.jpg';

function Bedroom() {
  return (
    <main>
      <Navbar/>

      <h2 className={Style.mid_text}>Study Room</h2>
      <div className={Style.gallery}>
      <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
               <div className="carousel-inner">
                 <div className="carousel-item active" data-interval="100">
                   <img src={st1} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st2} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st3} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st4} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st5} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st6} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st7} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
                 </div>
                 <div className="carousel-item" data-interval="100">
                   <img src={st8} className={`d-block w-100 ${Style.Img}`} height={'640px'} alt="PaintDaily"/>
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