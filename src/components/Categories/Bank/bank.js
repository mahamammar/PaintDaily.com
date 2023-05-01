import React, {useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import {exteriorPaint} from "../../../utils/categoryArray";
import Style from './bank.module.css';
import {Link} from 'react-router-dom'
import bank from "../../../../src/assets/Images/bank.jpg"

const Exterior = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <Navbar/>
            <img className={Style.pimage} src={bank}/>

            <h2 className={Style.pheading}>Bank & Financial Institutes</h2>

<div className={Style.product_side}>
            {exteriorPaint.map((data,index)=>(
            <div className={Style.prod} >
                <Link to={"/productPage"}>
                        <div key={index} style={{width:"80%"}}>
                        <span className={Style.code_color}>Code: {data.code}</span>

                        <div className={Style.image_box}>
                            <img className="" src={data.Img}/>
                        </div>
                        
                        <div className={Style.prod_title}>
                           
                            <p style={{color:"Black"}}>{data.description}</p>

                        </div>
                        <div className={Style.others}>
                            <div className={Style.prod_reviews}>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div className={Style.prod_price} style={{color:"Black"}}>
                            <p>Rs {data.price}</p>

                            </div>
                        </div>
                    </div>
                    </Link>

            </div>
            ))}
            </div>
            <nav aria-label="..." style={{marginLeft:"42%", marginBottom:"4%"}}>
                    <ul class="pagination">
                        <li class="page-item disabled" >
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                         <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                             <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
            </nav>
            <Footer/>
        </main>
    );
};

export default Exterior;