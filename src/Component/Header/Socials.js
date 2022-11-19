import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/tose-anthony-818826189/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/tonylyon7' target='_blank'><BsGithub/></a>
        <a href='https://twitter.com/Tonylyon7' target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default Socials