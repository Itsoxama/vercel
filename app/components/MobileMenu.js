'use client'
import './Header.css'
import '../globals.css'
import Filtermenu from './Filtermenu';
import { useState } from 'react';
export default function Mobilemenu({setshomobwmenu}) {
  
 
  return (
<div className="res-menu">
    <img onClick={e=>setshomobwmenu(0)} src="/Assets/res.svg" alt="" />
    <a href="/home">Home</a>
       <a href="/jobs">Jobs</a>
          <a href="/login">Login/Register</a>

</div>
  )


}