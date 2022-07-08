import React from "react";

const Footer = () => {
  return (
    <div id="footer-link" className="footerDiv">
      <div className="footerContactDiv">
        <h1 className="robotoMono footerTitle fade-in-right">Contacto</h1>
        <p>
          <a
            href="https://github.com/florsp93"
            target="_blank"
            rel="noreferrer"
            className="footerLinks fade-in-right"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/florencia-spina/"
            target="_blank"
            rel="noreferrer"
            className="footerLinks fade-in-right"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="footerLogo fade-in-right">
        <p>Wappstudio | 2021</p>
      </div>
    </div>
  );
};

export default Footer;
