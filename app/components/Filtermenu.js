'use client'
import './Filtermenu.css'
import '../globals.css'
import data from './data.json'
import { useEffect, useRef, useState } from 'react';
export default function Filtermenu({ filters, setshowmenu }) {
  console.log(filters)


  const [filterdata, setfilterdata] = useState(filters.data)
  const [industrydata, setindustrydata] = useState(filters.data.industries)
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


  function redirectto() {
    const params = new URLSearchParams();



    if (industrydata?.length) {


      industrydata.forEach((item) => {
        if (item.checked && item.checked === true) {
          params.append("industry", item.name)

        }
      });
    }

    if (expyears > 0 || expmonth > 0) {
      params.append("experience", `${expyears} Year & ${expmonth} Month`)
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
      /*  setindustrydata((prev) =>
        prev.filter(item => !(item.sec === cha.id && filterdata.industries.includes(item.ind)))
      );
      */
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
      /* filterdata.industries.forEach(element => {
     if(element.id===cha.id){
       setindustrydata((industrydata) => [...industrydata, { sec: cha.id, ind: element }])

       }
     });
     */
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

  return (
    <div className="filtermenu" onClick={handleFilterClick}>
      <div className="sidemenu" ref={sidemenuRef}>
        <img onClick={e => setshowmenu(0)} src="/Assets/close.svg" alt="" />
        <div className="filtercard">
          <h4>Location</h4>
          <div className="filter-input">
            <img src="/Assets/search.svg" alt="" />
            <input type="text" value={location} onChange={e => setlocation(e.target.value)} placeholder='Charlotte NC' />
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
                  <input type="checkbox" checked={val.checked && val.checked === true ? true : false} onChange={e => changeIndustries(val, index)} />
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
                      <input type="checkbox" checked={val.checked && val.checked === true ? true : false} onChange={e => addtoSearchInd(val, index)} />
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
                  <input type="checkbox" checked={val.checked && val.checked === true ? true : false} onChange={e => addtoSearch(val, index)} />
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
