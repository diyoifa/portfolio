import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useState } from 'react'

const Services = () => {
  const [ocultar, setOcultar] = useState(false);
  const show = ()=>{
    setOcultar(!ocultar)
  }
  const [ocultar2, setOcultar2] = useState(false);
  const show2 = ()=>{
    setOcultar2(!ocultar2)
  }

  const [ocultar3, setOcultar3] = useState(false);
  const show3 = ()=>{
    setOcultar3(!ocultar3)
  }
  return (
    <section id="services">
      <h5>What Do I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3 onClick={show}>UI/UX Design </h3>
          </div>
          {  //si ocultar es true lo muestra
            ocultar ?
        
          <ul className='service__list'>
            <li>
              <p><BiCheck className='service__list-icon'/> User Interface (UI) design: Creating visually appealing and intuitive user interfaces that allow users
                to interact with digital products efficiently.</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon'/> User Experience (UX) design: Crafting user experiences that are enjoyable, useful, and satisfying by optimizing
               the user flow from entry to exit.</p>
            </li>
            <li>           
              <p><BiCheck className='service__list-icon'/> User research: Collecting and analyzing data on user needs, desires, and behaviors through
                 interviews, surveys, user testing, among others.</p>            
            </li>
            <li>            
              <p><BiCheck className='service__list-icon'/> Wireframing: Creating low-fidelity diagrams and sketches that show the structure and organization of the content
                 and functionalities of an application or website.</p>
            </li>
            <li>             
              <p><BiCheck className='service__list-icon'/> Prototyping: Developing interactive high-fidelity prototypes that allow users to test and evaluate the
                 product before it's fully developed.</p>
            </li>
            <li>              
              <p><BiCheck className='service__list-icon'/> Information architecture design: Organizing the content and information of a website or application into an organized, hierarchical structure
               that enables users to find information quickly and easily.</p>
            </li>
            <li>             
              <p><BiCheck className='service__list-icon'/> Usability evaluation: Testing and evaluating the usability of the product to identify areas for improvement
                 and resolve issues that may impact the user experience.</p>
            </li>
            <li>              
              <p><BiCheck className='service__list-icon'/> Visual style design: Developing a consistent and appealing visual style that reflects the brand and purpose
                of the application or website.</p>
            </li>
          </ul>
          :null  
        }
        </article>
        {/*END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3 onClick={show2}>Web Development </h3>
          </div>
          {  //si ocultar es true lo muestra
            ocultar2 ?
            <ul className='service__list'>
              <li>
                <p><BiCheck className='service__list-icon'/> Full-stack web development: Developing both the front-end and back-end of a website, as well as managing the server infrastructure that hosts it.</p>
              </li>
              <li>
                <p><BiCheck className='service__list-icon'/> Custom web application development: Building custom web applications to meet specific business needs, such as e-commerce platforms, content management systems, or project management tools.</p>
              </li>
              <li>
                <p><BiCheck className='service__list-icon'/> Website maintenance and support: Updating and maintaining the codebase of an existing website to ensure it remains functional and secure, as well as providing technical support to users.</p>
              </li>
              <li>
                <p><BiCheck className='service__list-icon'/> Search engine optimization (SEO): Optimizing website content and structure to improve search engine rankings and attract more organic traffic.</p>
              </li>
              <li>
                <p><BiCheck className='service__list-icon'/> Web analytics and reporting: Collecting and analyzing data on website traffic, user behavior, and performance to inform decision-making and drive improvements.</p>
              </li>
              <li>
                <p><BiCheck className='service__list-icon'/> Integration with third-party services: Integrating websites and web applications with third-party services such as payment gateways, social media platforms, and analytics tools.</p>
              </li>
            </ul>
            :null
            }
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3 onClick={show3}>Content Creation </h3>
          </div>
          {
            ocultar3 
            ?
          <ul className='service__list'>
            <li>
              <p><BiCheck className='service__list-icon'/> Content creation: Writing articles, blog posts, social media posts, newsletters, and other types of written content.</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon'/> Content marketing: Developing and implementing a strategy to promote and distribute content across various channels, such as social media, email marketing, and advertising.</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon'/> SEO writing: Creating content that is optimized for search engines by using relevant keywords and following SEO best practices.</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon'/> Graphic design: Designing visual content such as infographics, social media graphics, and other digital assets that complement written content.</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon'/> Content performance analysis: Using analytics tools to monitor and measure the effectiveness of content, and making data-driven decisions to improve content performance.</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon'/> Content management: Organizing and managing a library of content, including creating content calendars, tracking content metrics, and maintaining content archives.</p>
            </li>
          </ul>
          : null
          }
        </article>
      </div>  
    </section>
  )
}

export default Services
