'use client'
import './Filtermenu.css'
import '../globals.css'
import data from './data.json'
import { useEffect, useRef, useState } from 'react';
import { getJobById } from '../../lib/api';
export default  function Postcard({jobid,setjobopen}) {
    console.log(jobid)
const [jobData, setjobData] = useState(null)
function formatExperience(experience) {
  if (!experience) return '';

  const yearMatch = experience.match(/(\d+)\s*Year/);
  const monthMatch = experience.match(/(\d+)\s*Month/);

  const years = yearMatch ? parseInt(yearMatch[1]) : 0;
  const months = monthMatch ? parseInt(monthMatch[1]) : 0;

  return `${years}Y & ${months}M`;
}
function formatDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


// Ex
  useEffect(() => {
    if (!jobid) return;
    async function fetchJob() {
      try {
         const token = getCookie('token'); // <--- Get token from cookies
        console.log('Token:', token);

      
        const data = await getJobById(token,jobid.id);
      console.log(data)
      setjobData(data)
      } catch (err) {
        console.error('Failed to fetch job:', err);
      } finally {
  
      }
    }

    fetchJob();
  }, [jobid]); // Fetch data only when jobid changes


  const formatSalary = (amount) => {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M$`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(0)}k$`;
  return `${amount}$`;
};
  const sidemenuRef = useRef();
  const handleFilterClick = (e) => {
    if (!sidemenuRef.current.contains(e.target)) {
      setjobopen(0)
    }
  };

  function getDaysRemaining(dateString) {
  const deadline = new Date(dateString);
  const today = new Date();

  // Remove time part for accurate day count
  deadline.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} left`;
  } else {
    return "0 Days";
  }
}

// JSX usage

  return (
   <div className="filtermenu bot-anim" onClick={handleFilterClick} >


    <div className="post-details"  ref={sidemenuRef}>
      {(jobData&&jobid)?
<>
        <img src="/Assets/close.svg" className='cloo' onClick={e=>setjobopen(0)
        } alt="" />
        <div className="statscards">
            <div className="statscard">

                <p>{jobData?.salaryType}</p>
                <h4>  {formatSalary(jobData.salary.min)} - {formatSalary(jobData.salary.max)}
</h4>
            </div>
            <div className="statsbreak"></div>
               <div className="statscard">

                <p>Job Type</p>
                <h4>{jobid.jobType}</h4>
            </div>

            <div className="statsbreak"></div>
               <div className="statscard">

                <p>Experience</p>
                <h4>{formatExperience(jobData.requirements.experienceLevel)}</h4>
            </div>

            <div className="statsbreak"></div>
               <div className="statscard">

                <p>Expires in </p>
                {jobData&&jobData.applicationDeadline&&
                  <h4>{getDaysRemaining(jobData.applicationDeadline)}</h4>
                }
              
            </div>
        </div>
        <img
        className='postimg'
  src={jobData.jobimage || "/Assets/job.png"}
  alt="Company Logo"
  onError={(e) => {
    e.target.onerror = null; // Prevents infinite loop
    e.target.src = "/Assets/job.png"; // Fallback logo
  }}
/>
     
        <h4>{jobData.title}</h4>
        <p>Details</p>
        <div className="otherinfo">
<img
  src={jobData.company.logo || "/Assets/cfslogo.svg"}
  alt="Company Logo"
  onError={(e) => {
    e.target.onerror = null; // Prevents infinite loop
    e.target.src = "/Assets/cfslogo.svg"; // Fallback logo
  }}
/><div className="personinfo">
    <h4>{jobData.company.name&&jobData.company.name}</h4>
    <p>Company</p>
</div>
{jobData.company.contactNumber&&
  <button>{jobData.company.contactNumber}</button>
}

        </div>
        <div className="address">
               <img src="/Assets/loc2.svg" alt="" />
            {jobid.companyaddress}
        </div>
          <div className="address">
                 <img src="/Assets/add2.svg" alt="" />
                     {jobid.companyaddressTo}

        </div>
        <p>Benefits</p>
        <div className="bentags">
          {jobData.benefits.map(val=>(
             <div className="tagben">
               {val.name}
            </div>
          ))}
           
        </div>        <p>                  
Requirements</p>
          <div className="address">
            <img src="/Assets/req.svg" alt="" />
            {jobData.requirements.qualifications}
        </div>
 <p>Company Overview</p>
                <span dangerouslySetInnerHTML={{ __html: jobData.companyOverview }} />

 

 
  <p>Responsibilities</p>
  <span dangerouslySetInnerHTML={{ __html: jobData.responsibilities }} />
<button className='applybtn' onClick={e=>window.location="https://cfs.infibrain.com/Employee/Login"}>Apply Now</button>
<div className="pad">

</div>

</>
:
<h4>Loading...</h4>

      }
    </div>


   </div>
    
  );
}
