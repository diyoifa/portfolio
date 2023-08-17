import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


const Portfolio = () => {

  const data = [
    {
      id:1,
      image:IMG,
      title:"Notifinanciera BLOG",
      github:'https://github.com/diyoifa/Notifinanzas',
      demo:'https://notifinanzas.vercel.app/',
      tecnologies:"Next.js 13, Talwing, Next-auth.js, sanity, TypeScript and JavaScript"

    },
    {
      id:2,
      image:IMG2,
      title:"Chatgpt Util Prompts",
      github:'https://github.com/diyoifa/promptopia',
      demo:'https://chatgpt-prompts-three.vercel.app/',
      tecnologies:"Next.js 13, Talwing, Next-auth.js, MongoDB, TypeScript and JavaScript"

    },
    {
      id:3,
      image: IMG3,
      title:"Gym Exercises",
      github:'https://github.com/diyoifa/gym',
      demo:'https://gym-exercises-black.vercel.app/',
      tecnologies:"React, CSS, Material UI, and JavaScript"

    },
    {
      id:4,
      image:IMG4,
      title:"Portfolio Template",
      github:'https://github.com/diyoifa/portfolio-template',
      demo:'https://portfolio-diyoifa.vercel.app/',
      tecnologies:"React, CSS, Chakra UI, testing-react-library, component-Testing and JavaScript"
    },
  ]
  return (
    <section id="portfolio">
      <h5>My Portfolio</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(proyect =>
              <article className='portfolio__item' key={proyect.id}>
                <div className="portfolio__item-image">
                <img src={proyect.image} alt={proyect.title+"img"} /> 
                </div> 
                  <h3>{proyect.title}</h3>
                  <p style={{marginBottom:"1rem"}}>
                    {proyect?.tecnologies}
                  </p>
                  <div className="portfolio__item-cta">
                      <a href={proyect.github} className='btn' target="_blank" rel="noreferrer">Github</a>  
                      <a href={proyect.demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
              </article>
          )
        }
        
        
      </div>
    </section>
  )
}

export default Portfolio
