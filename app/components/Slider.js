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
      {images.map((img, index) => (
        <SwiperSlide key={index}>

            <div className="slide-details">
                <div className="slide1">
                    <p>Welcome to CFS</p>
                    <h4>Where Companies Meet Talent</h4>
                    <h5>Hire smarter. Manage better. Grow faster. Whether you're a startup or an enterprise, find the right candidates—faster than ever.</h5>
                    <div className="slidebtn">
                        <div className="post-btn">
Post a Job Now
                        </div>
                         <div className="find-btn">
                            Find the Right Talent 
                        </div>
                    </div>
                </div>
  <img
            src={img}
            alt={`Slide ${index + 1}`}
          />
            </div>
        
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
