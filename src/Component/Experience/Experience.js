import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'> 
    <h5>Skills i have</h5>
    <h2>My Experience</h2>

    <div className='container experience-container'>
      <div className='front'>
        <h3>Frontend Development</h3>
        <div className='e-content'>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className='back'>
      <h3>Backend Development</h3>
      <div className='e-content'>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>Mongo DB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='e-detail-icon'/>
            <div>
            <h4>PostMan</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience