import React from 'react'
import CTA from './CTA'
import "./Header.css"
import ME from '../../Assets/Images/ME.png'
import Socials from './Socials'


const Header = () => {
  return (
    <header>
      <div className='container header-container'>
      <h5>Hello, Welcome to my page</h5>
      <h1>TOSE, Anthony Sejiro</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <Socials/>

      <div className='me'>
        <img src={ME} alt='me'></img>
      </div>

      <a href='#contact' className='scroll__down'> scroll down</a>
      </div>
    </header>
  )
}

export default Header