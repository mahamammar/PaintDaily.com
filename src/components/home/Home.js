//  Importing all the necessary modules and files
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slider1 from '../../assets/Images/slider1.jpg';
import mi2 from '../../assets/Images/mi2.jpg';
import mi3 from '../../assets/Images/mi3.jpg';
import img6 from '../../assets/Images/img6.png';
import multiplecolors from '../../assets/Images/multiplecolors.png';
import img11 from '../../assets/Images/img11.jpg';
import "../../../node_modules/swiper/react/swiper.js";
import dpaints from '../../assets/Images/dpaints.png';
import img19 from '../../assets/Images/img19.png';
import interior from '../../assets/Images/interior.png';
import wallpaper from '../../assets/Images/wallpaper.png';
import exterior from '../../assets/Images/exterior.png';
import paintbrushes from '../../assets/Images/paintbrushes.png';
import accessories from '../../assets/Images/accessories.png'
import emulsionpaints from '../../assets/Images/emulsionpaints.png'
import enamelpaints from '../../assets/Images/enamelpaints.png'
import paintbannerimg from '../../assets/Images/paintbannerimg.jpg';
import img22 from '../../assets/Images/img22.jpg';
import image10 from '../../assets/Images/image10.jpg';
import image5 from '../../assets/Images/image5.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../Error/error';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Style from '../home/Home.module.css';
import sp from '../../assets/Images/sp.jpg';
import pt from '../../assets/Images/pt.jpg';


// brands logo
import masterpaint from '../../assets/Images/masterpaint.jpg';
import bergerpaint from '../../assets/Images/bergerpaint.jpg';
import duluxpaint from '../../assets/Images/duluxpaint.png';
import diamondpaint from '../../assets/Images/diamondpaint.png';
import nipponpaint from '../../assets/Images/nipponpaint.png';
import happilacpaint from '../../assets/Images/happilacpaint.png';
import superkotepaint from '../../assets/Images/superkotepaint.png';
import marvelpaint from '../../assets/Images/marvelpaint.jpg';

// importing paints
import h1 from '../../assets/Images/h1.png';
import h2 from '../../assets/Images/h2.png';
import h3 from '../../assets/Images/h3.png';
import h4 from '../../assets/Images/h4.png';
import b1 from '../../assets/Images/b1.png';
import b2 from '../../assets/Images/b2.png';
import b3 from '../../assets/Images/b3.png';
import b4 from '../../assets/Images/b4.png';
import axios from 'axios';
import { Star } from '../../userDashboard/component/Stars/Star';

const Home = () => {
  const [data, Setdata] = useState([]);
  const [Reviews, SetReviews] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:9090/api/getAllproducts',
    }).then((res) => {
      console.log("Two table data",res.data);
      Setdata(res.data);

    }).catch((err) => {
      console.log(err);
    })
    
    axios({
      method: 'GET',
      url: 'http://localhost:9090/api/getReviews',
    }).then((res) => {
      // console.log("Reviews",res.data);
      SetReviews(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);


  const InteriorPaint = data.filter(dta=>{
    return (dta.selectCategory === "Interior Paint");
  });
  console.log(InteriorPaint);
  const ExteriorPaint = data.filter(dta=>{
    console.log(dta.totalRating);
    return (dta.selectCategory === "Exterior Paint");
  }); 

  console.log("Exterrior", ExteriorPaint);
  const Wallpaper = data.filter((dta)=>{
    return (dta.selectCategory === "Wallpaper");
  });
  const Distemper = data.filter((dta)=>{
    return (dta.selectCategory === "Distemper Paint");
  })
  const Brushes = data.filter((dta)=>{
    return (dta.selectCategory === "Brushes & Rollers");
  })
  const Painting = data.filter((dta)=>{
    return (dta.selectCategory === "Painting Tools")
  })
  const Emulsion = data.filter((dta)=>{
    return (dta.selectCategory === "Emulsion Paint")
  })
  const Enamel = data.filter((dta)=>{
    return (dta.selectCategory === "Enamel Paint")
  })
 
  console.log("ExteriorPaint",ExteriorPaint);


  return (
      <React.Fragment>
        <Navbar />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <main className={Style.main}>

            {/* Slider */}

            <div id="carouselExampleControls" className="carousel slide slide-top" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="100">
                  <img src={slider1} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={multiplecolors} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={img22} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={img11} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={img19} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={image5} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={img6} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
                <div className="carousel-item" data-interval="100">
                  <img src={image10} className={`d-block w-100 ${Style.Img}`} height={'510px'} alt="PaintDaily" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            {/* All Categories */}

            <h2 id="category" className={Style.mid_text}>Explore By Category</h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              <SwiperSlide className={Style.swiper_slide}>
                <Link to="/Interior">
                  <img className={Style.category_image} src={interior} />
                </Link>
              </SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}>
                <Link to="Exterior">
                  <img className={Style.category_img} src={exterior} />
                </Link>
              </SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><Link to="/WallPaper"><img className={Style.category_img} src={wallpaper} /></Link></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><Link to="/BrushesRoller"><img className={Style.category_img} src={paintbrushes} /></Link></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><Link to="/PaintingTool"><img className={Style.category_img} src={accessories} /></Link></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><Link to="/Distemper"><img className={Style.category_img} src={dpaints} /></Link></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><Link to="/Emulsion"><img className={Style.category_img} src={emulsionpaints} /></Link></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><Link to="/Enamel"><img className={Style.category_img} src={enamelpaints} /></Link></SwiperSlide>
            </Swiper>


            <h2 className={Style.mid_text}>Explore By Products</h2>


            <div className={Style.prod_buckets}>
              <div className={Style.prod_buckets_row1}>
                <img src={h1} />
                <img src={h2} />
                <img src={h3} />
                <img src={h4} />
              </div>
              <div className={Style.prod_buckets_row2}>
                <img src={b1} />
                <img src={b2} />
                <img src={b3} />
                <img src={b4} />
              </div>
            </div>




            {/* Interior Paint */}

            <div className={Style.cat_header}>
              <h2 id="category" className={Style.most_selling_heading}>Interior Paint</h2>
              <div className={Style.view_btn1}>
                <Link to='/Interior'>View All</Link>
              </div>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>
              {
                InteriorPaint.map((dta, index) => (
                  <SwiperSlide className={Style.swiper_slide} key={index}>
                    <Link to={`/productPage/${dta.id}`}>
                      <div className={Style.product_section}>
                        <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                        <div className={Style.image_box}>
                        <img className={Style.product_img} src={dta.productColorImage} />
                      </div>
                        <div className={Style.desc_box}>
                          <p style={{ color: "Black" }}>{dta.productTitle}</p>
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
                  </SwiperSlide>

                ))
              }
            </Swiper>


            {/* Section Divider Image # 1  */}

            <h2 className={Style.mid_text}>Your home for paints</h2>

            <div className={Style.middle_image_1}>
              <img src={sp} />
            </div>



            {/* Exterior Paints */}

            <div className={Style.cat_header}>
              <h2 id="category" className={Style.most_selling_heading}>Exterior Paint</h2>
              <div className={Style.view_btn2}>
                <Link to='/Exterior'>View All</Link>
              </div>
            </div>

            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>
              {ExteriorPaint.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>

                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={dta.productColorImage} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
                      </div>

                      <div className={Style.desc_box}>
                        <span style={{ color: '#6e6d6a', fontSize: '18px', paddingLeft: '22px'  }}>{dta.productWeight}</span>
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
                </SwiperSlide>
              ))}
            </Swiper>

            <h2 className={Style.mid_text}>Our Popular Brands</h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              <SwiperSlide className={Style.swiper_slide}>
                <img className={Style.category_image} src={bergerpaint} />
              </SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}>
                <img className={Style.category_img} src={diamondpaint} />
              </SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><img className={Style.category_img} src={masterpaint} /></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><img className={Style.category_img} src={nipponpaint} /></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><img className={Style.category_img} src={duluxpaint} /></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><img className={Style.category_img} src={marvelpaint} /></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><img className={Style.category_img} src={happilacpaint}></img></SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}><img className={Style.category_img} src={superkotepaint} /></SwiperSlide>
            </Swiper>


            {/* middle image 2 */}
            <h2 className={Style.mid_text}>Colour your world</h2>
            <div className={Style.md_img}>
              <img src={mi2} />
            </div>

            {/* Distemper paints */}

            {/* <div className={Style.cat_header}>
              <h2 id="category" className={Style.most_selling_heading}>Distemper Paint</h2>
              <div className={Style.view_btn3}>
                <Link to='/Distemper'>View All</Link>
              </div>
            </div> */}
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>
              {Distemper.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>
                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={dta.productColorImage} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
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
                </SwiperSlide>
              ))}

            </Swiper>




            {/*Section Divider Image # 2*/}

            <div className={Style.middle_image_2}>
              <img src={paintbannerimg} />
            </div>

            {/* WallPaper */}
            {/* <h2 className={Style.mid_text}>Providing Quality Products</h2> */}
            <div className={Style.cat_header}>
              {/* <h2 id="category" className={Style.most_selling_heading}>Wallpaper</h2> */}
              {/* <div className={Style.view_btn4}>
                <Link to='/WallPaper'>View All</Link>
              </div> */}
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              {Wallpaper.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>
                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={dta.productColorImage} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Brushes & Rollers */}

            {/*Section Divider Image # 4*/}
            {/* <h2 className={Style.mid_text}>All at one place</h2>
            <div className={Style.middle_image_4}>
              <img src={pt} />
            </div> */}

            <div className={Style.cat_header}>
              {/* <h2 id="category" className={Style.most_selling_heading}>Brushes & Rollers</h2> */}
              {/* <div className={Style.view_btn5}>
                <Link to='/BrushesRoller'>View All</Link>
              </div> */}
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              {Brushes.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>
                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={dta.Img} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* middle image 2 */}
            {/* <h2 className={Style.mid_text}>Choose Color with Confidence</h2>
            <div className={Style.md_img1}>
              <img src={mi3} />
            </div> */}


            {/* Painting Tools */}

            <div className={Style.cat_header}>
              {/* <h2 id="category" className={Style.most_selling_heading}>Painting Tools</h2> */}
              {/* <div className={Style.view_btn6}>
                <Link to='/PaintingTool'>View All</Link>
              </div> */}
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              {Painting.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>
                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={data.Img} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
                      </div>
                      <div className={Style.bottom_box}>
                        <div className={Style.review_box}>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div className={Style.price_box} style={{ color: "Black" }}>
                          <p>Rs {dta.price}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={Style.empty}></div>
             {/* Painting Tools */}

             <div className={Style.cat_header}>
              {/* <h2 id="category" className={Style.most_selling_heading}>Enamel Paints</h2> */}
              {/* <div className={Style.view_btn3}>
                <Link to='/PaintingTool'>View All</Link>
              </div> */}
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              {Enamel.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>
                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={data.Img} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
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
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={Style.empty}></div>
             {/* Painting Tools */}

             <div className={Style.cat_header}>
              {/* <h2 id="category" className={Style.most_selling_heading}>Emulsion Paint</h2> */}
              {/* <div className={Style.view_btn2}>
                <Link to='/PaintingTool'>View All</Link>
              </div> */}
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={Style.mySwiper}>

              {Emulsion.map((dta, index) => (
                <SwiperSlide className={Style.swiper_slide} key={index}>
                  <Link to={`/productPage/${dta.id}`}>
                    <div className={Style.product_section}>
                      <span style={{ color: '#6e6d6a', fontSize: '16px', paddingLeft: '22px', fontWeight: '600' }}>Code: {dta.productColorName}</span>
                      <div className={Style.image_box}>
                        <img className={Style.product_img} src={dta.productColorImage} />
                      </div>
                      <div className={Style.desc_box}>
                        <p style={{ color: "Black" }}>{dta.productTitle}</p>
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
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={Style.empty}></div>
          </main>
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
  )
}
export default Home;
