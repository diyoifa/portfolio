import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
          <div className="experience__fronted">
            <h3>Fronted Development</h3>
            <div className="experience__content">
                
                  <article className='experience__details'>
                    <div>
                
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/> HTML</h4>
                      <small className='text-ligth'>Experienced</small>
                     </div>
                  </article>
                
                
                  <article className='experience__details'>
                    <div>
                      
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/>JS</h4>
                      <small className='text-ligth'>Experienced</small>
                    </div>
                  </article>
                
                
                  <article className='experience__details'>
                    <div>
                      
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/>Bootstrap</h4>
                      <small className='text-ligth'>Experienced</small>
                    </div>
                  </article>

                  <article className='experience__details'>
                    <div>
                      
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/> Talwind</h4>
                      <small className='text-ligth'>Experienced</small>
                    </div>
                  </article>
                
                
                  <article className='experience__details'>
                    <div>
      
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/> Vue js</h4>
                      <small className='text-ligth'>Intermediate</small>
                    </div>
                  </article>
                
                
                  <article className='experience__details'>
                  <div>
                     
                      <h4> <BsFillCheckCircleFill className='experience__details-icon'/> Angular</h4>
                      <small className='text-ligth'>Intermediate</small>
                    </div>
                  </article>
                
               
                  <article className='experience__details'>
                    <div>
                      
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/> React</h4>
                      <small className='text-ligth'>Experienced</small>
                    </div>
                  </article>
                
                
                  <article className='experience__details'>
                    <div>
                      
                      <h4><BsFillCheckCircleFill className='experience__details-icon'/> JAVA</h4>
                      <small className='text-ligth'>Experienced</small>
                    </div>
                  </article>
                
            </div>
            {/*END OF FRONTED */}
 
            </div>
              <div className="experience__backend">
                <h3>Backend Development</h3>
                <div className="experience__content">
                   
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> Node js</h4>
                          <small className='text-ligth'>Intermediate</small>
                        </div>
                      </article>
                    
                    
                      <article className='experience__details'>
                       <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> MongoDB</h4>
                          <small className='text-ligth'>Intermediate</small>
                        </div>
                      </article>
                    
                    
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> PHP</h4>
                          <small className='text-ligth'>Intermediate</small>
                        </div>
                      </article>
                    
                    
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> MySQL</h4>
                          <small className='text-ligth'>Experienced</small>
                        </div>
                      </article>
                    
                    
                    <article className='experience__details'>
                      <div>
                        
                        <h4><BsFillCheckCircleFill className='experience__details-icon'/> PHYTON</h4>
                        <small className='text-ligth'>Experienced</small>
                      </div>
                    </article>
                    
              </div>
          </div> 
          {/*END OF BACKEND */}
          <div className="experience__other">
          <h3>Others</h3>
                <div className="experience__content">
                    
                    <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> C</h4>
                          <small className='text-ligth'>Experienced</small>
                        </div>
                    </article>
                    
                    
                      <article className='experience__details'>
                        <div>
                            
                            <h4><BsFillCheckCircleFill className='experience__details-icon'/> C++</h4>
                            <small className='text-ligth'>Experienced</small>
                          </div>
                      </article>
                    
                     
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> Excel Advance</h4>
                          <small className='text-ligth'>Experienced</small>
                        </div>
                      </article>
                    
                    
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> French</h4>
                          <small className='text-ligth'>Intermediate</small>
                        </div>
                      </article>
                    
                   
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> English</h4>
                          <small className='text-ligth'>Experienced</small>
                        </div>
                      </article>
                    
                    
                      <article className='experience__details'>
                        <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> Portugues</h4>
                          <small className='text-ligth'>Basic</small>
                        </div>
                      </article>
                    
                    
                      <article className='experience__details'>
                         <div>
                          
                          <h4><BsFillCheckCircleFill className='experience__details-icon'/> Italian</h4>
                          <small className='text-ligth'>Basic</small>
                         </div>
                      </article>
                    
                </div>
          </div> 
      </div>
    </section>
  )
}

export default Experience
