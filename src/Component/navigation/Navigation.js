import React from 'react'
import "./Navigation.css"
import {AiOutlineHome, AiOutlineUser,AiFillBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessages } from 'react-icons/tb'
import { useState } from 'react'

const Navigation = () => {
  const {activeNav, setActiveNav} = useState ('#')
  return (
    <nav className='nav'>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessages/></a>
    </nav>
  )
}

export default Navigation