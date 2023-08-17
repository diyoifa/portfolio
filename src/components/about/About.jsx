import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about_me"> 
          <div className="about__me-image">
             <img src={ME} alt='aboutImg'/>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years working</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>2+ Worldwide</small>
            </article>
            <article className='about__card'>
                <VscFolderActive className='about__icon'/>
                <h5>Projects</h5>
                <small>4+ Completed</small>
            </article>
          </div>

          <p>
          As a student of Systems Engineering and a frontend developer, I am constantly seeking to expand my knowledge and skills in the field of web development. 
          I have a deep passion for programming and can often be found coding at all hours of the day. In my free time, I enjoy playing soccer, exercising, and listening to music to unwind and recharge.
          These hobbies also help me to maintain focus and productivity when I return to my coding projects. 
          I am committed to delivering high-quality work and am always striving to improve my abilities as a developer.
          </p>

          <a href='#contact' className='btn btn-primary'>Let´s Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
