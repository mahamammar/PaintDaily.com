import React from 'react';
import Navbar from "../navbar/Navbar";
import Style from "../productPage/ProductPage.module.css";
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"
import Footer from "../footer/Footer";
function BuyNow (props) {
    const openPopupbox =()=> {
        const content = (
            <React.Fragment>
                <div>
                    <h2 className={Style.prod_main_heading}>Speedwall interior paint is an economical interior vinyl acrylic paint</h2>
                    <div>
                        <div className={Style.prod_imgs}>
                        </div>
                    </div>
                    <div  style={{display:'flex',flexDirection:'row', justifyContent:'space-between',marginLeft:'100px',marginRight:'100px'}}>
                        <div>
                            <button type="button" className="btn" style={{width: '200px  ', height: '50px', fontSize:'1.1rem', background: 'white', color: 'white'}}>Confirm</button>
                        </div>
                        <div>
                            <button type="button" className="btn"  style={{width: '200px', height: '50px', marginLeft: '4%', fontSize:'1.1rem', background:'#ff0505', color: 'white'}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfig = {
        titleBar: {
            enable: true,
            text: 'Item Details'
        },
        fadeIn: true,
        escClose:true,
        fadeInSpeed: 500,

    }
    return (
        <React.Fragment>
            <Navbar/>
            <div className={"container"} style={{marginTop:'10%', marginBottom:'40px'}}>
                <div className={'row'}>
                    <div className={'col-6'} style={{padding:'10px',marginRight:'auto'}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Deliver to:</strong> Umar</p>
                            <p><button onClick={openPopupbox} style={{color:'blueviolet',backgroundColor:'white',border:'none'}}>Edit</button></p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Address:</strong> Sahiwal,Punjab,Pakistan</p>
                            <p><button onClick={openPopupbox} style={{color:'blueviolet',backgroundColor:'white',border:'none'}}>Edit</button></p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Email:</strong> company2k18@gmail.com</p>
                            <p><button onClick={openPopupbox} style={{color:'blueviolet',backgroundColor:'white',border:'none'}}>Edit</button></p>
                        </div>
                    </div>
                    <div className={'col-4'} style={{border:'2px solid black',padding:'20px',}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong style={{fontWeight:'bold',fontSize:'20px'}}>ORDER SUMMARY</strong></p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Items Total</strong></p>
                            <p>Rs. 1,499</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Delivery Fee</strong></p>
                            <p>Rs. 109</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Total Payment</strong></p>
                            <p>Rs. 1,608</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p><strong>Total:</strong></p>
                            <p>Rs. 1,608</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <button type="button" className="btn" style={{width: '100%', height: '50%', fontSize:'1.1rem', background: 'red', color: 'white'}}
                            >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfig}/>
            <Footer/>
        </React.Fragment>
    );
}

export default BuyNow;