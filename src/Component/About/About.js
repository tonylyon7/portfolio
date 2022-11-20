import React from 'react'
import "./About.css"
import ME from '../../Assets/Images/ME.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'> 
      <h2>About ME</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='image'>
            <img src={ME} alt='about img'/>
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='icon'/>
              <h5>Experience</h5>
              <small>6+ Months</small>
            </article>

            <article className='about-card'>
              <FiUsers className='icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
              
            <article className='about-card'>
              <VscFolderActive className='icon'/>
              <h5>Projects</h5>
              <small>7+ completed Projects</small>
            </article>   
          </div>
          <p>
          Highly dedicated, disciplined and versatile young man with bias for action and a dynamic ability to fit in any work
          environment. Dedicated, loyal and dependable; strives to exceed expectation with service that is second-to-none.
          Possesses effective communication, refined leadership and dynamic people management skills with a poise for
          excellence in different work environments. Tech-savvy; has an incredible understanding of modern technology. A
          quick learner who is able to handle complex situations in a skilled and logical manner by aligning with
          organizational goals and objectives.
          Currently seeking an exciting opportunity where a combination of entrepreneurial drive and ownership mindset is
          encouraged; leveraging skills to contribute own quota to overall organizational growth.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About