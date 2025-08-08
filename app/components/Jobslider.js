// components/Slider.js
'use client' // (If you're using App Router)
import '../globals.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.css'
export default function JobSlider({ jobs = [] }) {
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

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      loop
    >
      {jobs.map((job, index) => (

        
        <SwiperSlide key={index}>

            
      <div className="jobcard center"  >
   
   <div className="jobtop " >
            <img src="/Assets/cfslogo.svg" alt=""/>
            <div className="job-info">
               <h4>{job.title}</h4>
                 <p>     <img src="/Assets/loc.png" alt=""/>{job.jobLocationCity}, {job.jobLocationState}</p>
            </div>

{job.applicationstatus&&job.applicationstatus.length>0?
       <div className="status">
          {job.applicationstatus[0].applicationStatus}
           </div>
           :<></>


}
    

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
                <button><img src="/Assets/share.png" alt=""/></button>
            </div>

   </div>


        </SwiperSlide>
      ))}
    </Swiper>
  )
}
