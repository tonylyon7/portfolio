import React from 'react'
import "./Services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className='container services-container'>
        <article className='service'>
          <div className='service-head'>
            <h3>UI/UX</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Prototyping, wireframing, userflow, mockups</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Visual design and design software</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>User research and usability testing</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Agile</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Information Architecture</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Application Development</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>communication and Presentation</p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className='service-head'>
            <h3>Web development</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Testing and Debugging</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Responsive Web designing Skills</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Create real Web Apllications</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Create Apllications that run inside web browser</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Create and interact with database using MongoDB</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Create a real ChatApp with nodeJs ExpressJs and MongoDB</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Deploy Applications Using Heroku</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services