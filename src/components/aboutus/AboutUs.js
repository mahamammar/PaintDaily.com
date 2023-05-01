import React, {useEffect} from 'react'
import Style from '../aboutus/AboutUs.module.css';
import image2 from '../../assets/Images/image2.jpg';
import interiorimgg from '../../assets/Images/interiorimgg.jpg';
import img15 from '../../assets/Images/img15.jpg';
import aboutus1 from '../../assets/Images/aboutus1.jpg';
import aboutus2 from '../../assets/Images/aboutus2.jpg';
import aboutusdiv from '../../assets/Images/aboutusdiv.jpg';

import image1 from '../../assets/Images/image1.png';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
      <React.Fragment>
      <Navbar/>
    <main className={Style.about_us_page}>
        <div className={"row"}>
            <div className={"col-lg-12"}>
                <img className={Style.img} src={image1}/>
                <h2 className={Style.header}>About Us</h2>
            </div>
        </div>

      {/* <h2 className={Style.about_us_heading}>What Drives Us</h2> */}
      <div className={Style.sectionOne}>
        <div className={Style.img_section}>
        <img className={Style.image} src={aboutus1} />
        </div>
        <div className={Style.mainText}>
        <p className={Style.Para}>
          <br/><br/>
          Paint Daily Decorative Paints cater to interior wall surfaces & wood surfaces of residential, offices, factories and commercial buildings with diverse range of colors in all product categories.
          <br/><br/>
          Continuous endeavor is made to achieve and maintain the high product standards that PaintDaily is renowned for. At the same time, innovative products that meet the needs of a demanding market are also launched on regular basis. PaintDaily's decorative product portfolio consists of flagship products like, Elegance Matt Emulsion, All Rounder Matt Enamel, SPD Smooth Emulsion, Weathercoat Glow 365 and Economy Emulsion.
          <br/><br/>
          PaintDaily's Decorative business has achieved remarkable results in all product segments as it strives to keep in touch with new trends and aligns its product range accordingly. This is complemented by pioneering new marketing initiatives and strong focus on customer care.
          </p>
        </div>
      </div>


      <img className={Style.aboutusdiv} src={aboutusdiv}/>


      <div className={Style.sectionTwo}>
        <div className='img-section'>
        <img className={Style.image2} src={aboutus2} />
        </div>
        <div className={Style.mainText2}>
        <p className={Style.Para}><br/><br/>
          Paint Daily Decorative Paints cater to exterior wall surfaces & wood surfaces of residential, offices, factories and commercial buildings with diverse range of colors in all product categories.
          <br/><br/>
          Continuous endeavor is made to achieve and maintain the high product standards that PaintDaily is renowned for. At the same time, innovative products that meet the needs of a demanding market are also launched on regular basis. PaintDaily's decorative product portfolio consists of flagship products like, Elegance Matt Emulsion, All Rounder Matt Enamel, SPD Smooth Emulsion, Weathercoat Glow 365 and Economy Emulsion.
          <br/><br/>
          PaintDaily's Decorative business has achieved remarkable results in all product segments as it strives to keep in touch with new trends and aligns its product range accordingly. This is complemented by pioneering new marketing initiatives and strong focus on customer care.</p>
        </div>
      </div>
      <div className={Style.empty}></div>
      <Footer />
    </main>
      </React.Fragment>
  )
}

export default AboutUs;