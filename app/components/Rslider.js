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
    className='rslid'
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
                    <p className='bl-high'>Testimonial</p>
                    <h6>Listen to what <span className="bl-high">they say.</span></h6>
                 
                </div>
                <div className="rslide2">
            

<img src={img} alt="" />
                   <div className="testimonial">
                            <img className='arr' src='/Assets/arr.png' alt="" />
                  <p>I wanted to switch from retail to tech but didn’t know where to start. The career resources and AI-driven job matching helped me land a junior developer role that fits my goals perfectly.</p>
   <div className="user">
                  James R
                </div>
                <div className="user2">
                  Junior Software <br/>Developer
                </div>

                </div>
                </div>
               
             

            </div>
        
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
