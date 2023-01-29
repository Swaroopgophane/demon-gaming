import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
   <>
   <section className='common-page-section contact-page'>
        <div className='common-page-head common-animation'>
          <h2>Contact Us</h2>
        </div>
      </section>

   <section className='contact-section section'>
    <div className='contact-container'>
      <h2>Get In Touch</h2>
      <form className='contact-form'>
        <div className='form-group'>
          <input type="text" placeholder='Name' required />
          <input type="email" placeholder='Email' required />
        </div>
        <div className='form-group2'>
          <input type="text" placeholder='Subject' required />
          <textarea placeholder='Message' cols="30" rows="10"></textarea>
        </div>
        <div className='form-btn'>
          <button className='submit-btn btn'>Send Message</button>
        </div>
      </form>
    </div>
   </section>
   </>
  )
}

export default Contact;