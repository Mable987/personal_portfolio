import React from "react";
import '../components/css/style.css'

function Resume() {
  return (
    <section id="resume" className="resume">

      <h2 className="resume-title">Resume</h2>

      <p className="resume-text">
        Download my resume to learn more about my education,
        skills, and professional experience as a Python Full Stack Developer.
      </p>

      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>

      <div className="resume-details">

        <div className="resume-box">
          <h3>Education</h3>
          <p><b>Bachelor's Degree</b></p>
          <p>Computer Science </p>
          <p>2021 - 2025</p>
        </div>

        <div className="resume-box">
          <h3>Experience</h3>
          <p><b>Python Full Stack Developer</b></p>
          <p>Worked on web applications using Django and React.</p>
          <p>Built projects like Turf Booking System and Ecommerce websites.</p>
        </div>

      </div>

    </section>
  );
}

export default Resume;