import React from "react";
import "../components/css/style.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Mable Simon</h3>
      <p>Python Full Stack Developer</p>

      <div className="footer-links">
        <a
          href="https://github.com/Mable987"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mable-simon-"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:mablesimonp@gmail.com">Email</a>
      </div>

      <p className="footer-copy">
        © 2025 Mable Simon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;