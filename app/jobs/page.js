

import { getJobsByFilters } from '../../lib/api';
import Jobcard from '../components/Jobcard';
import "../globals.css"
import Link from 'next/link';
import { cookies } from "next/headers";


export default async function  Page({searchParams: searchParamsPromise}) {
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
       location:filters.location?.[0] || "",
    sector: filters.sector || [],
    industry: filters.industry || [],
    jobType: filters.jobtype || [],
    search: filters.search?.[0] || "",
          search: filters.search?.[0] || "",
    page: filters.page?.[0] ? parseInt(filters.page[0]) : 1,
    limit: 15
  });

   console.log("API Response:", jobsData);

  // Function to build new query string (without a specific filter value)
const buildNewUrl = (removeKey, removeValue) => {
  const params = new URLSearchParams();

  // Convert searchParams (plain object) into URLSearchParams
  for (const key in searchParams) {
    const values = Array.isArray(searchParams[key])
      ? searchParams[key]
      : [searchParams[key]];
    values.forEach((v) => params.append(key, v));
  }

  // Remove the specific filter
  const updatedValues = params.getAll(removeKey).filter((v) => v !== removeValue);
  params.delete(removeKey);
  updatedValues.forEach((v) => params.append(removeKey, v));

  return `/jobs?${params.toString()}`;
};

  const buildPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams); 
    params.set("page", pageNumber); // Replace or add page
    return `/jobs?${params.toString()}`;
  };



  return (


       <div className='mainpage'>
        
  <div className="filter-tags">
     {
          Object.keys(filters).length > 0 && (
          Object.entries(filters).map(([key, values]) => (
            values.map((v, idx) => (
           <div className="selected-tag">

            {v}

                <Link href={buildNewUrl(key, v)}>
                 <img src="/Assets/cross.svg" alt="" />
                 </Link>

           </div>
                  ))
            ))
        ) 
        }
  </div>
   

       <div className="jobs">

       
            { 
            jobsData&& jobsData.success===true?

            <>
            
       {
            jobsData.jobData.data.map((job=>(
              <Jobcard job={job} />
            )))
          }
             <div className="pagination">
          
           {Array.from({ length: jobsData.jobData.pagination.totalPages }, (_, i) => (


        <Link key={i} href={buildPageUrl(i+1)}>
        
         <button  key={i} className={((filters.page&&filters.page==i+1))?`pagenum2`:!filters.page&&i==0?`pagenum2`:   `pagenum`}>
    {i + 1}
  </button>
        </Link>

 
))}
       </div>
     
                 </>
            :
            <div className="h4">No Jobs Found</div>
           }
       </div>
      
       

    </div>
  );
}
