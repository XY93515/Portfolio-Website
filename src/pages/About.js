import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';

export const About = () => {
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
    const section = document.querySelector('.about-section');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`section-container about-section${isVisible ? ' fade-in' : ''}`}>
      <StarsCanvas />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="about-heading">
          About&nbsp;<span className="purple-text">Me</span>
        </h2>
      </motion.div>
      <div className="about-container">
        <motion.div
          className="about-content-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="about-image-container">
            <img src="/Profile.png" alt="Paridhi Gupta" className="about-profile-img" />
          </div>
          <div className="about-content">
            <p className="about-text">
              Enthusiastic full-stack developer dedicated to create dynamic and meaningful web experiences. I thrive on solving problems across both frontend and backend with clean, efficient code. Always eager to learn and improve, I embrace every opportunity for growth. Currently, I am expanding my boundaries by diving deep into Agentic AI, learning to build intelligent workflows that automate complex product operations. Beyond work, I love exploring new concepts and feeding my curiosity. I value balance in life and start each day driven to make a positive impact.
            </p>
            <div className="about-cta">
              <a
                className="cv-download-btn"
                href="/resume_paridhi.pdf"
                download="resume_paridhi.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <span className="btn-icon">↓</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 