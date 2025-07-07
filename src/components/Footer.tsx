import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">NanoTekk</span>
              <span className="logo-inc">Inc.</span>
            </div>
            <p className="footer-description">
              Transforming businesses through innovative technology solutions. 
              Your trusted partner in digital transformation.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="GitHub">💻</a>
              <a href="#" aria-label="Email">📧</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Solution Architecture</a></li>
              <li><a href="#services">DevOps & Automation</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Innovation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 hello@nanotekk.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 123 Tech Street<br />Innovation City, IC 12345</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} NanoTekk Inc. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;