// components/Slider.js
'use client' // (If you're using App Router)
import '../globals.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.css'
import Postcard from './Postcard'
import { useRef, useState } from 'react'
import { savejob } from '../../lib/api'
export default function JobSlider({ jobs = [] }) {

    const [jobopen, setjobopen] = useState(0)
    const [selectedjobid, setselectedjobid] = useState("")
    function openjob(val){
    
      setselectedjobid(val)
      setjobopen(1)
    
    }
     function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
    
    async function save(job) {
      const token = getCookie('token'); // <--- Get token from cookies
      console.log('Token:', token);
    
      if (!token) {
        window.location = 'https://cfs.infibrain.com/Employee/Login'
        return;
      }
    
      try {
        const data = await savejob(token, job.id);
        console.log('API Response:', data);
    
        if (data?.error || data?.success === false) {
          // Show an alert or toast
          
             window.location = 'https://cfs.infibrain.com/Employee/Login'
    
          return;
        }
    
        // If successful
        window.location.reload();
      } catch (error) {
        console.error('Error saving job:', error);
        window.location = 'https://cfs.infibrain.com/Employee/Login'
      }
    }
    function getDaysAgo(dateString) {
  const postedDate = new Date(dateString);
  const today = new Date();

  // Remove time part for accurate comparison
  postedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - postedDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays > 1) {
    return `${diffDays} days ago`;
  } else {
    return "In the future";
  }
}

const [sjob, setsjob] = useState(null)
const [showshare, setshowshare] = useState(0)
function show(jobid){
  setshowshare(1)
  setsjob(jobid)
}
  const sidemenuRef = useRef();
  const handleclose = (e) => {
    if (!sidemenuRef.current.contains(e.target)) {
      setshowshare(0)
    }
  };

  return (<>
  
   {showshare===1&&
    
<div className="sharewindow" onClick={handleclose}>
  <div className="subshare" ref={sidemenuRef}>
    <p>Copy the Job Link</p>
    <div className="det">
      <div className="link">
        {`https://cfs.infibrain.com/JobDetail/${sjob}`}
      </div>
      <button
        onClick={() => {
          navigator.clipboard
            .writeText(`https://cfs.infibrain.com/JobDetail/${sjob}`)
            .then(() => {
              alert("Job link copied to clipboard!");
              setshowshare(0)
            })
            .catch((err) => {
              console.error("Failed to copy: ", err);
            });
        }}
      >
        Copy
      </button>
    </div>
  </div>
</div>

    
    
    }
       {jobopen===1&&
      <Postcard jobid={selectedjobid} setjobopen={setjobopen}  />}
   <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      loop
    >
      {jobs.map((job, index) => (

        
        <SwiperSlide key={index}>

            
      <div className="jobcard center"   onClick={e=>openjob(job)}>
   
   <div className="jobtop " >
               <img
        
  src={job.jobImage || "/Assets/cfslogo.svg"}
  alt="Company Logo"
  onError={(e) => {
    e.target.onerror = null; // Prevents infinite loop
    e.target.src = "/Assets/cfslogo.svg"; // Fallback logo
  }}
/>
     
            <div className="job-info">
               <h4>{job.title}</h4>

                 <p>     <img src="/Assets/loc.png" alt=""/> {job.companyState} , {job.companyCity}</p>            </div>

   <div className="topend">

  
{job.applicationstatus&&job.applicationstatus.length>0?
       <div className="status">
          {job.applicationstatus[0].applicationStatus}
           </div>
           :<></>


}

     {job.issave===true?
       <div className="save" >
                    <img src="/Assets/save.png" alt=""/>
                 </div>
    :
    
      <div className="save" onClick={(e)=>{
        e.stopPropagation();
       
       save(job)}}>
                    <img src="/Assets/gsave.svg" alt=""/>
                 </div>
    
    }
     
        
     </div>
    
    

   </div>
    <div className="jobtags">
      {job.jobType&&
      
      <>
      <div className="jobtag">
        {job.jobType}
      </div>
      </>
      }
       {job.location&&
      
      <>
      <div className="jobtag">
        {job.location}
      </div>
      </>
      }
       {job.industry&&
      
      <>
      <div className="jobtag">
        {job.industry}
      </div>
      </>
      
      }

 {job.salaryRange&&
      
      <>
      <div className="jobtag">
        {job.salaryRange}
      </div>
      </>
      
      }

      
            
           
            </div>
         <p dangerouslySetInnerHTML={{ __html: job.description.substring(0, 300) }} />
            <div className="job-share">
                <p>{getDaysAgo(job.postedDate)} </p>
                <button onClick={e=>{
e.stopPropagation();
show(job.id)                  
                }} ><img src="/Assets/share.png" alt=""/></button>
            </div>

   </div>


        </SwiperSlide>
      ))}
    </Swiper>
  </>

   
  )
}
