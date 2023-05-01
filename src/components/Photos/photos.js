import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import gallery from '../../assets/Images/gallery.jpg';
import bd6 from '../../assets/Images/bd6.png';
import k4 from '../../assets/Images/k4.png';
import k6 from '../../assets/Images/k6.jpg';
import cf8 from '../../assets/Images/cf8.jpg';
import st6 from '../../assets/Images/st6.jpg';
import cr3 from '../../assets/Images/cr3.jpg';
import mt5 from '../../assets/Images/mt5.jpg';
import dn6 from '../../assets/Images/dn6.jpg';
import bathroom from '../../assets/Images/bathroom.jpg';
import kidsroom from '../../assets/Images/kidsroom.jpg';
import waitingarea from '../../assets/Images/waitingarea.jpg';
import kd1 from '../../assets/Images/kd1.jpg';

import homegym from '../../assets/Images/homegym.jpg';
import classroom from '../../assets/Images/classroom.jpg';
import Style from './photos.module.css'
import {Link} from "react-router-dom";

const photos=()=>  {
  return (
    <main>
    <Navbar/>
        <img className={Style.gallery} src={gallery}/>

        <div className={Style.photos_section}>
            <div className={Style.photos_img}>
                <img src={bd6}/>
                <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/Bedroom">Bedroom</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={k6}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/Kitchen">Kitchen</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={cf8}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/CeoOffice">CEO Office</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={st6}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/StudyRoom">Study Room</Link></p>
            </div>
        </div>


        <div className={Style.photos_section}>
            <div className={Style.photos_img}>
            <img src={cr3}/>
                <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}}  to="/CafeAndRestaurant">Cafe And Restaurant</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={mt5}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/MeetingRoomImages">Meeting Room</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={bathroom}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/Banks">Bathroom</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={classroom}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/GovtBuildings">Classroom</Link></p>
            </div>
        </div>

        <div className={Style.photos_section}>
            <div className={Style.photos_img}>
            <img src={homegym}/>
                <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/CafeteriaImages">Home Gymnasium</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={kd1}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/KidsRoom">Kids Room</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={waitingarea}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/WaitingArea">Waiting Area</Link></p>
            </div>

            <div className={Style.photos_img}>
            <img src={dn6}/>
            <p className={Style.photos_name}><Link style={{fontSize: '24px', color: 'black'}} to="/DiningHall">Dining Hall</Link></p>
            </div>
        </div>

        <div style={{height: '150px'}}></div>
    <Footer/>
    </main>
  )
}

export default photos