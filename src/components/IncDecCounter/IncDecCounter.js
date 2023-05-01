import {useState} from "react";
import Style from './IncDecCounter.module.css';
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    
    
    setNum(Number(num)+1);
    
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }


    localStorage.setItem("quantity",JSON.stringify(num));
   return(
    <>
    <div className={Style.id_counter}>
    <div className="col-xl-6">
    <div className="input-group">
  <div className="input-group-prepend">
    <button style={{width: '50px', backgroundColor: '#7f4a81', color: 'white', fontSize:'20px'}} className="btn" type="button" onClick={decNum}>-</button>
  </div>
  <input  style={{textAlign: 'center', fontWeight: '600', fontSize:'20px'}} type="text" className="form-control" value={num} onChange={handleChange}/>
  <div className="input-group-prepend">
    <button style={{width: '50px', backgroundColor: '#7f4a81', color: 'white', fontSize:'20px'}} className="btn" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
</div>
   </>
  );
}

export default IncDecCounter;