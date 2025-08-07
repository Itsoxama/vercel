
"use client";
import "./About.css"
import "../globals.css"
import Rslider from "../components/Rslider"
import { useState } from "react";

export default function Planpage() {
        const [indexes, setindexes] = useState([])

 const toggleSelection = (index) => {
    setindexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Remove if already selected
        : [...prev, index]                // Add if not
    );
  };
  return (
<div className="mainpage">
    <img className="abt" src="/Assets/about.webp" alt="" />

      <div className="breadcrumb bl-high">
    <a href="/">Home   </a>
    
    /
    <a href="/about"> About us</a>
  </div>
 <h5 className='bld nomar'>About Us</h5>
    <div className="history">
        <h4>Our History</h4>
        <p>Founded in 2005, CFS has been <span>committed to delivering</span> exceptional services in [Industry]. <span>Over the years</span>, we have expanded our reach <span>and capabilities, ensuring</span> our clients <span>receive</span> top-tier solutions Founded in 2005, CFS has been <span>committed to delivering</span> exceptional services in [Industry]. <span>Over the years</span>, we have expanded our reach <span>and capabilities, ensuring</span> our clients <span>receive</span> top-tier solutions

        </p>
        <button>Start Your Journey With Us</button>
    </div>
    <h5>What Drives <span className="bl-high">
        Us</span></h5>
 <div className="visions">
        
        <div    className={`vision ${indexes.includes(1) ? "selectedab" : ""}`}
          onClick={() => toggleSelection(1)}>
            <img  src="/Assets/vis.svg" alt="" />
            <h4>Mission</h4>
            <p>CFS is your platform for finding job opportunities that match your skills and aspirations. Whether in hospitality, trades, or professional industries, this space is built to help you connect with businesses easily and confidently. Designed for simplicity, reliability, and real opportunities, CFS hands you the steering wheel to navigate your career journey.
                
            </p>

    </div>
       <div    className={`vision ${indexes.includes(2) ? "selectedab" : ""}`}
          onClick={() => toggleSelection(2)}>
            <img  src="/Assets/vision.svg" alt="" />
            <h4>Vision</h4>
            <p>CFS is built to make job opportunities accessible for everyone—from businesses looking for the right talent to individuals searching for the right job. The goal is to create a space where success and growth thrive. By using smart technology and a human-first approach, CFS strives to make the hiring process easier and more efficient for all.

            </p>

    </div>
    <div 
      className={`vision ${indexes.includes(0) ? "selectedab" : ""}`}
          onClick={() => toggleSelection(0)}
    >
            <img  src="/Assets/vis.svg" alt="" />
            <h4>Innovation & Growth</h4>
            <p>Always improving to provide smarter, simpler ways to find opportunities and connect businesses with great talent. By embracing new technologies and forward-thinking strategies, CFS ensures that job seekers and employers experience a faster, more intuitive, and more effective hiring process.

            </p>

    </div>
     
  
     <div    className={`vision ${indexes.includes(3) ? "selectedab" : ""}`}
          onClick={() => toggleSelection(3)}>
            <img  src="/Assets/vision.svg" alt="" />
            <h4>Excellence</h4>
            <p>Is there such a thing as excellence? We will find out together. At CFS, excellence is more than a goal—it’s a journey. By continuously refining processes, enhancing user experience, and pushing the boundaries of what’s possible, we strive to create a job connection platform that can be relied on.

            </p>

    </div>

 </div>
</div>



  
  )
}
