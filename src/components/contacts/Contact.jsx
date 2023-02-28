import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import {FaFacebookMessenger} from 'react-icons/fa'
import swal from 'sweetalert'
import emailjs from 'emailjs-com';

const Contact = () => {
  const data = [
    {
      id:1,
      name: "Email",
      url: "mailto:jose.cardona@unipamplona.edu.co",
      info:"🚀Gregorio Cardona",
      icon: <AiOutlineMail/>
    },
    {
      id:2,
      name: "Messenger",
      url: "https://www.facebook.com/leticia.guarin.73",
      info: "🚀Gregorio Cardona",
      icon: <FaFacebookMessenger/>
    },
    {
      id:3,
      name: "WhatsApp",
      info: "🚀Gregorio Cardona",
      url:"https://wa.link/tjwt7n",
      icon: <ImWhatsapp/>
    }  ]

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_sde17hn', 'template_il08nt5', form.current, 'bvkGkTeXUcLHQjnjr')
      e.target.reset()
      swal("Good job!", "You sent the message!", "success")
    }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {
            data.map(contact=>
                <article key={contact.id} className="contact__option">
                  <h4>{contact.name}</h4>
                  <h5>{contact.info}</h5>
                  <div className='contact__option-icon'>{contact.icon}</div>
                  <a href={contact.url} target="_blank" rel="noreferrer">
                    Send a message
                  </a>
                </article>
              )
          }
        </div>
        {/*END OF THE CONTACT OPTION*/}
        <form ref = {form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full Name' required />
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" id="" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> 
    </section>
  )
}


export default Contact
