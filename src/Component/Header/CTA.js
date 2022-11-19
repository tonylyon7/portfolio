import React from 'react'
import CV from "../../Assets/Images/CV.docx"

const CTA = () => {
  return (
    <div>
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#Contact' className='btn btn-primary'>Contact</a>
        </div>
    </div>
  )
}

export default CTA