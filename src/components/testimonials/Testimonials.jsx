import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/c1.jpeg'
import AVTR2 from '../../assets/c2.jpg'
import AVTR3 from '../../assets/c3.jpg'
import AVTR4 from '../../assets/c4.jpg'
import AVTR5 from '../../assets/c5.jpg'
import AVTR6 from '../../assets/c6.jpg'
import AVTR7 from '../../assets/c7.jpg'
import AVTR8 from '../../assets/c8.jpg'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  const data =[
    
    {
      id:2,
      avatar: AVTR2,
      name: "University of Michigan",
      testimonial: 'Introduction to HTML5',
      url:"https://coursera.org/share/da0eacf52c37759cfc13981a9ee6f4dc"
    },
    {
      id:3,
      avatar: AVTR3,
      name: "University of Michigan",
      testimonial: 'Introduction to CSS3',
      url: 'https://coursera.org/share/7f5bdfed221062384249e9c452669daa',
    },
    {
      id:4,
      avatar: AVTR4,
      name: "University of Michigan",
      testimonial: 'Interactivity with JavaScript',
      url: 'https://coursera.org/share/b86356c34c64f08c755f1ecdaa18a749',
    },
    {
      id:5,
      avatar: AVTR5,
      name: "META",
      testimonial: 'Introduction to Front-End Development',
      url: 'https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4',
    },
    {
      id:6,
      avatar: AVTR6,
      name: "META",
      testimonial: 'Version Control',
      url: 'https://coursera.org/share/9953c74eaeb424f9a3d65622b611e193',
    },
    {
      id:7,
      avatar: AVTR7,
      name: "META",
      testimonial: 'React Basics',
      url: 'https://coursera.org/share/4292a69ffca4738dfebf707a3e76d14b',
    },
    {
      id:8,
      avatar: AVTR8,
      name: "META",
      testimonial: 'Advanced React',
      url: 'https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74',
    },
    {
      id:1,
      avatar: AVTR,
      name: "Macquarie University, Sydney Australia",
      testimonial: 'Excel Skills for Business',
      url:"https://coursera.org/share/2831a5d0920708e8e984ff38b9a9ae4e"
    },
  ]
  return (
    <section id='testimonials'>
        <h5>Some Certificates  </h5>
        <h2>Certificates</h2>
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
                          {person.testimonial} <br /> <br />
                    </small>
                    <hr />
                    <a href={person.url} target='_blank' rel='noreferrer' className='btn'>Show</a> 
                  </SwiperSlide>
              )
          }
          
        </Swiper>
     </section>
  )
}

export default Testimonials
