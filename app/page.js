
import Slider from './components/Slider' // adjust the path
import Jobcard from './components/Jobcard';
import Rslider from './components/Rslider';
import Blogcard from './components/Blogcard';
import { getJobsByFilters, getSearchQueries } from '../lib/api';
import JobSlider from './components/Jobslider';
import { cookies } from 'next/headers';

export default async function Page({searchParams: searchParamsPromise}) {
const imageList = [
    '/Assets/slide1.webp',
   '/Assets/slide2.webp',
  ]
  const imageList2 = [
    '/Assets/image.png',
       '/Assets/image2.png',
          '/Assets/image3.png',
  ]
    const blogs=[
    {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/blog1.png',
   
    
    
    },
 {
      title:'How to Build a Resume That Stands Out',
      category:'Tips',
      image:'/Assets/blog1.png',
   
    
    
    }, {
      title:'How to Network Like a Pro in the ',
      category:'Insights',
      image:'/Assets/blog3.png',
   
    
    
    },
  
  
  ]

 const searchParams = await searchParamsPromise; // Await the promise
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value||"";

  console.log("Token from SSR:", token)


  // ✅ Parse filters from searchParams (SSR safe)
  const filters = {};
  for (const key in searchParams) {
    const value = searchParams[key];
    filters[key] = Array.isArray(value) ? value : [value];
  }
    console.log("Parsed Filters:", filters);
  const jobsData = await getJobsByFilters({
token:token,
       experienceLevel: filters.experience?.[0] || "",
       locationsearch:filters.location?.[0] || "",
    sector: filters.sector || [],
    industry: filters.industry || [],
    jobType: filters.jobtype || [],
    search: filters.search?.[0] || "",
          search: filters.search?.[0] || "",
    page: filters.page?.[0] ? parseInt(filters.page[0]) : 1,
    limit: 15
  });
  
     console.log("API Response:", jobsData);
  


  

  return (


       <div className='mainpage'>
        
  
      <Slider images={imageList} />
      <h4>Services</h4>
      <div className="services">
        <div className="service">
                        <img src="/Assets/icon1.png" alt=""/>
                        <p>Hospitality</p>
                        <h4>
                             Delivering functional and elegant spaces for hotels, resorts, and the hospitality industry — built to impress and perform.
                        </h4>
        </div>
            <div className="service">
                        <img src="/Assets/icon2.png" alt=""/>
                        <p>Commercial Construction</p>
                        <h4>
Constructing high-performing, scalable commercial spaces that align with your business goals and brand identity.                        </h4>
        </div>
            <div className="service">
                        <img src="/Assets/icon3.png" alt=""/>
                        <p>Residential Construction</p>
                        <h4>
From custom homes to renovations, we bring your dream living space to life with expert craftsmanship and care.                        </h4>
        </div>
            <div className="service">
                        <img src="/Assets/man.png" alt=""/>
                        <p>Manufacturing</p>
                        <h4>
Building robust and efficient industrial facilities designed to optimize production, safety, and long-term scalability.                        </h4>
        </div>
      </div>
           <h4><span className='bl-high'>Latest</span> Job opportunity</h4>

       <div className="jobs hideonmob">
            { 
                       jobsData&& jobsData.success===true?
                       jobsData.jobData.data.map((job=>(
                         <Jobcard job={job} />
                       )))
                       :
                       <div className="h4">No Jobs Found</div>
                      }
                    
             
                      
                      </div>

                      <div className="jobs hideondes ">
                           { 
                       jobsData&& jobsData.success===true?
                             <JobSlider jobs={jobsData.jobData.data} />
                       :
                       <div className="h4">No Jobs Found</div>
                      }
                      </div>
                        <a href='/jobs' className='seemore hideonmob'>See More                                     <img src="/Assets/next.svg" alt=""/>

       </a>
               <h5 className='hideonmob'>how does it work to <br/> <span className="bl-high"> find job?</span> </h5>

               <h5 className='hideondes'>how does it work to  <span className="bl-high mr">   find job?</span> </h5>
               <div className="instruc">
                <div className="ins-card">
            <div className="ins-info">
                    <h4>Matched with the Right Jobs</h4>
                  <p>Our AI connects you with job opportunities that match your skills.</p>

            </div>
                                    <img src="/Assets/go.png" alt=""/>

                </div>
                    <div className="ins-card">
            <div className="ins-info">
                    <h4>Explore Verified Listings</h4>
                  <p>Explore verified job postings from trusted employers.</p>

            </div>
                                    <img src="/Assets/go.png" alt=""/>

                </div>
                    <div className="ins-card">
            <div className="ins-info">
                    <h4>Access Career Resources</h4>
                  <p>Prepare for success with interview tips and resume tools.</p>

            </div>
                                    <img src="/Assets/go.png" alt=""/>

                </div>
               </div>
           
<h5><span className='bl-high'>Discover</span> Insights and Tips <br/>for Your Future.</h5>
<div className="blogs">
  {blogs.map(val=>(
  <Blogcard blog={val} />
  ))}

</div>
      <Rslider images={imageList2} />

    </div>
  );
}
