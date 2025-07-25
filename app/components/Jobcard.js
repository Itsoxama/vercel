'use client'
import './Jobcard.css'
import '../globals.css'
import { useState } from 'react';
import Postcard from './Postcard';
export default function Jobcard({job}) {
const [jobopen, setjobopen] = useState(0)
const [selectedjobid, setselectedjobid] = useState("")
function openjob(val){

  setselectedjobid(val)
  setjobopen(1)

}
function formatDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

  return (
    <>
    
     {jobopen===1&&
    <Postcard jobid={selectedjobid} setjobopen={setjobopen}  />}
     <div className="jobcard" onClick={e=>openjob(job)}>
   
   <div className="jobtop " >
            <img src="/Assets/cfslogo.svg" alt=""/>
            <div className="job-info">
               <h4>{job.title}</h4>
                 <p>     <img src="/Assets/loc.png" alt=""/>{job.companyaddress}</p>
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
       {job.sector&&
      
      <>
      <div className="jobtag">
        {job.sector}
      </div>
      </>
      }

      
            
           
            </div>
            <p>{job.description.substring(0,300)}</p>
            <div className="job-share">
                <p>Expiration:  {formatDate(job.expiration)}</p>
                <button><img src="/Assets/share.png" alt=""/></button>
            </div>

   </div>
    </>
  
    
  );
}
