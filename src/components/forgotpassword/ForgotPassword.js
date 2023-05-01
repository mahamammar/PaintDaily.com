import React from 'react'
import Style from './ForgotPassword.module.css';
import image1 from '../../assets/Images/image1.png';
import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
function ForgotPassword () {
    const [number,setNumber] = useState({
        destinationSMSNumber:''
    });

    const handleChange = (event) => {
        setNumber({
          ...number,
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        axios({
          method: 'POST',
          url: 'http://localhost:9090/api/forgetPassword',
          data:{
           ...number
          }
        }).then((res) => {
            console.log(res);
            setNumber("");
        }).catch((err) => {
          console.log(err);
        })
      } 
    return (
        <main className={Style.main}>
            <Navbar/>
                <div className={Style.section_2}>
                    <div className={Style.rp_form}>
                        <h2 className={Style.recover_heading}>Recover Account</h2>
                        <form>
                            <div className={Style.input_field}>
                                <label for="Phone Number">Phone Number</label>
                                <input type="tel" placeholder="Enter your Phone Number" onChange={handleChange} id="phoneNumber" name="destinationSMSNumber" required={true} />
                            </div>
                            <br/>
                            <button className={Style.send} onClick={handleSubmit}>Send</button>
                        </form>
                    </div>

                </div>
        </main>
    )
}

export default ForgotPassword