'use client'
import './Filtermenu.css'
import '../globals.css'
import data from './data.json'
import { useEffect, useRef, useState } from 'react';
export default function Filtermenu({ filters, setshowmenu }) {
  console.log(filters)


  const [filterdata, setfilterdata] = useState(filters.data)
  const [industrydata, setindustrydata] = useState([])
  const [jobtypedata, setjobtypedata] = useState(filters.data.jobTypes)
  const [expOpen, setexpOpen] = useState(0)
  const [secOpen, setsecOpen] = useState(0)
  const [indOpen, setindOpen] = useState(0)
  const [jobOpen, setjobOpen] = useState(0)
  const [expyears, setexpyears] = useState(0)
  const [location, setlocation] = useState("")

  const [sectorsearch, setsectorsearch] = useState('')
  const [industrysearch, setindustrysearch] = useState('')

  const [expmonth, setexpmonth] = useState(0)
  useEffect(() => {


    return () => {

    }
  }, [])
function deleteLocation(dellocation) {
  let dellocations = JSON.parse(localStorage.getItem("locations")) || [];

  // Remove the dellocation
  dellocations = dellocations.filter(item => item !== dellocation);
  localStorage.setItem("locations", JSON.stringify(dellocations));
  setLocations(JSON.parse(localStorage.getItem("locations")) || [])
}

  const [locations, setLocations] = useState(() => {
    // Load from localStorage when component mounts
    return JSON.parse(localStorage.getItem("locations")) || [];
  });

  
  function redirectto() {

 let locations = JSON.parse(localStorage.getItem("locations")) || [];

  // Avoid duplicates
  if (!locations.includes(location)) {
    locations.push(location);
    localStorage.setItem("locations", JSON.stringify(locations));
  }







    
    const params = new URLSearchParams();




    if (industrydata?.length) {


      industrydata.forEach((item) => {
        if (item.checked && item.checked === true) {
          params.append("industry", item.name)

        }
      });
    }

    if (expyears > 0 || expmonth > 0) {
      params.append("experience", `${expyears.toString().padStart(2, '0')} Year & ${expmonth.toString().padStart(2, '0')} Month`);

    }
    if (location) {
      params.append("location", location)
    }


    if (filterdata.sectors?.length) {
      filterdata.sectors.forEach((item) => {

        if (item.checked && item.checked === true) {
          params.append("sector", item.name)
        }

      });
    }

    if (jobtypedata?.length) {
      jobtypedata.forEach((item) => {

        if (item.checked && item.checked === true) {
          params.append("jobtype", item.name)

        }

      });
    }

    window.location = `/jobs?${params.toString()}`




  }
  function addtoSearch(val, index) {
    if (val.checked && val.checked === true) {
      var tr = [...jobtypedata]
      setjobtypedata([])
      tr[index] =
      {
        ...tr[index],
        checked: false
      }
      setjobtypedata(tr)



    }
    else {

      var tr = [...jobtypedata]
      setjobtypedata([])
      tr[index] =
      {
        ...tr[index],
        checked: true
      }
      setjobtypedata(tr)



    }
    console.log(jobtypedata)
  }

  function addtoSearchInd(val, index) {
    if (val.checked && val.checked === true) {
      var tr = [...industrydata]
      setindustrydata([])
      tr[index] =
      {
        ...tr[index],
        checked: false
      }
      setindustrydata(tr)



    }
    else {

      var tr = [...industrydata]
      setindustrydata([])
      tr[index] =
      {
        ...tr[index],
        checked: true
      }
      setindustrydata(tr)



    }
    console.log(jobtypedata)
  }



  const sidemenuRef = useRef();
  const handleFilterClick = (e) => {
    if (!sidemenuRef.current.contains(e.target)) {
      setshowmenu(0)
    }
  };

  function changeIndustries(cha, index) {
    console.log(cha)
    if (cha.checked && cha.checked === true) {
       setindustrydata((prev) =>
        prev.filter(item => !(item.sectorId === cha.id ))
      );
      
      var tr = { ...filterdata }
      setfilterdata([])
      tr.sectors[index] =
      {
        ...tr.sectors[index],
        checked: false
      }
      setfilterdata(tr)


    }
    else {
     filterdata.industries.forEach(element => {
     if(element.sectorId===cha.id){
       setindustrydata((industrydata) => [...industrydata, {...element}])

       }
     });
     
      var tr = { ...filterdata }
      setfilterdata([])
      tr.sectors[index] =
      {
        ...tr.sectors[index],
        checked: true
      }
      setfilterdata(tr)



    }

    
  }
  const [isActive, setIsActive] = useState(false);
  
  const renderSuggestions = () => {
  return (
    (isActive&&location.length===0)?
    locations?.map((val, index) => (
      <div
        key={val}
        className="query2"
        onClick={() => setlocation(val)}
        style={{
          
          cursor: 'pointer',
        }}
      >
        {val}

<div className="closer">
          <img onClick={(e) => {
            e.stopPropagation();
            deleteLocation(val)}} src="/Assets/clo4.png" alt="" />

</div>
      </div>
    ))
    : (isActive&&location.length>0)?
     locations?.map((val, index) => (
      val.toLowerCase().search(location.toLowerCase())>=0&&
      <div
        key={val}
        className="query2"
        onClick={() => setlocation(val)}
        style={{
          
          cursor: 'pointer',
        }}
      >
        {val}

<div className="closer">
          <img onClick={e => {
            e.stopPropagation();
            deleteLocation(val)}} src="/Assets/clo4.png" alt="" />

</div>
      </div>
    )):
    <></>
  );
};
  const containerRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filtermenu" onClick={handleFilterClick}>
      <div className="sidemenu nooverlap" ref={sidemenuRef}>
        <img onClick={e => setshowmenu(0)} src="/Assets/close.svg" alt="" />
        <div className="filtercard">
          <h4>Location</h4>
          <div className="filter-input"  ref={containerRef}>
            <img src="/Assets/search.svg" alt="" />
            <input type="text" value={location} onChange={e => setlocation(e.target.value)}
             onFocus={() => setIsActive(true)}
           
            placeholder='Charlotte NC' />
                {isActive&&locations.length>0&& <div className="ddown2">{renderSuggestions()}</div>}
          </div>
          <div className="break">

          </div>
          <h4 onClick={e => expOpen === 0 ? setexpOpen(1) : setexpOpen(0)} >Experience Level   <img src="/Assets/up.svg" alt="" /> </h4>



          {expOpen === 1 &&
            <div className="exp-input">
              <div className="year-input">
                <input type="number" value={expyears} onChange={(e) => {
                  let value = e.target.value;
                  if (value.length > 2) value = value.slice(0, 2); // restrict to 2 digits
                  setexpyears(value);
                }} />
                <p>Y</p>

              </div>
              <div className="year-input">
                <input type="number" value={expmonth} onChange={(e) => {
                  let value = e.target.value;
                  if (value.length > 2) value = value.slice(0, 2); // restrict to 2 digits
                  setexpmonth(value);
                }} />
                <p>M</p>
              </div>
            </div>}


          <h4 onClick={e => secOpen === 0 ? setsecOpen(1) : setsecOpen(0)}>Sector   <img src="/Assets/up.svg" alt="" /> </h4>
          {secOpen === 1 &&

            <>

              <div className="filter-input">
                <img src="/Assets/search.svg" alt="" />
                <input type="text" onChange={e=>setsectorsearch(e.target.value)} placeholder='Construction' />
              </div>

              {filterdata.sectors
             .filter((val) => val.name.toLowerCase().includes(sectorsearch.toLowerCase()))

              
              .map((val, index) => (
                <div className="filter-option">

                  {
                    val.checked && val.checked === true ?
                <img src="/Assets/chk2.png" className='chkbox' alt="" onClick={e => changeIndustries(val, index)} />

                    :
                <img src="/Assets/chk1.png" alt="" className='chkbox' onClick={e => changeIndustries(val, index)} />


                  }
               
                  <p>{val.name}</p>
                </div>

              ))}

            </>
          }

          <h4 onClick={e => indOpen === 0 ? setindOpen(1) : setindOpen(0)}>Industry  <img src="/Assets/up.svg" alt="" /> </h4>


          {indOpen === 1 &&

            <>

              <div className="filter-input">
                <img src="/Assets/search.svg" alt="" />
                <input type="text" onChange={e=>setindustrysearch(e.target.value)} placeholder='Residential Construction' />
              </div>
              <>
                {industrydata
                 .filter((val) => val.name.toLowerCase().includes(industrysearch.toLowerCase()))
                .map((val, index) => (

                  <>


                    <div className="filter-option">

 {
                    val.checked && val.checked === true ?
                <img src="/Assets/chk2.png" className='chkbox' alt="" onClick={e => addtoSearchInd(val, index)} />

                    :
                <img src="/Assets/chk1.png" alt="" className='chkbox' onClick={e => addtoSearchInd(val, index)} />


                  }

                      <p>{val.name}</p>
                    </div>

                  </>

                ))}
              </>
            </>

          }

          <h4 onClick={e => jobOpen === 0 ? setjobOpen(1) : setjobOpen(0)}> Job Type   <img src="/Assets/up.svg" alt="" /> </h4>
          {jobOpen === 1 &&
            <>

              {jobtypedata.map((val, index) => (
                <div className="filter-option">
 {
                    val.checked && val.checked === true ?
                <img src="/Assets/chk2.png" className='chkbox' alt="" onClick={e => addtoSearch(val, index)} />

                    :
                <img src="/Assets/chk1.png" alt="" className='chkbox' onClick={e => addtoSearch(val, index)} />


                  }

                  <p>{val.name}</p>
                </div>

              ))}

            </>}


          <button className="applybtn" onClick={e => redirectto()}>
            Search
          </button>
          <div className="pad">

          </div>
        </div>
      </div>

    </div>

  );
}
