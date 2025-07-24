import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';

const educationData = [
  { year: '2020 - 2024', title: 'B.Tech - The LNM Institute Of Information And Technology', desc: 'CGPA - 8.09' },
  { year: '2019 - 2020', title: 'Class 12 (CBSE) - Arorvansh Public School', desc: 'Percentage - 94%' },
];

const experienceData = [
  { year: 'Present', title: 'Software Developer - EagleView', desc: 'Contributing in GIS-based applications by working with vector layers and tile rendering systems. Focused on building intuitive, user-centric features and optimizing backend processes to improve application performance, responsiveness, and overall user experience.' },
  { year: 'Jan 2024 - July 2024', title: 'Software Developer Intern - EagleView', desc: 'Gained hands-on experience in building web applications using React, Redux, and Golang and also worked with various DevOps tools like Docker, and AWS to enhance performance and deployment efficiency.' },
];

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
        {/* Left Side - About Me */}
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="about-image-container">
            <img src="/profile.jpeg" alt="Paridhi Gupta" className="about-profile-img" />
          </div>
          <div className="about-content">
            <p className="about-text">
            Enthusiastic full-stack developer dedicated to creating dynamic and meaningful web experiences. I thrive on solving problems across both frontend and backend with clean, efficient code. Always eager to learn and improve, I embrace every opportunity for growth. Beyond work, I love exploring new concepts and feeding my curiosity. I value balance in life and start each day driven to make a positive impact.
            </p>
            <div className="about-cta">
              <a
                className="cv-download-btn"
                href="/ParidhiGuptaResume.pdf"
                download="ParidhiGuptaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <span className="btn-icon">↓</span>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Vertical Separator */}
        <div className="about-vertical-separator" />
        {/* Right Side - Journey */}
        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Education Section */}
          <div>
            <h3 className="about-education-title">Education</h3>
            <div className="about-education-list">
              {educationData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="about-education-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="about-education-card-header">
                    <div className="about-education-title-text">{item.title}</div>
                    <div className="about-education-year">{item.year}</div>
                  </div>
                  <div className="about-education-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Experience Section */}
          <div>
            <h3 className="about-experience-title">Experience</h3>
            <div className="about-experience-list">
              {experienceData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="about-experience-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="about-experience-card-header">
                    <div className="about-experience-title-text">{item.title}</div>
                    <div className="about-experience-year">{item.year}</div>
                  </div>
                  <div className="about-experience-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 