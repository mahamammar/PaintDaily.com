import React, { useEffect, useState } from 'react'
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Style from './exterior.module.css';
import {Link} from 'react-router-dom'
import exteriorslider from "../../../../src/assets/Images/exteriorslider.jpg"
import axios from 'axios';
import { Star } from '../../../userDashboard/component/Stars/Star';

const Exterior = () => {

    const [data, Setdata] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios({
        method: 'GET',
        url: 'http://localhost:9090/api/getAllproducts',
      }).then((res) => {
         console.log("Data",res.data);
        Setdata(res.data);
  
      }).catch((err) => {
        console.log(err);
      })
    }, []);
    console.log("data", data);

    const ExteriorPaint = data.filter(dta=>{
        return (dta.selectCategory === "Exterior Paint");
      }); 
      const [currentPage, setCurrentPage] = useState(1)
      const recordsPerPage = 12;
      const lastindex = currentPage*recordsPerPage;
      const firstIndex = lastindex-recordsPerPage;
      const records = ExteriorPaint.slice(firstIndex,lastindex);
      const npage = Math.ceil(ExteriorPaint.length/recordsPerPage)
      const numbers= [...Array(npage+1).keys()].slice(1);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <Navbar/>
            <img className={Style.pimage} src={exteriorslider}/>


            <div className={Style.search}>
                <input type="text" className={Style.searchTerm} placeholder="Search 'white interior paint'"  onChange={(e)=>setQuery(e.target.value)}/>
                    <button type="submit" className={Style.searchButton}>
                    <i className="fa fa-search"></i>
                    </button>
            </div> 





            <h2 className={Style.pheading}>Exterior Paints</h2>
            <div className={Style.product_side}>
<div className={`row`}>
{records.filter((user)=>user.productTitle.toLowerCase().includes(query)).map((dta,index)=>(
            // {ExteriorPaint.map((dta,index)=>(
            <div className={Style.prod} >
                <Link to={`/productPage/${dta.id}`}>
                        <div key={index} style={{width:"80%"}}>
                            <span className={Style.code_color}>Code: {dta.productColorName}</span>
                        <div className={Style.image_box}>
                            <img className="" src={dta.productColorImage}/>
                        </div>
                        
                        <div className={Style.prod_title}>
                            <p style={{color:"Black"}}>{dta.productTitle}</p>
                        </div>





                        <div className={Style.desc_box}>
                        <span style={{ color: '#6e6d6a', fontSize: '18px', paddingLeft: '22px', paddingTop: '150px'  }}>{dta.productWeight}</span>
                      </div>

                        <div className={Style.bottom_box}>

                          <div className={Style.bottom_line} style={{ color: "Black" }}>
                            
                             <Star stars={dta.totalRating}/>
                             {/* <Link to ="#" className={Style.rev}>Reviews</Link> */}
                             <p className={Style.product_price}>Rs {dta.price}</p>
                          </div>
                        </div>
                    </div>
                    </Link>

            </div>
            ))}
</div>
</div>
            <nav aria-label="..." style={{marginLeft:"42%", marginBottom:"4%"}}>
            <ul class="pagination">
                         <li class="page-item">
                            <a class="page-link" href="#" onClick={perPage}>Prev</a>
                        </li>
                        {
                            numbers.map((n,i)=>{
                                <li className={`page-item${currentPage === n ? 'active': ''}`} key={i}>
                                    <a class="page-link" href="#" onClick={()=>changeCPage(n)}>{n}</a>
                                </li>
                            })
                        }
                       
                       <li class="page-item">
                            <a class="page-link" href="#" onClick={nextPage}>Next</a>
                        </li>  
                    </ul>
            </nav>
            <Footer/>
        </main>
    );
    function perPage (){

        if(currentPage !== firstIndex){
            setCurrentPage(currentPage-1)
        }
    }
    function changeCPage (id){
        setCurrentPage(id);
    }
    function nextPage (){
        if(currentPage !== firstIndex){
            setCurrentPage(currentPage+1)
        }
    }
};

export default Exterior;