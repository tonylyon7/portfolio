import React from 'react'
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/tose-anthony-818826189/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/tonylyon7' target='_blank'><BsGithub/></a>
        <a href='https://wa.me/2348101070424' target='_blank'><BsWhatsapp/></a>
    </div>
  )
}

export default Socials