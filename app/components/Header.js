'use client';
import './Header.css';
import '../globals.css';
import Filtermenu from './Filtermenu';
import { useEffect, useRef, useState } from 'react';
import Mobilemenu from './MobileMenu';

export default function Header({locationData, filters, queries }) {
  const [headerqueries, setheaderqueries] = useState(queries.queries);
  const [query, setquery] = useState('');
  const [showmenu, setshowmenu] = useState(0);
  const [showmobmenu, setshowmobmenu] = useState(0);
  const itemRefs = useRef([]); // dynamic refs array
itemRefs.current = [];

  const [showlogo, setshowlogo] = useState(1);

  const [activeIndex, setActiveIndex] = useState(-1); // NEW
  const filteredQueries = headerqueries?.filter((val) =>
    val.toLowerCase().includes(query.toLowerCase())
  ); // NEW

  const handleKeyDown = (e) => {
  if (e.key === 'ArrowDown') {
  e.preventDefault();

  setActiveIndex((prev) =>
    prev + 1 >= filteredQueries.length ? 0 : prev + 1
  );
} else if (e.key === 'ArrowUp') {
  e.preventDefault();
 
  setActiveIndex((prev) =>
    prev <= 0 ? filteredQueries.length - 1 : prev - 1
  );
} else if (e.key === 'Enter') {
      e.preventDefault();
      
      if (activeIndex >= 0 && filteredQueries.length > 0) {
        redirectTo(filteredQueries[activeIndex]);
      } else {
        const params = new URLSearchParams();
        params.append('search', query);
        window.location = `/jobs?${params.toString()}`;
      }
    }
  };

  const redirectTo = (val) => {
    const params = new URLSearchParams();
    params.append('search', val);
    window.location = `/jobs?${params.toString()}`;
  };

  // Reset activeIndex on query change
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);
  useEffect(() => {
  if (
    activeIndex >= 0 &&
    itemRefs.current[activeIndex] &&
    itemRefs.current[activeIndex].scrollIntoView
  ) {
    itemRefs.current[activeIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }
}, [activeIndex]);


const renderSuggestions = () => {
  return (
    query.length > 0 &&
    filteredQueries?.map((val, index) => (
      <div
        key={val}
        ref={(el) => (itemRefs.current[index] = el)} // 👈 attach ref
        className="query"
        onClick={() => redirectTo(val)}
        style={{
          backgroundColor: index === activeIndex ? '#d9d9d9' : 'white',
          cursor: 'pointer',
        }}
      >
        {val}
      </div>
    ))
  );
};
const searchRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setshowlogo(1);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('touchstart', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside);
  };
}, []);


  return (
    <div className="pheader">
      <div className="header">
        {showmenu === 1 && (
          <Filtermenu locationData={locationData} filters={filters} setshowmenu={setshowmenu} />
        )}
        {showmobmenu === 1 && (
          <Mobilemenu setshomobwmenu={setshowmobmenu} />
        )}

        {showlogo === 1 ? (
          <a href="/">
            <img src="/Assets/logo.png" alt="" />
          </a>
        ) : (
          <div className="searcharea mobsearcharea" ref={searchRef}>
            <div className="search">
              <img src="/Assets/search.svg" alt="" />
              <input
                type="text"
                onKeyDown={handleKeyDown}
                onChange={(e) => setquery(e.target.value)}
                placeholder="ex. graphic designer"
              />
              {query.length > 0 && <div className="ddown">{renderSuggestions()}</div>}

            </div>
            <div
              className="filter d-top"
              onClick={() =>
                showmenu === 0 ? setshowmenu(1) : setshowmenu(0)
              }
            >
              <img src="/Assets/filter.svg" alt="" />
            </div>
          </div>
        )}

        <div className="nav-links d-top">
          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
        </div>

        <div className="searcharea d-top">
          <div className="search">
            <img src="/Assets/search.svg" alt="" />
            <input
              type="text"
              onKeyDown={handleKeyDown}
              onChange={(e) => setquery(e.target.value)}
              placeholder="ex. graphic designer"
            />
            {query && (
              <div className="ddown">{renderSuggestions()}</div>
            )}
          </div>
          <div
            className="filter d-top"
            onClick={() =>
              showmenu === 0 ? setshowmenu(1) : setshowmenu(0)
            }
          >
            <img src="/Assets/filter.svg" alt="" />
          </div>
        </div>

        <div
          className="login d-top"
          onClick={() =>
            (window.location = 'https://cfs.infibrain.com/Employee/Login')
          }
        >
          Login/Register
        </div>
        <div className="mob-btns">
          {showlogo === 1 && (
            <div className="mob-btn1" onClick={() => setshowlogo(0)}>
              <img src="/Assets/search.svg" alt="" />
            </div>
          )}
          <div className="mob-btn1" onClick={() => setshowmenu(1)}>
            <img src="/Assets/fitler2.svg" alt="" />
          </div>
          <div className="mob-btn1" onClick={() => setshowmobmenu(1)}>
            <img src="/Assets/bar.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
