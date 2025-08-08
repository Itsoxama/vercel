// components/Slider.js
'use client' // (If you're using App Router)
import '../globals.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import './Slider.css'
export default function Planslider({ plans = [] }) {
  
  return (
    <Swiper
   modules={[Pagination]}
  pagination={{ clickable: true }}
  spaceBetween={20}
  className='planslider'
  slidesPerView={1}
  loop
    >
      {plans.map((val, index) => (

        
        <SwiperSlide key={index}>

    <div className="plancard">
    {
      //<h4>{val.name}</h4>
    }  
    <h4>Monthly Plan</h4>
      <p>Billing Cycle: Every Month</p>
      <div className="plan-bbreak">

      </div>
      <h5>${val.price} <span>/month</span></h5>
      <h3>Features</h3>

      {val.features.map(val2=>(



   <div className="litem">
        <div className="crc">

        </div>
                        <p dangerouslySetInnerHTML={{ __html: val2}} />


      </div>
      ))}
    
    
    
      <a href="https://cfs.infibrain.com/Employee/Login">Choose Plan</a>
    </div>


        </SwiperSlide>
      ))}
    </Swiper>
  )
}
