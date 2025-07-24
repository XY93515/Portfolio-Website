import React from 'react';
import { motion} from 'framer-motion';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';
import { SiGo, SiDjango, SiJavascript, SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaPython } from 'react-icons/fa';

const skillIcons = {
  'Javascript': <SiJavascript style={{ color: '#F7DF1E' }} />, // JS yellow
  'React': '⚛️',
  'Redux': '🔄',
  'three.js': '🌐',
  'Webpack/Gulp/Grunt': '🛠️',
  'Golang': <SiGo style={{ color: '#00ADD8' }} />, // Go official blue
  'Node.js': <FaNodeJs style={{ color: '#3C873A' }} />, // Node.js green
  'Python/Django': <><FaPython style={{ color: '#3776AB', marginRight: 2 }} /><SiDjango style={{ color: '#092E20' }} /></>, // Python blue + Django green
  'PostgresSQL/MySQL': '🗄️',
  'MongoDB': <SiMongodb style={{ color: '#47A248' }} />, // MongoDB green
  'AWS': '☁️',
  'Agentic AI': '🤖',
  'LLMs': '🧠',
  'LangChain': '🔗',
  'LangGraph': '📊',
};

const skillsData = [
  {
    title: 'Frontend',
    icon: '💻',
    iconBg: '#804dee',
    // cardBg: 'rgba(223, 197, 254, 0.8)',
    titleColor: '#9b51e0',
    skills: [
      { name: 'Javascript', percent: 95 },
      { name: 'React', percent: 90 },
      { name: 'Redux', percent: 80},
      { name: 'three.js', percent: 80},
      { name: 'Webpack/Gulp/Grunt', percent: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '🗄️',
    iconBg: '#804dee',
    // cardBg: 'rgba(230, 220, 250, 0.08)',
    titleColor: '#9b51e0',
    skills: [
      { name: 'Golang', percent: 80 },
      { name: 'Node.js', percent: 85},
      { name: 'Python/Django', percent: 70},
      { name: 'PostgresSQL/MySQL', percent: 80 },
      { name: 'MongoDB', percent: 80 },
    ],
  },
  {
    title: 'Others',
    icon: '🤖',
    iconBg: '#804dee',
    // cardBg: 'rgba(230, 220, 250, 0.08)',
    titleColor: '#9b51e0',
    skills: [
      { name: 'Agentic AI', percent: 90 },
      { name: 'LLMs', percent: 80 },
      { name: 'LangChain', percent: 80 },
      { name: 'LangGraph', percent: 80 },
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
      <div className="skills-categories wide" style={{ marginTop: '2rem' }}>
        {skillsData.map((category, idx) => (
          <motion.div
            className="skills-category-card wide"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            style={{ 
              background: 'rgba(223, 197, 254, 0.15)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(223, 197, 254, 0.25)',
              border: '1.5px solid #804dee',
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
