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
                <small>5+ Years working</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>40+ Worldwide</small>
            </article>
            <article className='about__card'>
                <VscFolderActive className='about__icon'/>
                <h5>Projects</h5>
                <small>40+ Completed</small>
            </article>
          </div>

          <p>
          {/* As a student of Systems Engineering and a Full Stack Software developer, I am constantly seeking to expand my knowledge and skills in the field of web development. 
          I have a deep passion for programming and can often be found coding at all hours of the day. In my free time, I enjoy playing soccer, exercising, and listening to music to unwind and recharge.
          These hobbies also help me to maintain focus and productivity when I return to my coding projects. 
          I am committed to delivering high-quality work and am always striving to improve my abilities as a developer. */}
            👋<span className="about__span">Hello World!</span>  I'm passionate about software development, specializing in web applications using a wide range of technologies 👨‍💻.
            With a background of growing up in a family of 8 siblings and parents who are <span className="about__span">dedicated farmers</span>, I've learned the value of <span className="about__span"> hard work</span>, 
            <span className="about__span"> resilience</span> and the importance of <span className="about__span">community support.</span>🌱
            My dream is to establish a <span className="about__span">Data Science school</span> in my community, aiming to steer children away from losing time by providing them with
            education and opportunities. 📚 This dream is fueled by my <span className="about__span">love for learning</span>, particularly in cybersecurity and data science, fields
            that I'm actively exploring. 🛡️📊
          </p>

          <a href='#contact' className='btn btn-primary'>Let´s Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
