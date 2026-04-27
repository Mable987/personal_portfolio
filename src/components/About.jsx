import React from 'react'
import profile from '../assets/images/image.png'
import '../components/css/style.css'

function About() {
  return (
    <div>
      <section id="about" className="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>

        {/* Content */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate <b>Python Full Stack Developer</b> who enjoys
            building modern web applications. I work with technologies like
            React, Django, and JavaScript to create fast and responsive
            applications.
          </p>

          <p>
            I love solving real-world problems through code and continuously
            improving my development skills.
          </p>

          <div className="about-skills">
            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <button className="about-btn">Download Resume</button>
        </div>

      </div>
    </section>
      
      

   
</div>
  )
}

export default About
