import React, {useState} from 'react';
import Styled from './sidebar.module.css';
import img from '../../assets/img.png';
import {sidebarData} from "../../utils";
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
                <img  className={Styled.Img} src={img}  alt={"PaintDaily"}/>
            </div>
            {/* menu */}
            <div className={Styled.menu}>
                {sidebarData.map((item,index)=>{
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