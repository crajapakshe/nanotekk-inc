import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="hero-title">
            Transforming Ideas into
            <span className="text-gradient"> Digital Reality</span>
          </h1>
          
          <p className="hero-description">
            NanoTekk Inc. delivers cutting-edge technology solutions that drive innovation, 
            streamline operations, and accelerate your business growth in the digital age.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToServices}>
              Explore Services
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </button>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'animate-fade-in-right' : ''}`}>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">💻</div>
              <span>Development</span>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🏗️</div>
              <span>Architecture</span>
            </div>
            <div className="tech-card">
              <div className="tech-icon">⚙️</div>
              <span>DevOps</span>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🌐</div>
              <span>Web Solutions</span>
            </div>
            <div className="tech-card">
              <div className="tech-icon">💡</div>
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;