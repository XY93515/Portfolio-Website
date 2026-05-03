import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';

/* ─── Data ─────────────────────────────────────────── */
const experienceData = [
  {
    year: 'July 2024 – Present',
    role: 'Software Developer',
    company: 'EagleView',
    type: 'Full-time',
    icon: '🚀',
    color: '#00c6ff',
    tech: ['Agentic AI', 'LLMs', 'Three.js', 'React', 'Redux', 'Zustand', 'Python', 'FastApi', 'SQL', 'AWS', 'Golang', 'Docker'],
    description: 'Actively contributing to a <strong>GIS-based product</strong> across both frontend and backend domains, driving innovation within modules including <strong>User Layer Management</strong>, Roof Property, Measurement, and <strong>QC Dashboard</strong>. Deployed microservices on <strong>Docker/AWS</strong> and enhanced API performance, while collaborating with cross-functional teams to resolve critical production issues and maintain SLA compliance. Currently architecting <strong>Agentic AI workflows</strong> to automate product operations and reduce manual intervention across the full stack.',
  },
  {
    year: 'Jan 2024 – July 2024',
    role: 'Software Developer Intern',
    company: 'EagleView',
    type: 'Internship',
    icon: '💡',
    color: '#00c6ff',
    tech: ['JavaScript', 'React', 'Redux', 'Zustand', 'Golang', 'Echo', 'Docker', 'AWS'],
    description: 'Actively contributed to the development of an impactful <strong>solar product</strong> designed to tackle real-world challenges. Gained meaningful hands-on experience across both <strong>frontend and backend</strong> domains, strengthening technical skills while delivering practical, <strong>sustainable value</strong>.',
  },
];

const educationData = [
  {
    year: '2020 – 2024',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'The LNM Institute Of Information And Technology',
    location: 'Jaipur, India',
    result: '8.09 CGPA',
    icon: '🎓',
  },
  {
    year: '2019 – 2020',
    degree: 'Class 12 — Science (CBSE)',
    institution: 'Arorvansh Public School',
    location: 'India',
    result: '94%',
    icon: '🏫',
  },
];

/* ─── Helpers ───────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    const currentRef = ref.current;
    if (currentRef) obs.observe(currentRef);
    return () => { if (currentRef) obs.unobserve(currentRef); };
  }, [threshold]);
  return [ref, visible];
}

/* ─── Component ─────────────────────────────────────── */
export const Experience = () => {
  const [pageRef, pageVisible] = useInView(0.03);

  return (
    <section ref={pageRef} className="exp-page-section section-container">
      <StarsCanvas />

      {/* ── Page heading ── */}
      <motion.div
        className="exp-page-header"
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: pageVisible ? 1 : 0, y: pageVisible ? 0 : -28 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="about-heading">
          My&nbsp;<span className="purple-text">Journey</span>
        </h2>
        <p className="exp-page-subtitle">
          A curated timeline of professional milestones and academic achievements.
        </p>
      </motion.div>

      {/* ════════════════════════════════════════
          EXPERIENCE — Alternating Timeline
          ════════════════════════════════════════ */}
      <motion.div
        className="exp-section-label"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: pageVisible ? 1 : 0, x: pageVisible ? 0 : -24 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className="exp-section-icon">💼</span>
        <span>Work Experience</span>
        <div className="exp-section-line" />
      </motion.div>

      <div className="exp-alt-timeline">
        {/* Centre spine */}
        <div className="exp-spine" />

        {experienceData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className={`exp-alt-row${isLeft ? ' exp-alt-row--left' : ' exp-alt-row--right'}`}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              animate={{ opacity: pageVisible ? 1 : 0, x: pageVisible ? 0 : (isLeft ? -60 : 60) }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.2, ease: 'easeOut' }}
            >
              {/* Card */}
              <motion.div
                className="exp-alt-card"
                whileHover={{ scale: 1.025, boxShadow: `0 20px 50px ${item.color}40` }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Glow accent top edge */}
                <div className="exp-alt-card-glow" style={{ background: `linear-gradient(90deg, ${item.color}, #00c6ff)` }} />

                <div className="exp-alt-card-top">
                  <span
                    className="exp-alt-badge"
                    style={{ background: `${item.color}22`, borderColor: item.color, color: item.color }}
                  >
                    {item.type}
                  </span>
                  <span className="exp-alt-year">{item.year}</span>
                </div>

                <h3 className="exp-alt-role">{item.role}</h3>
                <p className="exp-alt-company">
                  <span className="exp-alt-at">@</span> {item.company}
                </p>

                <p className="exp-alt-desc" dangerouslySetInnerHTML={{ __html: item.description }} />

                {/* Tech tags */}
                <div className="exp-alt-tags">
                  {item.tech.map((t, i) => (
                    <span key={i} className="exp-alt-tag">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Centre dot */}
              <div
                className="exp-alt-dot"
                style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}33, 0 0 20px 6px ${item.color}55` }}
              >
                <span className="exp-alt-dot-icon">{item.icon}</span>
              </div>

              {/* Empty spacer on opposite side */}
              <div className="exp-alt-spacer" />
            </motion.div>
          );
        })}
      </div>

      {/* ════════════════════════════════════════
          EDUCATION — Cards Row
          ════════════════════════════════════════ */}
      <motion.div
        className="exp-section-label"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: pageVisible ? 1 : 0, x: pageVisible ? 0 : -24 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: '4rem' }}
      >
        <span className="exp-section-icon">🎓</span>
        <span>Education</span>
        <div className="exp-section-line" />
      </motion.div>

      <div className="exp-edu-row">
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            className="exp-edu2-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: pageVisible ? 1 : 0, y: pageVisible ? 0 : 40 }}
            transition={{ duration: 0.6, delay: 0.55 + idx * 0.18, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(128,77,238,0.35)' }}
          >
            {/* Top stripe */}
            <div className="exp-edu2-stripe" />

            <div className="exp-edu2-icon-row">
              <div className="exp-edu2-icon-circle">
                <span className="exp-edu2-icon">{item.icon}</span>
              </div>
              <div className="exp-edu2-year-pill">{item.year}</div>
            </div>

            <h3 className="exp-edu2-degree">{item.degree}</h3>
            <p className="exp-edu2-institution">{item.institution}</p>

            <div className="exp-edu2-meta">
              <span className="exp-edu2-location">📍 {item.location}</span>
              <span className="exp-edu2-result">{item.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
