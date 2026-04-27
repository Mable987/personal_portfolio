import React from "react";
import '../components/css/style.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills({ skillset }) {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skillset.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.Percentage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}      

export default Skills;