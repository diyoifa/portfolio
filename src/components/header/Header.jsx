import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2 (2).png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
        <header id='/'>
          <div className="container header__container">
            <h4 className="text-light">Hello Wordl🙌 I´m</h4>
            <h1>Gregorio Cardona</h1>
            <h4 className="text-light">Full Stack Developer</h4> 
            <CTA />
            <HeaderSocial />
            <div className="me"> 
              <img src={ME} alt="" />
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a> 
          </div>
        </header>
  )
}

export default Header
