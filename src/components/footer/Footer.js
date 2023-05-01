import React from 'react'
import Style from './Footer.module.css';
import logo from '../../assets/Images/logo.png';
import instagram from '../../assets/Images/instagram.png';
import facebook2 from '../../assets/Images/facebook2.png';
import twitter from '../../assets/Images/twitter.png';
import youtubee from '../../assets/Images/youtube.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.row1}>
            <div className={Style.footer_logo}>
              <Link to={"/"}><img src={logo} height="150px" alt="PaintDaily" /></Link>
            </div>
            <div className={Style.categories}>
                 <h3>Location</h3>
                <p className={Style.adr}>
                36 Industrial Estate, Sahiwal.
                <br/>
                Phones: 040-35151545-48
                <br/>
                Fax: 040-35151549
                </p>
            </div>
            
            <div className={Style.social_media}>
                <h3>Social Media</h3>
                <div className={Style.social_media_icons}>
                <a href={"https://www.facebook.com/"} target={"_blank"}><img src={facebook2} alt="PaintDaily" /></a>
                <a href={"https://www.instagram.com/"} target={"_blank"}><img src={instagram} alt="PaintDaily" /></a>
                <a href={"https://twitter.com/"} target={"_blank"}><img src={twitter} alt="PaintDaily" /></a>
                <a href={"https://www.youtube.com/"} target={"_blank"}><img src={youtubee} alt="PaintDaily" /></a>
                </div>
            </div>
            <div className={Style.quick_links}>
                <h3>Quick Links</h3>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/LoginAccounts">Contact Us</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            </div>
            <p className= {Style.copy_right}>
                &copy; {new Date().getFullYear()} PaintDaily.com All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;