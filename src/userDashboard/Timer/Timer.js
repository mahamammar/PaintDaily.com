import React from 'react'
import { useState,useEffect } from 'react'
export default function Timer({duration}) {

    const [time,setTime] = useState(duration);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1000)
        },1000)
    },[time]);

    const getFormattedTime=(millisecond)=>{
        let total_Second = parseInt(Math.floor(millisecond/1000));
        let total_minutes = parseInt(Math.floor(total_Second/60));
        let total_hours = parseInt(Math.floor(total_minutes/60));
        let days = parseInt(Math.floor(total_hours/24));

        let seconds = parseInt(total_Second % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${days}: ${hours}: ${minutes}: ${seconds}`;

    }
  return (
    <div>{getFormattedTime(time)}</div>
  )
}
