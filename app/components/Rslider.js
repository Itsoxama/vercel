// components/Slider.js
'use client' // (If you're using App Router)
import '../globals.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.css'
export default function Rslider({ images = [] }) {
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

            <div className="slide-details no-bg">
                <div className="slide1 rslide">
                    <p>Testimonial</p>
                    <h6>Listen to what <span className="bl-high">they say.</span></h6>
                 
                </div>
  <img
  className='rslide2'
            src={img}
            alt={`Slide ${index + 1}`}
          />
            </div>
        
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
