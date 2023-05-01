import React, {useState,useEffect} from 'react'
import logo from '../../assets/Images/logo.png';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Style from "./Navbar.module.css";
import user from "../../assets/Images/user.png";
import cart2 from "../../assets/Images/cart1.png";
import { useSelector } from 'react-redux';
import axios from 'axios';
function Navbar() {

  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const posts = useSelector(state => state.posts);
  const id = posts.id;
  useEffect(()=>{
    axios({
        method: 'get',
        url: `http://localhost:9090/api/getcart/${id}`
      }).then((res) => {
        console.log(res);
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })
},[]);
   useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:9090/api/GetAllCatogory`,
    }).then((res) => {
      console.log("All Catogories",res.data);
      setCategory(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  let count = useSelector((state)=>state.counter.value);
  count=count+posts.quantity;
  console.log("count",count);
  const navigate = useNavigate();
  const handleLogin = (e) =>{
      e.preventDefault();
      navigate("/login");
    }
  const handleRedirect = (e) =>{
      e.preventDefault();
      navigate("/dashboard");
  }
  const handleLogout = ()=>{
      localStorage.setItem("check",false);
      console.log(localStorage.getItem("check"));
      navigate("/BuyerLogin");


  }
  return (
    <>
    <nav className={Style.nav_bar}>
        <Link to={"/"}><img className={Style.nav_logo} src={logo}/></Link>
        <input type="checkbox" className={Style.check_box} />
        <label for="check" className={Style.checkbtn_hb}>
            <i class="fa fa-bars"></i>
        </label>
        <ul className={Style.nav}>
            <li className={Style.nav_item}><Link to="/">Home</Link></li>
            {/* <li className={Style.nav_item}><a href="#">Categories</a></li> */}
            <div className={Style.dropdown}>
                  <button className={Style.dropbtn}>Categories</button>
                  <div className={Style.dropdown_content}>
                  <Link to="/Interior">Interior Paint</Link>
                  <Link to="/Exterior">Exterior Paint</Link>
                  <Link to="/Distemper">Distemper Paint</Link>
                  <Link to="/Emulsion">Emulsion Paint</Link>
                  <Link to="/Enamel">Enamel Paint</Link>
                  <Link to="/WallPaper">Wallpaper</Link>
                  <Link to="/BrushesRoller">Brushes & Rollers</Link>
                  <Link to="/PaintingTool">Painting Tools</Link>
                  </div>
            </div>

            <li className={Style.nav_item}><Link to="/aboutUs">About</Link></li>
            <li className={Style.nav_item}><Link to="/Photos">Photos</Link></li>
            <li className={Style.nav_item}><Link to="/CreateAccount">Login</Link></li>
            <li style={{listStyle:'none'}}><Link to="/cart" style={{color:'black'}}><img src={cart2} height={'30px'}  alt="Paintdaily"/>{data.length}</Link></li>
        
        </ul>
          <div className="wrap">
               {/* <div className={Style.search}>
                  <input type="text" className={Style.searchTerm} placeholder="Search 'white interior paint'"/>
                  <button type="submit" className={Style.searchButton}>
                    <i className="fa fa-search"></i>
                 </button>
               </div> */}
              <div className={Style.Content}>
                <img className={Style.Profile} src={user} alt={"paintdaily"}/>
                  <div className={Style.dropdownContent}>
                      <ul style={{listStyle:'none'}}>
                          <li style={{paddingTop:'35px',marginLeft:'-32px'}}><button onClick={handleLogout} className={Style.LoginBtn}>LogOut</button></li>
                          <li style={{paddingTop:'15px',marginLeft:'-32px'}}><Link to={"/dashboard"}><button className={Style.LoginBtn}> Seller Dashboard</button> </Link></li>
                          <li style={{paddingTop:'15px',marginLeft:'-32px'}}><Link to={"/buyer_dashboard"}><button className={Style.LoginBtn}> Buyer Dashboard</button> </Link></li>
                      </ul>
                  </div>
              </div>
        </div>
    </nav>
</>
        
          
  )
}

export default Navbar;