import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer" ><BsLinkedin/></a>
      <a href='https://github.com/diyoifa' target="_blank" rel="noreferrer"><BsGithub/></a>
      <a href='https://dribbble.com/diyoifa' target="_blank" rel="noreferrer"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocial
