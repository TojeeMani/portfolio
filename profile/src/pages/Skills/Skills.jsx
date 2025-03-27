import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'Express', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile', level: 85 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Database', icon: 'fas fa-database' },
    { name: 'API', icon: 'fas fa-cloud' },
    { name: 'Mobile', icon: 'fas fa-mobile-alt' }
  ];

  return (
    <div className="skills">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Skills & Expertise</h1>
            <p className="subtitle has-text-centered">
              My technical skills and competencies
            </p>
          </div>
        </div>
      </section>

      <section className="section skills-grid">
        <div className="container">
          <div className="technologies-container">
            <h2 className="title is-2 has-text-centered mb-6">Technologies I Work With</h2>
            <div className="columns is-multiline is-centered">
              {technologies.map((tech, index) => (
                <div key={index} className="column is-2-desktop is-3-tablet is-4-mobile">
                  <div className="tech-card">
                    <i className={`${tech.icon} tech-icon`}></i>
                    <p className="tech-name">{tech.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-container mt-6">
            <h2 className="title is-2 has-text-centered mb-6">Skill Proficiency</h2>
            <div className="columns is-multiline">
              {skillCategories.map((category, index) => (
                <div key={index} className="column is-4">
                  <div className="skill-category">
                    <h3 className="title is-4 mb-4">{category.title}</h3>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6">Key Achievements</h2>
          <div className="columns is-multiline">
            <div className="column is-3">
              <div className="achievement-card">
                <i className="fas fa-code achievement-icon"></i>
                <div className="achievement-number">1000+</div>
                <div className="achievement-text">Hours Coded</div>
              </div>
            </div>
            <div className="column is-3">
              <div className="achievement-card">
                <i className="fas fa-project-diagram achievement-icon"></i>
                <div className="achievement-number">50+</div>
                <div className="achievement-text">Projects Completed</div>
              </div>
            </div>
            <div className="column is-3">
              <div className="achievement-card">
                <i className="fas fa-users achievement-icon"></i>
                <div className="achievement-number">30+</div>
                <div className="achievement-text">Happy Clients</div>
              </div>
            </div>
            <div className="column is-3">
              <div className="achievement-card">
                <i className="fas fa-award achievement-icon"></i>
                <div className="achievement-number">15+</div>
                <div className="achievement-text">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 