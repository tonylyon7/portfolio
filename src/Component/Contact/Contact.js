import React from 'react'
import "./Contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp, BsTwitter} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef ()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iif73uk', 'template_8rfjyy6', form.current, '_Gk8ggGl-o5FBs_gG')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option' >
            <HiOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>Tonylyon0007@gmail.com</h5>
            <a href='mailto:Tonylyon0007@gmail.com' target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
          <article className='contact-option' >
            <BsWhatsapp className='icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348101070424</h5>
            <a href='https://wa.me/+2348101070424' target='_blank' rel='noreferrer'>Send a Message</a>
         </article>
          <article className='contact-option' >
            <BsTwitter className='icon'/>
            <h4>Twitter</h4>
            <h5>Tonylyon7</h5>
            <a href='https://twitter.com/Tonylyon7' target='_blank' rel='noreferrer'>Send a Message</a>
         </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact