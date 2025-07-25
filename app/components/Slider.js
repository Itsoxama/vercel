// components/Slider.js
'use client' // (If you're using App Router)
import '../globals.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.css'
export default function Slider({ images = [] }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      loop
    >


    <SwiperSlide >

            <div className="slide-details">
                <div className="slide1">
                    <p>Welcome to CFS</p>
                    <h4>Where Companies Meet Talent</h4>
                    <h5>Hire smarter. Manage better. Grow faster. Whether you're a startup or an enterprise, find the right candidates—faster than ever.</h5>
                    <div className="slidebtn">
                               <div className="post-btn" onClick={e=>window.location.pathname='/jobs'}>
Post a Job Now
                        </div>
                                 <div className="find-btn" onClick={e=>window.location='https://cfs.infibrain.com/Employee/Login'}>
                            Find the Right Talent 
                        </div>
                    </div>
                </div>
  <img
           src={images[0]}
          />
            </div>
        
        </SwiperSlide>
         <SwiperSlide >

            <div className="slide-details">
                <div className="slide1">
                    <p>Welcome to CFS</p>
                    <h4>Easy job Application to Step by Step Resume Builder</h4>
                    <h5>
                      
                     Your career journey starts here. Apply to jobs, manage your profile, and get hired — all in a few guided clicks.</h5>
                    <div className="slidebtn">
                        <div className="post-btn" onClick={e=>window.location.pathname='/jobs'}>
Browse Jobs                        </div>
                         <div className="find-btn" onClick={e=>window.location='https://cfs.infibrain.com/Employee/Login'}>
                           Create Your Profile
                        </div>
                    </div>
                </div>
  <img
            src={images[1]}
        
          />
            </div>
        
        </SwiperSlide>
    </Swiper>
  )
}
