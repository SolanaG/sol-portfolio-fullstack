import React from "react";
import "./contact.css";
import { IoIosPaperPlane } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get in touch!</h2>
      <h5>I'll do my best to get back to you soon</h5>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoIosPaperPlane className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gomez.solanarocio@gmail.com</h5>
            <a
              href="mailto:gomez.solanarocio@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Say hello</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+541135590980"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Messagge"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
