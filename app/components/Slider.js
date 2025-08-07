// components/Slider.js
'use client' // (If you're using App Router)
import '../globals.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.css'
export default function Slider({ images = [] }) {
  return (
 <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  spaceBetween={20}
  slidesPerView={1}
  loop
>

    <SwiperSlide >

            <div className="slide-details">
                <div className="slide1">
                                      <p className='play'> <img src="/Assets/play.png" alt="" /> Welcome to CFS</p>

                    <h4>Where Companies Meet Talent</h4>
                    <h5><strong>Hire smarter. Manage better. Grow faster.</strong> Whether you're a startup or an<br /> enterprise, find the right candidates—faster than ever.</h5>
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
                    <p className='play'> <img src="/Assets/play.png" alt="" /> Welcome to CFS</p>
                    <h4>Easy job Application to Step by Step Resume Builder</h4>
                    <h5>
                      
                    <strong> Your career journey starts here.</strong> Apply to jobs, manage your profile, and get
                     <br/>
                      hired — all in a few guided clicks.</h5>
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
