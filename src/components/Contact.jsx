import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import '../components/css/style.css'

function Contact({ contactInfo, socialLinks }) {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_u400xr7",
    "template_4iis5ua",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message
    },
    "IHY782_jXLwksp-Y2"
  )
  .then(() => {
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message.");
  });
};
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
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            
          </div>

        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

          <input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  required
/>

          <textarea
  name="message"
  placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
  required
></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;