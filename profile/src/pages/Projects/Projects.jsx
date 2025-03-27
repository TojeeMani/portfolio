import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      image: 'https://via.placeholder.com/400x300',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Bulma',
      image: 'https://via.placeholder.com/400x300',
      category: 'frontend',
      technologies: ['React', 'Bulma', 'CSS'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management using Node.js',
      image: 'https://via.placeholder.com/400x300',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    // Add more projects as needed
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">My Projects</h1>
            <p className="subtitle has-text-centered">
              A collection of my recent work
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="buttons is-centered filter-buttons">
            <button 
              className={`button ${filter === 'all' ? 'is-primary' : 'is-light'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`button ${filter === 'frontend' ? 'is-primary' : 'is-light'}`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`button ${filter === 'backend' ? 'is-primary' : 'is-light'}`}
              onClick={() => setFilter('backend')}
            >
              Backend
            </button>
            <button 
              className={`button ${filter === 'fullstack' ? 'is-primary' : 'is-light'}`}
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </button>
          </div>

          <div className="columns is-multiline projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="column is-4">
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.demoLink} className="button is-primary" target="_blank" rel="noopener noreferrer">
                          <span className="icon">
                            <i className="fas fa-external-link-alt"></i>
                          </span>
                          <span>Demo</span>
                        </a>
                        <a href={project.githubLink} className="button is-light" target="_blank" rel="noopener noreferrer">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="title is-4">{project.title}</h3>
                    <p className="description">{project.description}</p>
                    <div className="tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tag is-primary is-light">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 