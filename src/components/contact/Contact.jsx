import './contact.css'
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// import ReactWhatsapp from 'react-whatsapp';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wk2j2ey', 'template_8p18p87', form.current, 'VP22OB5J5__3Jco2W')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <FiMail className='contact_option-icon' />
            <h4>Email</h4>
            <h4>usmanasif166@gmail.com</h4>
            <a href="mailto:usmanasif166@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h4>usmanasif0</h4>
            <a href="https://m.me/usmanasif0/" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact_option'>
            <RiWhatsappLine className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h4>+92 322 841 8127</h4>
            <a href="https://wa.me/923228418127" target='_blank' rel="noreferrer">Send a Message</a>
    
          </article>
        </div>
        {/* End of Contact */}
        <form onSubmit={sendEmail} ref={form}  >
          <input type="text" name='name' placeholder='Your First Name' required />

          <input type="email" name='email' placeholder='Your Email' required />

          <input type="number" name='number' placeholder='Your Number' />

          <textarea name="message" id="" cols="30" rows="7"
            placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section>
  )
}
export default Contact