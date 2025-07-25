'use client'
import './Filtermenu.css'
import '../globals.css'
import data from './data.json'
import { useEffect, useRef, useState } from 'react';
import { getJobById } from '../../lib/api';
export default  function Postcard({jobid,setjobopen}) {
    console.log(jobid)
const [jobData, setjobData] = useState(null)
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


  return (
   <div className="filtermenu" >


    <div className="post-details" >
      {(jobData&&jobid)?
<>
        <img src="/Assets/close.svg" className='cloo' onClick={e=>setjobopen(0)
        } alt="" />
        <div className="statscards">
            <div className="statscard">

                <p>Hourly</p>
                <h4>${jobData.salary.min} - ${jobData.salary.max}</h4>
            </div>
            <div className="statsbreak"></div>
               <div className="statscard">

                <p>Job Type</p>
                <h4>{jobData.jobType.name}</h4>
            </div>

            <div className="statsbreak"></div>
               <div className="statscard">

                <p>Experience</p>
                <h4>{jobData.requirements.experienceLevel}</h4>
            </div>

            <div className="statsbreak"></div>
               <div className="statscard">

                <p>Expires in </p>
                <h4>{formatDate(jobData.applicationDeadline)}</h4>
            </div>
        </div>
         <img className='postimg' src="/Assets/job.png" alt="" />
     
        <h4>{jobData.title}</h4>
        <p>Details</p>
        <div className="otherinfo">
                    <img  src={jobData.company.logo?jobData.company.logo:"/Assets/cfslogo.svg"} alt="" />
<div className="personinfo">
    <h4>{jobData.company.name&&jobData.company.name}</h4>
    <p>Company</p>
</div>
<button>{jobData.company.contactNumber&&jobData.company.contactNumber}</button>
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
            <div className="tagben">
                Health Insurance
            </div>
        </div>        <p>                  
Requirements</p>
          <div className="address">
            <img src="/Assets/req.svg" alt="" />
            {jobData.requirements.qualifications}
        </div>
 <p>Company Overview</p>
 <span>                     {jobid.description}

 
 
 </span>
 
  <p>Responsibilities</p>
<span>  {jobid.description}

</span>
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
