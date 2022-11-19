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
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
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
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Bla Bla Bla Bla Bla</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services