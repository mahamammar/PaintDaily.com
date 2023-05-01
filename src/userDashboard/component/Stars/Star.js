import React from 'react'
import {FaStar, FaStarHalfAlt,} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

export const Star = ({stars}) => {
    console.log("Star", stars);
    const Stars = parseInt(stars)
  const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;
        return ( <span >
            {
                Stars>= index+1 ? (<FaStar style={{color:"yellow"}}/>) : Stars >= number ? (<FaStarHalfAlt  style={{color:"yellow"}} />) : (<AiOutlineStar style={{color:"yellow"}}/>)
            }
        </span>
        ) 
    })
    return (
        <div>
            {ratingStar}
        </div>
  )
}
