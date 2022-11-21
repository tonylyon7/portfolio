import React from 'react'
import "./Footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>TONY LYON</a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='socials'>
      <a href='https://facebook.com' target='_blank'><FaFacebookF/></a>
      <a href='https://instagram.com' target='_blank'><BsInstagram/></a>
      <a href='https://twitter.com' target='_blank'><BsTwitter/></a>
      </div>

      <div className='footer-copywrite'>
        <marquee><small>&copy; Tony Lyon. All right reserved</small></marquee>
      </div>
    </footer>
  )
}

export default Footer