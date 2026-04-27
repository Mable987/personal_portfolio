import React from "react";
import '../components/css/style.css'

function Contact({ contactInfo }) {
  return (
    <section id="contact" className="contact">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            Feel free to contact me for collaborations or job opportunities.
          </p>

          {contactInfo.map((info, index) => (
            <p key={index}>
              <strong>{info.type}:</strong> {info.value}
            </p>
          ))}

          <div className="contact-social">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
          </div>

        </div>

        {/* Contact Form */}
        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;