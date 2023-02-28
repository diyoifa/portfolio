import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {

  const data = [
    {
      id:1,
      image:IMG,
      title:"Dark jokes App",
      github:'https://github.com/diyoifa',
      demo:'https://diyoifa.github.io/dark/build'
    },
    {
      id:2,
      image:IMG2,
      title:"Godos kings",
      github:'https://github.com/diyoifa',
      demo:'https://diyoifa.github.io/dark/build'
    },
    {
      id:3,
      image: IMG3,
      title:"List Web App",
      github:'https://github.com/diyoifa',
      demo:'https://diyoifa.github.io/dark/build'
    },
    {
      id:4,
      image:IMG4,
      title:"Mantaining tasks and tracking progress",
      github:'https://github.com/diyoifa',
      demo:'https://dribbble.com/diyoifa/about'
    },
    {
      id:5,
      image: IMG5,
      title:"Dashboard & Financial Visualization",
      github:'https://github.com/diyoifa',
      demo:'https://dribbble.com/diyoifa/about'
    },
    {
      id:6,
      image:IMG6,
      title:"Crypto Currency Dashboard & Financial Visualization",
      github:'https://github.com/diyoifa',
      demo:'https://dribbble.com/diyoifa/about'
    }
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
                <img src={proyect.image} alt="portfolio__item-image" /> 
                </div> 
                  <h3>{proyect.title}</h3>
                  <div className="portfolio__item-cta">
                      <a href={proyect.github} className='btn' target="_blank">Github</a>  
                      <a href={proyect.demo} className='btn btn-primary' target="_blank" >Live Demo</a>
                  </div>
              </article>
          )
        }
        
        
      </div>
    </section>
  )
}

export default Portfolio
