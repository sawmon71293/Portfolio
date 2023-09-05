import React, { useRef } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri';
import './contact.css';

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4a650he',
      'template_9kba7k6',
      form.current,
      'UUASO3v9kaTcOtWQ1',
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 style={{ marginBottom: '-10px', fontFamily: "'Poiret One', cursive" }}>Get In Touch</h5>
      <h2 style={{ fontSize: '30px', fontFamily: "'Black Ops One', cursive", color: 'white' }}>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAlternateEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sawmon71293@gmail.com</h5>
            <a
              href="mailto:sawmon71293@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>sawmon</h5>
            <a
              href="https://m.me/saw.mon.372661"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@sawmonhan</h5>
            <a
              href="https://t.me/+959251275847"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          />
          <button
            style={{ padding: '12px' }}
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
