import React, { useState, useEffect } from 'react';
import './Services.css';

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    icon: '💻',
    description: 'Custom software solutions built with cutting-edge technologies and best practices.',
    features: [
      'Full-stack web applications',
      'Mobile app development',
      'Desktop applications',
      'API development & integration',
      'Database design & optimization'
    ],
    color: '#667eea'
  },
  {
    id: 'solution-arch',
    title: 'Solution Architecture',
    icon: '🏗️',
    description: 'Scalable and robust architectural designs that grow with your business needs.',
    features: [
      'System architecture design',
      'Microservices architecture',
      'Cloud architecture planning',
      'Technology stack selection',
      'Performance optimization'
    ],
    color: '#764ba2'
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    icon: '⚙️',
    description: 'Streamline your development pipeline with automated workflows and CI/CD.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & logging',
      'Automated testing'
    ],
    color: '#f093fb'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: '🌐',
    description: 'Modern, responsive web applications that deliver exceptional user experiences.',
    features: [
      'React & Next.js applications',
      'Progressive Web Apps',
      'E-commerce platforms',
      'Content management systems',
      'SEO optimization'
    ],
    color: '#f5576c'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    icon: '💡',
    description: 'Cutting-edge solutions leveraging AI, ML, and emerging technologies.',
    features: [
      'AI/ML integration',
      'Blockchain solutions',
      'IoT applications',
      'Data analytics',
      'Emerging tech consulting'
    ],
    color: '#4facfe'
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    services.forEach(service => {
      const element = document.getElementById(`service-${service.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card ${visibleCards.has(`service-${service.id}`) ? 'visible' : ''} ${
                activeService === service.id ? 'active' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div 
                className="service-overlay"
                style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;