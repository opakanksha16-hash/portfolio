import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Sun, Moon, Mail, ExternalLink, ArrowUp, 
  Brain, Code, Cpu, Database, Code2, UserCheck, Globe, 
  Languages
} from 'lucide-react';
import './App.css';

function App() {
  // Theme Management
  const [darkMode, setDarkMode] = useState(true);
  
  // Custom Filter State
  const [filter, setFilter] = useState('All');

  // Contact Form Validation State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Scroll Progress Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Handle Form Actions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid.";
    }
    if (!formData.message) tempErrors.message = "Message cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Portfolio Datasets sourced and expanded from Developer.pdf
  const skills = {
    'core Language': ['Python', 'Machine Learning', 'Deep Learning', 'Node.js', 'Generative AI', 'React.js'],
    development: ['FastAPI', 'Streamlit', 'Java', 'PHP', 'HTML5 & CSS3', 'JavaScript'],
    toolsData: ['SQL', 'MySQL', 'Docker', 'Git & GitHub', 'SDLC', 'Debugging & Troubleshooting']
  };

  const projects = [
    {
      title: "Greentrans Management System",
      timeline: "Jan 2026 - Present",
      desc: "Developed an enterprise architecture logic ecosystem to track logistics, process operational parameters, and compute real-time analytical operational telemetry and metrics data pipelines securely.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      category: "Web App",
      github: "https://github.com/opakanksha16-hash/tms.git",
      live: "#"
    },
    {
      title: "Medical Friendly Chatbot Interface",
      timeline: "June 2025 - July 2025",
      desc: "Implemented a structured language parsing and conversational routing automation module with client interaction processing logic while mapping strict functional standard data layer rules protocols securely.",
      tech: ["Python", "Flask", "API Integration", "JavaScript", "HTML", "CSS"],
      category: "Web Developer",
      github: "https://github.com/opakanksha16-hash/medical-chatbot.git",
      live: "#"
    }
  ];

  const experience = [
    {
      role: "Web Development Intern",
      company: "Internboot",
      duration: "Nov 2025 - Jan 2026",
      details: "Collaborated in distributed agile team sprints with senior engineers scaffolding high-performance visual interfaces. Interpreted design requirements specs to construct robust modules and clean architectural components while parsing systemic code reviews smoothly."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Cimage Professional College",
      duration: "July 2023 - July 2026",
    },
    {
      degree: "Intermediate Education (CBSE)",
      institution: "ST Raza International School",
      duration: "April 2022 - April 2023",
    }
  ];

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Navigation Menu */}
      <nav className="navbar glass-panel">
        <div className="nav-logo">AKANKSHA</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section hero-container">
        <div className="hero-gradient-orb"></div>
        <motion.div 
          className="hero-badge glass-panel"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I am Akanksha Kumari<br />
          <span>Software Developer</span>
        </motion.h1>

        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          BCA graduate specializing in engineering intelligence engines, data workflows, structured micro-framework logic models, and scalable modern web solutions.
        </motion.p>

        <motion.div 
          className="hero-cta-group"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="btn-primary">View Artifacts</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '15px' }}>
              I am an agile and analytical computational professional passionate about modern neural pipeline engineering architectures. Combining algorithmic fundamentals from my computer application studies with applied modern methodologies like GenAI and automation scripting loops.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Equipped with robust problem-solving competencies, I approach codebases with diagnostic clarity—specializing across standard frameworks to scale functional solutions accurately.
            </p>
          </div>
          <div className="counter-grid">
            <div className="counter-card glass-panel">
              <div className="counter-number">2+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Core System Builds</div>
            </div>
            <div className="counter-card glass-panel">
              <div className="counter-number">8.16</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>BCA CGPA Baseline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Matrix</h2>
        <div className="skills-container">
          
          <div>
            <h3 className="skills-category-title"><Brain size={18} style={{ marginRight: 8, display: 'inline' }} /> Core Language</h3>
            <div className="skills-grid">
              {skills['core Language'].map((skill, index) => (
                <div key={index} className="skill-item glass-panel">{skill}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="skills-category-title"><Code size={18} style={{ marginRight: 8, display: 'inline' }} /> Frameworks & Languages</h3>
            <div className="skills-grid">
              {skills.development.map((skill, index) => (
                <div key={index} className="skill-item glass-panel">{skill}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="skills-category-title"><Database size={18} style={{ marginRight: 8, display: 'inline' }} /> Infrastructure & Methodology</h3>
            <div className="skills-grid">
              {skills.toolsData.map((skill, index) => (
                <div key={index} className="skill-item glass-panel">{skill}</div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Selected Projects</h2>
        
        <div className="filter-menu">
          {['All', 'Web Developer', 'Web App'].map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.filter(p => filter === 'All' || p.category === filter).map((project, idx) => (
            <motion.div 
              layout 
              key={idx} 
              className="project-card glass-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="project-img-placeholder">
                {project.category === 'Web Developer' ? <Brain size={40} /> : <Cpu size={40} />}
              </div>
              <div className="project-info">
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600 }}>{project.timeline}</span>
                <h3 style={{ margin: '5px 0 10px 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{project.desc}</p>
                <div className="project-tags">
                  {project.tech.map((t, i) => <span key={i} className="project-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer"><Code2 size={16} /> Code</a>
                  <a href={project.live} className="project-link"><ExternalLink size={16} /> Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience & Timeline Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Professional Milestones</h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-panel">
                <div className="timeline-date">{exp.duration}</div>
                <h3>{exp.role}</h3>
                <h4 style={{ color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '10px' }}>{exp.company}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="section">
        <h2 className="section-title">Academic Genesis</h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-panel">
                <div className="timeline-date">{edu.duration}</div>
                <h3>{edu.degree}</h3>
                <h4 style={{ color: 'var(--text-muted)', fontWeight: 500, margin: '5px 0' }}>{edu.institution}</h4>
                <span className="project-tag" style={{ display: 'inline-block', marginTop: '5px' }}>{edu.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Initiate Engagement</h2>
        <div className="contact-container glass-panel">
          {submitted ? (
            <p style={{ color: 'var(--accent-blue)', textAlign: 'center', fontWeight: 600 }}>✨ Message transmitted successfully! Let's build systemic intelligence.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleInputChange}></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Payload</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-tray">
          <a href="https://github.com/opakanksha16-hash" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={20} /></a>
          <a href="https://www.linkedin.com/in/akanksha-singh-418b86350" target="_blank" rel="noreferrer" aria-label="LinkedIn"><UserCheck size={20} /></a>
          <a href="mailto:akankshasingh23022@gmail.com" aria-label="Email"><Mail size={20} /></a>
          <a href="#contact" aria-label="Instagram"><Globe size={20} /></a>
        </div>
        <p>© 2026 Akanksha Kumari. Tailored to Web developer Specs.</p>
      </footer>

      {/* Scroll to Top Utility */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;