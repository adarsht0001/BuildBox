import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(() => {
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contact">
            <h5>GEt In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>scrolldownsolutions@gmail.com</h5>
                        <a href="mailto:scrolldownsolutions@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsLinkedin className='contact_option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Scroll Down Solutions </h5>
                        <a href="https://www.linkedin.com/in/scroll-down-solutions-09642927a/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact