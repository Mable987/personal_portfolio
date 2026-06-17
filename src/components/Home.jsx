import React from 'react'
import { TypeAnimation } from "react-type-animation";
//import ParticleBackground from './ParticleBackground';

function Home({ user }) {
  // const name = "Figarland Shanks";
  return (
    <div
  id="home"
  style={{
    height: "100vh",
    position: "relative",
    color: "white",
    backgroundColor: "#0d1117",
    overflow: "hidden"
  }}
>
   <div className="blob blob1"></div>
  <div className="blob blob2"></div>
  <div className="blob blob3"></div>

  {/*<ParticleBackground />*/}
      <div
        className="home-content"
        style={{
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: 2
}}
      > <h2 style={{ letterSpacing: "2px", color: "#cbd5e1" }}>
  HELLO, I'M
</h2>
        <h1
  style={{
    fontSize: "64px",
    fontWeight: "700",
    marginBottom: "10px"
  }}
>
  {user.name}
</h1>

        <TypeAnimation
          sequence={[
            "Python Fullstack Developer",
            2000,
            "React Developer",
            2000,
            "Django Developer",
            2000,
            "Web Application Developer",
            2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{
            fontSize: "24px",
            color: "#00ffff",
            fontWeight: "500"
          }}
        />
        <div style={{ marginTop: "30px" }}>
  <button
  onClick={() =>
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    })
  }
  style={{
    padding: "12px 24px",
    marginRight: "15px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  }}
>
  View Projects
</button>
  <button
  onClick={() =>
    document.getElementById("resume").scrollIntoView({
      behavior: "smooth"
    })
  }
  style={{
    padding: "12px 24px",
    background: "transparent",
    border: "1px solid white",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  }}
>
  Resume
</button>
</div>

      </div>

     
    </div>
  )
}

export default Home