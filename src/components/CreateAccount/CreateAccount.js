import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Style from './CreateAccount.module.css'
import { Link } from 'react-router-dom'
function CreateAccount() {
  return (
    <main className={Style.main}>
    <Navbar/>
    <div className={Style.all_accounts}>
        <div className={Style.b_accounts}>
        <div className={Style.account_div}>
            <p><Link style={{fontSize: '20px', color: 'white'}} to="/AdminLogin">Admin</Link></p>
            <br/>
            <br/>
            <p><Link style={{fontSize: '20px', color: 'white'}} to="/LoginAccounts">User</Link></p>
            </div>
        </div>
    </div>
    <Footer/>
    </main>

  )
}

export default CreateAccount