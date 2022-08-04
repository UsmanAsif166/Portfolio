import React from 'react'
import './testimonials.css'
import AVATR1 from '../../assests/avatar1.jpg'
import AVATR2 from '../../assests/avatar2.jpg'
// import AVATR3 from '../../assests/avatar3.jpg'
// import AVATR4 from '../../assests/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATR1,
    name: 'Talha Akbar',
    review: 'I am very proud to highly recommend Usman he is fantastic! So wonderful to work with, professional, response time is quick and knowledgeable every step of the way! My project manager, Bilal, is so personable and efficient that I literally looked forward to our communications together! We had fun putting the site together!'
  },
  {
    avatar: AVATR2,
    name: 'Ahmad Sharif',
    review: 'I had a great experience with the Usman. He is very knowledgeable and professional, and most of all, very patient with all our requests. Their process during our website developmental stages was excellent. Everything that I asked for was delivered by the Usman. I’m very pleased and recommend Usman based on own my experience.'
  }
  // {
  //   avatar: AVATR3,
  //   name: 'Hmaza Ali',
  //   review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum, eius nam ratione dolorum alias quasi? Repellat vitae aliquam, tenetur voluptas sapiente reiciendis nam quisquam!'
  // },
  // {
  //   avatar: AVATR4,
  //   name: 'Shahan',
  //   review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum, eius nam ratione dolorum alias quasi? Repellat vitae aliquam, tenetur voluptas sapiente reiciendis nam quisquam!'
  // }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container" 
      modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}

        pagination={{ clickable: true }}>

        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonials'>
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}
export default Testimonials