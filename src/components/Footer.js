import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-wrapper">
          <div className="footer-title">Created by Lovelyo Yeremia</div>
          <div className="footer-icon">
            <a
              href="https://github.com/lovelyoyrmia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="github lovelyo"
                className="image-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/lovelyoyrmia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                alt="instagram lovelyo"
                className="image-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lovelyoyrmia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin lovelyo"
                className="image-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-contact">
          <div className="footer-title">Contact</div>
          <div className="footer-email">mokalulovelyo@gmail.com</div>
          <div className="footer-no">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2151/2151329.png"
              alt="indonesia-flag"
              style={{
                width: "1.1rem",
                height: "1.1rem",
                marginRight: "10px",
              }}
            />
            <span>+6285813501033</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
