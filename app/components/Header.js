'use client'
import './Header.css'
import '../globals.css'
import Filtermenu from './Filtermenu';
import { useState } from 'react';
import Mobilemenu from './MobileMenu';
export default function Header({filters,queries}) {
  const [headerqueries, setheaderqueries] = useState(queries.queries)
 console.log(queries.queries)
const [query, setquery] = useState("")
  const [showmenu, setshowmenu] = useState(0)
    const [showmobmenu, setshowmobmenu] = useState(0)

     const handleKeyDown = (e) => {
    if (e.key === "Enter") {

 const params = new URLSearchParams();



   params.append("search", query)
  

  window.location=`/jobs?${params.toString()}`





    }
  };

     const redirectTo = (val) => {
 
 const params = new URLSearchParams();



   params.append("search", val)
  

  window.location=`/jobs?${params.toString()}`





    
  };
 
  const [showlogo, setshowlogo] = useState(1)
  return (
  <div className="pheader">
      <div className="header">
      {
        showmenu===1&&
              <Filtermenu filters={filters} setshowmenu={setshowmenu} />
      }
      {
        showmobmenu===1&&
              <Mobilemenu setshomobwmenu={setshowmobmenu} />
      }
{showlogo===1?

       <a href="/"> <img src="/Assets/logo.png" alt=""/></a>
      
      :
      
        <div className="searcharea mobsearcharea">
               <div className="search">
            <img src="/Assets/search.svg" alt=""/>
            <input type="tex.t"  onKeyDown={handleKeyDown} onChange={e=>setquery(e.target.value)} placeholder="ex. graphic designer"/>

          <div className="ddown">
              {query&&headerqueries&&headerqueries
               .filter((val) => val.toLowerCase().includes(query.toLowerCase()))
              .map
              
              
              (val=>(
             
              <div className="query" onClick={e=>redirectTo(val)}>
                {val}
                                     

              </div>
            ))}
          </div>
          <img className='searchcl' onClick={e=>setshowlogo(1)} src="/Assets/cross.svg" alt="" />

        </div>
              <div className="filter d-top" onClick={e=>showmenu===0 ?setshowmenu(1):setshowmenu(0)}>
                        <img src="/Assets/filter.svg" alt=""/>

        </div>
        </div>
     
      }
        <div className="nav-links d-top">
               <a href="/">Home</a>
            <a href="/jobs">Jobs</a>
        </div>

        <div className="searcharea d-top">
               <div className="search">
            <img src="/Assets/search.svg" alt=""/>
            <input type="tex.t"  onKeyDown={handleKeyDown} onChange={e=>setquery(e.target.value)} placeholder="ex. graphic designer"/>

          <div className="ddown">
              {query&&headerqueries&&headerqueries
               .filter((val) => val.toLowerCase().includes(query.toLowerCase()))
              .map
              
              
              (val=>(
             
              <div className="query" onClick={e=>redirectTo(val)}>
                {val}
                                     

              </div>
            ))}
          </div>

        </div>
              <div className="filter d-top" onClick={e=>showmenu===0 ?setshowmenu(1):setshowmenu(0)}>
                        <img src="/Assets/filter.svg" alt=""/>

        </div>
        </div>
     
      

        <div className="login d-top" onClick={e=>window.location='https://cfs.infibrain.com/Employee/Login'} >
            Login
        </div>
        <div className="mob-btns">
             {showlogo===1&&
              <div className="mob-btn1"   onClick={e=>setshowlogo(0)}>
           <img src="/Assets/search.svg" alt="" />
       </div>}
       <div className="mob-btn1" onClick={e=>setshowmenu(1)}>
           <img src="/Assets/fitler2.svg" alt="" />
       </div>
           <div className="mob-btn1" onClick={e=>setshowmobmenu(1)}>
           <img src="/Assets/bar.svg" alt="" />
       </div>
        </div>
        
    </div>
  </div>
    
  );
}
