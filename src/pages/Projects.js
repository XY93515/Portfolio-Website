import React, { useState, useEffect } from 'react';
import '../main.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React and Three.js.',
    image: 'portfolio.png',
    tech: ['JavaScript', 'React', 'Three.js'],
    code: 'https://github.com/yourusername/portfolio',
    featured: false,
  },
  {
    title: 'Real Time Text Editor',
    description: 'A collaborative text editor that allows multiple users to edit documents simultaneously with real-time synchronization.',
    image: 'editor.webp',
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Socket.io'],
    code: 'https://github.com/XY93515/RealTimeTextEditor/tree/master',
    featured: false,
  },
  {
    title: 'Todo App',
    description: 'Created a full-stack task management application that allows users to efficiently manage their tasks.',
    image: 'todo.jpeg',
    tech: ['JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB'],
    code: 'https://github.com/XY93515/Todo',
    featured: false,
  },
  {
    title: 'Food Delivery App',
    description: 'A food delivery application that allows users to order food and track their order.',
    image: 'FoodDelivery.webp',
    tech: ['JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
    code: 'https://github.com/XY93515/Major-Project',
    featured: false,
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
    
    const section = document.querySelector('.projects-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`section-container projects-section ${isVisible ? 'fade-in' : ''}`}>
      <h2 className="section-title">My <span className="purple-gradient">Projects</span></h2>
      <p className="projects-subtitle">Explore my latest work and creative solutions</p>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div 
            className={`project-card ${hoveredIndex === idx ? 'hovered' : ''}`} 
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="project-card-inner">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="project-link" href={project.code} target="_blank" rel="noopener noreferrer">
                    <span className="link-icon">💻</span>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 