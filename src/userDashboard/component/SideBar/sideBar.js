import React, {useState} from 'react';
import Styled from './sidebar.module.css';
import images from '../../assets/images.jpeg';
import {SidebarData} from "../../utils";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {UilWhatsapp} from "@iconscout/react-unicons";
const SideBar = () => {
    const [selected, setSelected] = useState(0);
    console.log(selected);
    const navigate = useNavigate();
    return (
        <React.Fragment>
        <div className={Styled.Sidebar}>
            {/*{logo}*/}
            <div className={Styled.logo}>
                <img  className={Styled.Img} src={images}  alt={"PaintDaily"}/>
            </div>
            {/* menu */}
            <div className={Styled.menu}>
                {SidebarData.map((item,index)=>{
                    return(
                        <div className={selected===index?`${Styled.menuItem} ${Styled.active}`:`${Styled.menuItem}`}
                            key={index}
                             onClick={()=>setSelected(index)}

                        >
                            <div className={selected===index?`${Styled.selected}`:`${Styled.unSelected}`}>
                                <item.icon/>
                            </div>
                            <Link className={Styled.itemLinks} to={`${item.link}`}><span className={selected===index?`${Styled.selectedText}`:null} >{item.heading}</span></Link>
                        </div>
                    )
                })}
                {/*<button type={'button'} style={{backgroundColor:'#5B3F67', border:'none', color:'white', width:'150px', marginLeft:'30px', borderRadius:'10px',paddingTop:'10px',paddingBottom:'10px', fontSize:'20px', fontWeight:'bold'}} onClick={()=>{navigate('/')}}>Home</button>*/}
            </div>
            <div className={`${Styled.menuItem}`} style={{marginTop:'20px'}}>
                <a className={Styled.WhatsApp} href={"https://wa.me/923167906557"} target={"_blank"}><UilWhatsapp/>
                    <span style={{color:'white', marginLeft:'15px'}}>WhatsApp</span>
                </a>
            </div>
        </div>
        </React.Fragment>
    );
};
export default SideBar;