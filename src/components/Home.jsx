import React from 'react'
import bg from '../assets/images/portfolio_2.jpg'

import { TypeAnimation } from "react-type-animation";

function Home({ user }) {
  // const name = "Figarland Shanks";
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        color: "white"
      }}
    >
      <div
        className="home-content"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      > <h2>Hello, I'm </h2>
        <h1 style={{ fontSize: "50px", fontWeight: "700" }}>
          
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

      </div>

     
    </div>
  )
}

export default Home