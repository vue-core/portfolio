import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0lzvd6', 'template_kw92on6', form.current, 'MwG6_sPyXGse1ockw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article class="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ititiu19228@student.hcmiu.edu.vn</h5>
            <a href="mailto:ititiu19228@student.hcmiu.edu.vn" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article class="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Thuong Truong</h5>
            <a href="https://m.me/thuongtruong1009" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article class="contact__option">
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>thuongtruong1009</h5>
            <a href="https://instagram.com/thuongtruong1009" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" id="email" placeholder='You email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact