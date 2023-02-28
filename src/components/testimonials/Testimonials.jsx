import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/IMG-20220901-WA0060.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/me.png'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  const data =[
    {
      id:1,
      avatar: AVTR,
      name: "Luz Natalia Amaya Campos",
      testimonial: '"Gregorio Cardona is simply amazing. They provided us with top-notch front-end development services that exceeded our expectations. Their attention to detail and commitment to quality is unmatched."',
    },
    {
      id:2,
      avatar: AVTR2,
      name: "Michael Davis",
      testimonial: '"Working with Gregorio Cardona has been a game changer for our business. They have helped us create a user-friendly and engaging front-end experience that has boosted our website traffic and engagement. We could not be happier with the results."',
    },
    {
      id:3,
      avatar: AVTR3,
      name: "William Thompson",
      testimonial: '"We have worked with several front-end developers in the past, but Gregorio Cardona stands out as the best. He is incredibly skilled and knowledgeable, and  consistently deliver results that are both functional and visually appealing."',
    },
    {
      id:4,
      avatar: AVTR4,
      name: "Maria Leticia Guarin",
      testimonial: '"As a startup, we were looking for a partner who could help us bring our vision to life. Gregorio Cardona not only delivered on that promise, but they also provided valuable insights and suggestions that improved our user experience. We highly recommend their front-end development services."',
    }
  ]
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"               
             modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}            
        >
          {
            data.map(person=>
                
                  <SwiperSlide key={person.id} className="testimonials">
                    <div className="client__avatar">
                      <img src={person.avatar} alt={"avatar"+person.id} />
                    </div>
                    <h5>{person.name}</h5>
                      <small className='client__review'>
                          {person.testimonial}
                      </small> 
                  </SwiperSlide>
              )
          }
          
        </Swiper>
     </section>
  )
}

export default Testimonials
