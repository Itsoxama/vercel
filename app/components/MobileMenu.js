'use client'
import './Header.css'
import '../globals.css'
import Filtermenu from './Filtermenu';
import { useRef, useState } from 'react';
export default function Mobilemenu({setshomobwmenu}) {
    const sidemenuRef = useRef();
    const handleFilterClick = (e) => {
      if (!sidemenuRef.current.contains(e.target)) {
        setshomobwmenu(0)
      }
    };
  
 
  return (


     <div className="filtermenu bot-anim" onClick={handleFilterClick} >

<div className="res-menu" ref={sidemenuRef}>
    <img onClick={e=>setshomobwmenu(0)} src="/Assets/res.svg" alt="" />
    <div onClick={e=>setshomobwmenu(0)} className="clline">

    </div>
    <a href="/">Home</a>
       <a href="/jobs">Jobs</a>
          <a href="https://cfs.infibrain.com/Employee/Login">Login/Register</a>

</div>

    </div>


  )


}