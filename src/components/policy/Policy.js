import React, {useEffect} from 'react'
import Style from './Policy.module.css';
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar';

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className={Style.ppolicy}> 
    <Navbar/>
    <div className={Style.privacy_policy_container}>
    <div className='container'>
    <h1 className={Style.policy_heading}>Privacy Policy</h1>
        <p>Welcome to PaintDaily.com!</p>
      <h3 className={Style.H3}>Your Privacy</h3>
      <p>Please read Privacy Policy</p>
      <h3 style={{color:'black'}}>Reservation of Rights</h3>
      <p>
        <ul>
        <li>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website uponrequest.</li>
         <li>We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
         </li>
         </ul>
      </p>
      <h3 style={{color:'black'}}>Removal of links from our website</h3>
      <ul>
      <li>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly
      </li>          
      <li>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website<br/> remains available or that the material on the website is kept up to date.
      </li>
      </ul>
      <h3 style={{color:'black'}}>Disclaimer</h3>
      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.<br/> Nothing in this disclaimer will:</p>
      <p>

      <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law</li>
      </ul>
      </p>
      <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all<br/> 
      liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
      <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
</div>
</div>
<div className={Style.empty}></div>
<Footer/>
</main>
  )
}

export default Policy