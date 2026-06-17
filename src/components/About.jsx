import React from 'react'
import profile from '../assets/images/Mable1.jpeg'
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
            I’m Mable Simon, a <b>Python Full Stack Developer</b> from Kerala with a strong interest in building scalable and user-friendly web applications. I enjoy combining backend logic with modern frontend experiences using Django and React.

I’m especially interested in solving real-world problems through technology and continuously improving my skills as a developer.
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

        </div>

      </div>
    </section>
      
      

   
</div>
  )
}

export default About
