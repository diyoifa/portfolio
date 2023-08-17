import React, { useState } from 'react'
import './nav.css'
import {BiHomeHeart,BiBookHeart, BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import{RiServiceLine} from 'react-icons/ri'

const Nav = () => {

  const[activeNav,setActive] = useState('#/')

  return (
    
      <nav>         {/* si estamos dando click a este elemento entonces darle el nombre de active para darle un layout en nav.css */}
        <a href='#/' onClick={()=>setActive('/')} className={(activeNav === '#/') ? 'active':''}> <BiHomeHeart/> </a>
        <a href='#about' onClick={()=>setActive('#about')} className={(activeNav === '#about') ? 'active':''}> <AiOutlineUser/> </a>
        <a href='#experience'onClick={()=>setActive('#experience')} className={(activeNav === '#experience') ? 'active':''}> <BiBookHeart/> </a>
        <a href='#services'onClick={()=>setActive('#service')} className={(activeNav === '#service') ? 'active':''}> <RiServiceLine/> </a>
        <a href='#contact'onClick={()=>setActive('#contac')}className={(activeNav === '#contac') ? 'active':''}> <BiMessageSquareDetail/> </a>
      </nav>

  )
}

export default Nav
