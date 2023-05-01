import React, {useEffect} from 'react'
import Style from "./Contact.module.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import useWindowHock from "../../utils/windowHock";
const Contact = () => {
    useEffect(() => {
        window.scrollTo({top:0,behavior:"smooth"})
    }, [])
  return (
    <React.Fragment>
    <Navbar/>
    <div className={Style.body}>
        <div className='container-fluid'>
            <div className="d-flex  justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center" >
                <div className={`shadow-lg p-3  bg-body rounded ${Style.form_contact}`}>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-sx-12 d-flex justify-content-center'>
                            <h1 style={{fontWeight:'bold'}}>Contact us</h1>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <p>Got a Question? We'd love to hear from you. Send us a message and <br/> we will response as soon as possible.</p>
                        </div>
                    </div>
                    <div className={`row  ${Style.responsive} mt-3`}>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-sx-12 col-sx-12 d-flex justify-content-start'>
                        <form action='' style={{width:'100%'}}>
                            <div className='form-group'>
                                <label htmlFor="username"><span style={{marginLeft:"-25px"}}>Username</span> <span style={{color:'red'}}>*</span></label>
                                <br />
                                <input className="form-control mt-2" type="text" placeholder="username" id="username" autoFocus />
                                <br />
                                <label htmlFor="email"><span style={{marginLeft:"-25px"}}>Email</span> <span style={{color:'red'}}>*</span></label>
                                <br />
                                <input className="form-control mt-2" type="email" placeholder="john@gmail.com" id="email" /> 
                                <br/> 
                                <label for="exampleFormControlTextarea1"><span style={{marginLeft:"-25px"}}>Message</span> <span style={{color:'red'}}>*</span></label>
                                 <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="5" style={{textOverflow:'ellipsis', resize:'none'}} placeholder="Type Your Message here."></textarea>
                                </div>  
                        </form>
                        </div>
                        <div className='d-grid mt-4'>
                            <button type='button' style={{backgroundColor:'#013A43', color:'white', border:'none', marginBottom:'3  0px'}}><h5 className='mt-2'>SEND MESSAGE</h5></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default Contact