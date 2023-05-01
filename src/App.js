import React, { useState } from 'react'; 
import "swiper/css/bundle";
import Home from './components/home/Home';
import Login from './components/login/Login';
import BuyerLogin from './components/buyerLogin/BuyerLogin';
import SignUp from './components/signup/SignUp';
import BuyerAccount from './components/BuyerAccount/BuyerAccount';
import CreateAccount from './components/CreateAccount/CreateAccount';
import {Routes, Route, Navigate,} from 'react-router-dom';
import Error404 from './components/Error/Error404';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import AboutUs from './components/aboutus/AboutUs';
import LoginAccounts from './components/LoginAccounts/LoginAccounts';
import Help from './components/help/Help';
import Policy from './components/policy/Policy';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import ProductPage from './components/productPage/ProductPage';
import Photos from './components/Photos/photos';
import Bedroom from './components/Gallery/Bedroom/Bedroom';
import Banks from './components/Gallery/Banks/Banks';
import CafeAndRestaurant from './components/Gallery/CafeAndRestaurant/CafeAndRestaurant';
import CafeteriaImages from './components/Gallery/CafeteriaImages/CafeteriaImages';
import CeoOffice from './components/Gallery/CeoOffice/CeoOffice';
import DiningHall from './components/Gallery/DiningHall/DiningHall';
import GovtBuildings from './components/Gallery/GovtBuildings/GovtBuildings';
import KidsRoom from './components/Gallery/KidsRoom/KidsRoom';
import MeetingRoomImages from './components/Gallery/MeetingRoomImages/MeetingRoomImages';
import StudyRoom from './components/Gallery/StudyRoom/StudyRoom';
import Kitchen from './components/Gallery/Kitchen/Kitchen';
import WaitingArea from './components/Gallery/WaitingArea/WaitingArea';
import Interior from "./components/Categories/Interior/interior";
import Exterior from "./components/Categories/Exterior/exterior";
import Distemper from "./components/Categories/Distemper/distemper";
import Emulsion from "./components/Categories/Emulsion/emulsion";
import Enamel from "./components/Categories/Enamel/enamel";
import Cafeteria from "./components/Categories/Cafeteria/cafeteria";
import Bank from "./components/Categories/Bank/bank";
import Hotel from "./components/Categories/Hotel/hotel";
import Hospital from "./components/Categories/Hospital/hospital";
import MeetingRoom from "./components/Categories/MeetingRoom/meetingroom";
import CorporateOffice from "./components/Categories/CorporateOffice/corporateoffice";
import EducationalInstitutes from "./components/Categories/EducationalInstitutes/educationalinstitutes";
import GovernmentBuilding from "./components/Categories/GovernmentBuilding/governmentbuilding";
import PaintingTool from "./components/Categories/Painting Tool/paintingTool";
import BrushesRoller from "./components/Categories/Brushes &Roller/brushesRoller";
import WallPaper from "./components/Categories/Wallpaper/wallPaper";
import UserDashboard from './userDashboard/userDashboard';
import TermAndConditions from "./components/Term&conditions/TermAndConditions";
import MostSellingProducts from "./components/MostSellingProducts/MostSellingProducts";
import AllProduct from "./userDashboard/component/AllProduct/AllProduct";
import Orders from "./userDashboard/component/Orders/Orders";
import Purchases from "./userDashboard/component/Purchases/Purchases";
import Messages from "./userDashboard/component/Messages/Messages";
import Settings from "./userDashboard/component/Settings/Settings";
import Checkout from './components/Checkout/Checkout';
import Carts from "./components/Carts/Carts";
import BuyNow from "./components/BuyNow/BuyNow";
import BuyerDashboard from "./buyerDashboard/buyerDashboard";
import BuyerMessages from "./buyerDashboard/component/buyerMessages/buyerMessages";
import BuyerSettings from "./buyerDashboard/component/buyerSettings/buyerSettings";
import View from "./userDashboard/component/SideBarComponent/View/View";
import AdminDashboard from "./adminDashboard/adminDashboard";
import AdminLogin from "./AdminLogin/AdminLogin";
import Edit from "./userDashboard/component/SideBarComponent/Edit/Edit";
import Delivered from './buyerDashboard/component/Delivered/Delivered';
import SellerDeliverd from './userDashboard/component/SellerDelivered/SellerDeliverd';
function App() {
  const [check,setCheck]=useState(true);
  return (
    <React.Fragment>
    {check?
    <>
      {/* <UserDashboard/> */}
       {/* <AdminDashboard/> */}
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/AdminLogin' element={<AdminLogin/>}/>
         <Route path='/LoginAccounts' element={<LoginAccounts/>}/>
         <Route path='/BuyerLogin' element={<BuyerLogin/>}/>
         <Route path='/CreateAccount' element={<CreateAccount/>}/>
         <Route path='/forgotpassword' element={<ForgotPassword/>}/>
         <Route path='/aboutus' element={<AboutUs/>}/>
         <Route path='/customer-help' element={<Help/>} />
         <Route path='/ProductPage/:id' element={<ProductPage/>} />
         <Route path='/privacy-policy' element={<Policy/>}/>
         <Route path="/term-and-conditions" element={<TermAndConditions/>}/>
         <Route path='/contact-us' element={<Contact/>}/>
         <Route path='/Interior' element={<Interior/>}/>
         <Route path='/Exterior' element={<Exterior/>}/>
         <Route path='/Distemper' element={<Distemper/>}/>
         <Route path='/Emulsion' element={<Emulsion/>}/>
         <Route path='/Enamel' element={<Enamel/>}/>
         <Route path='/PaintingTool' element={<PaintingTool/>}/>
         <Route path='/WallPaper' element={<WallPaper/>}/>
         <Route path='/BrushesRoller' element={<BrushesRoller/>}/>
         <Route path='/MostSellingProducts' element={<MostSellingProducts/>}/>
         <Route path='/dashboard' element={<UserDashboard/>}/>
         <Route path='/buyer_dashboard' element={<BuyerDashboard/>}/>
         <Route path='/GovernmentBuiding' element={<GovernmentBuilding/>}/>
         <Route path='/MeetingRoom' element={<MeetingRoom/>}/>
         <Route path='/Hospital' element={<Hospital/>}/>
         <Route path='/Bank' element={<Bank/>}/>
         <Route path='/Hotel' element={<Hotel/>}/>
         <Route path='/Photos' element={<Photos/>}/>
         <Route path='/Cafeteria' element={<Cafeteria/>}/>
         <Route path='/CorporateOffice' element={<CorporateOffice/>}/>
         <Route path='/EducationalInstitutes' element={<EducationalInstitutes/>}/>
         <Route path='/allProducts' element={<AllProduct/>} />
         <Route path="/orders" element={<Orders/>}/>
         <Route path="/chat" element={<Messages/>} />
         <Route path="/setting" element={<Settings/>} />
         <Route path="/Bedroom" element={<Bedroom/>} />
         <Route path="/Banks" element={<Banks/>} />
         <Route path="/CafeAndRestaurant" element={<CafeAndRestaurant/>} />
         <Route path="/MeetingRoomImages" element={<MeetingRoomImages/>} />
         <Route path="/StudyRoom" element={<StudyRoom/>} />
         <Route path="/WaitingArea" element={<WaitingArea/>} />
         <Route path="/KidsRoom" element={<KidsRoom/>} />
         <Route path="/GovtBuildings" element={<GovtBuildings/>} />
         <Route path="/DiningHall" element={<DiningHall/>} />
         <Route path="/CeoOffice" element={<CeoOffice/>} />
         <Route path="/Kitchen" element={<Kitchen/>} />
         <Route path="/CafeteriaImages" element={<CafeteriaImages/>} />
         <Route path="/cart" element={<Carts/>} />
         <Route path="/Reviews/:id" element={<Reviews/>} />
         <Route path="/BuyerAccount" element={<BuyerAccount/>} />
         <Route path="*" element={<Error404/>}/>
         <Route path="/Checkout" element={<Checkout/>}/>
         <Route path="/buyNow" element={<BuyNow/>}/>
         <Route path="/buyer-chat" element={<BuyerMessages/>}/>
         <Route path="/buyer-setting" element={<BuyerSettings/>}/>
         <Route path="/View/:id" element={<View/>}/>
         <Route path="/edit/:id" element={<Edit/>}/>
         <Route path='/delivered-order' element={<Delivered/>}/>
         <Route path='delivered_order' element={<SellerDeliverd/>}/>
         <Route path='/adminDashboard/*' element={<AdminDashboard/>}/>
        </Routes>
    </>:null
    }
    </React.Fragment>
  );
}

export default App;
