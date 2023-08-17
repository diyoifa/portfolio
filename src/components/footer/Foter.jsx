import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from'react-icons/bs'
const Foter = () => {
  return (
    <footer className='footer'>
        <a href="/" className='footer__logo'>GREGORIO CARDONA</a>
        {/* viernes 9:30 alvaro de la santisima trinida servicio familia dispensario medico guasimales */}
        <ul className='permaLinks'>
          <li> <a href='#/'>Home</a></li>
          <li> <a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/leticia.guarin.73">
            <BsFacebook className='footer__socials-icon'/>
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram className='footer__socials-icon'/>
          </a>
          <a href="https://twitter.com/">
            <BsTwitter className='footer__socials-icon'/>
          </a>
        </div>

        <div className="footer__copyrigths">
          <small> &copy; Gregorio Cardona, all rights reserved.</small>
        </div>

    </footer>
  )
}
export default Foter
