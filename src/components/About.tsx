import React, { useState, useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-fade-in-left' : ''}`}>
            <h2 className="section-title">About NanoTekk Inc.</h2>
            <p className="about-description">
              Founded with a vision to bridge the gap between innovative technology and practical 
              business solutions, NanoTekk Inc. has been at the forefront of digital transformation 
              for businesses of all sizes.
            </p>
            <p className="about-description">
              Our team of experienced developers, architects, and technology consultants work 
              collaboratively to deliver solutions that not only meet current needs but also 
              scale for future growth. We believe in the power of technology to transform 
              businesses and create lasting value.
            </p>
            
            <div className="about-values">
              <div className="value-item">
                <h4>Innovation First</h4>
                <p>We stay ahead of technology trends to deliver cutting-edge solutions.</p>
              </div>
              <div className="value-item">
                <h4>Quality Driven</h4>
                <p>Every project is built with meticulous attention to detail and best practices.</p>
              </div>
              <div className="value-item">
                <h4>Client Focused</h4>
                <p>Your success is our success. We work as partners, not just vendors.</p>
              </div>
            </div>
          </div>

          <div className={`about-stats ${isVisible ? 'animate-fade-in-right' : ''}`}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <div className="tech-elements">
                  <div className="element element-1">⚡</div>
                  <div className="element element-2">🚀</div>
                  <div className="element element-3">💎</div>
                  <div className="element element-4">🎯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;