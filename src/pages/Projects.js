import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React and Three.js.',
    image: 'portfolio1.png',
    tech: ['JavaScript', 'React', 'Three.js'],
    code: 'https://github.com/yourusername/portfolio',
    featured: false,
  },
  {
    title: 'File Deduplication Platform',
    description: 'Full-stack application using MD5 hashing to eliminate duplicate files, achieving 90% storage savings with real-time analytics.',
    image: 'deduplication.png',
    tech: ['React.js', 'TypeScript', 'FastAPI', 'SQLite'],
    code: 'https://github.com/XY93515/File-Deduplication-Platform',
    featured: true,
  },
  {
    title: 'Ticket Management System',
    description: 'A full-stack TMS with persona-based workflows for Customers, Staff, and Managers. Features a high-performance Go backend, RBAC, and secure JWT authentication for streamlined support tracking.',
    image: 'tms.png',
    tech: ['Next.js', 'Golang', 'TypeScript', 'PostgreSQL'],
    featured: false,
    ongoing: true,
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
      <StarsCanvas />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="purple-text">Projects</span>
      </motion.h2>

      <motion.p
        className="projects-subtitle"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Explore my latest work and creative solutions
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            className={`project-card ${hoveredIndex === idx ? 'hovered' : ''}`}
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
          >
            <div className="project-card-inner">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                  {project.ongoing && <span className="ongoing-badge">Ongoing</span>}
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                {project.code && (
                  <div className="project-links">
                    <a className="project-link" href={project.code} target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">💻</span>
                      <span>View Code</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;