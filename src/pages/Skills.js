import React from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';
import {
  SiGo, SiJavascript, SiMongodb, SiTypescript, SiReact, SiNextdotjs,
  SiRedux, SiThreedotjs, SiFramer, SiWebpack, SiVite,
  SiFastapi, SiPostgresql, SiSqlite, SiAmazon, SiGithub, SiGit
} from 'react-icons/si';
import { FaNodeJs, FaPython } from 'react-icons/fa';

const skillIcons = {
  'Javascript/TypeScript': <SiTypescript style={{ color: '#3178C6' }} />,
  'React/Next.js': <SiReact style={{ color: '#61DAFB' }} />,
  'Redux/Zustand/Context API': <SiRedux style={{ color: '#764ABC' }} />,
  'three.js/Framer Motion': <SiThreedotjs style={{ color: '#FFFFFF' }} />,
  'Webpack/Vite': <SiVite style={{ color: '#646CFF' }} />,
  'Golang/Echo': <SiGo style={{ color: '#00ADD8' }} />,
  'Python/FastAPI': <SiFastapi style={{ color: '#05998B' }} />,
  'SQL': '📊',
  'SQlite': <SiSqlite style={{ color: '#003B57' }} />,
  'PostgresSQL': <SiPostgresql style={{ color: '#4169E1' }} />,
  'Agentic AI': '🤖',
  'Systems Design': '🏗️',
  'OOPS': '🧩',
  'Git/GitHub': <SiGithub style={{ color: '#FFFFFF' }} />,
  'AWS': <SiAmazon style={{ color: '#FF9900' }} />,
};

const skillsData = [
  {
    title: 'Frontend',
    icon: '💻',
    iconBg: '#00c6ff',
    // cardBg: 'rgba(223, 197, 254, 0.8)',
    titleColor: '#00c6ff',
    skills: [
      { name: 'Javascript/TypeScript', percent: 95 },
      { name: 'React/Next.js', percent: 90 },
      { name: 'Redux/Zustand/Context API', percent: 80 },
      { name: 'three.js/Framer Motion', percent: 80 },
      { name: 'Webpack/Vite', percent: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '🗄️',
    iconBg: '#00c6ff',
    // cardBg: 'rgba(230, 220, 250, 0.08)',
    titleColor: '#00c6ff',
    skills: [
      { name: 'Golang/Echo', percent: 80 },
      { name: 'Python/FastAPI', percent: 70 },
      { name: 'SQL', percent: 70 },
      { name: 'SQlite', percent: 70 },
      { name: 'PostgresSQL', percent: 70 },
    ],
  },
  {
    title: 'Others',
    icon: '🤖',
    iconBg: '#00c6ff',
    // cardBg: 'rgba(230, 220, 250, 0.08)',
    titleColor: '#00c6ff',
    skills: [
      { name: 'Agentic AI', percent: 70 },
      { name: 'Systems Design', percent: 85 },
      { name: 'OOPS', percent: 90 },
      { name: 'Git/GitHub', percent: 90 },
      { name: 'AWS', percent: 70 },
    ],
  },
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.li
      className="skills-list-item skill-bar-item"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
    >
      <div className="skill-bar-label-row">
        <span className="skill-bar-label">
          <span className="skill-emoji" style={{ marginRight: '0.5em' }}>{skillIcons[skill.name] || '💡'}</span>
          {skill.name}
        </span>
        <span className="skill-bar-percent">{skill.percent}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.percent}%` }}
          transition={{ duration: 1.2, ease: [0.4, 1.3, 0.6, 1] }}
        />
      </div>
    </motion.li>
  );
};

export const Skills = () => {

  return (
    <section className="section-container skills-section">
      <StarsCanvas />
      <h2 className="about-heading" style={{ marginBottom: '4rem' }}>
        Skills <span className="purple-text">Overview</span>
      </h2>
      <div className="skills-categories wide" style={{ marginTop: '8rem' }}>
        {skillsData.map((category, idx) => (
          <motion.div
            className="skills-category-card wide"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            style={{
              background: `${category.iconBg}15`,
              backdropFilter: 'blur(12px)',
              boxShadow: `0 8px 32px ${category.iconBg}30`,
              border: `1.5px solid ${category.iconBg}80`,
            }}
          >
            <div className="skills-category-icon-circle overlap" style={{ background: category.iconBg }}>
              <span className="skills-category-icon">{category.icon}</span>
            </div>
            <h3 className="skills-category-title" style={{
              color: 'white',
              fontWeight: '700',
              marginBottom: '2rem',
              WebkitTextFillColor: 'white'
            }}>
              {category.title}
            </h3>
            <ul className="skills-list checkmark-list">
              {category.skills.map((skill, i) => (
                <SkillBar skill={skill} index={i} key={skill.name} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
