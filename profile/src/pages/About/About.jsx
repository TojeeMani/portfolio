import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="section about-hero">
        <div className="container">
          <h1 className="title is-1 has-text-centered">About Me</h1>
          <div className="columns is-vcentered">
            <div className="column is-5">
              <div className="about-image-container">
                <figure className="image is-1by1">
                  <img 
                    src="/pic.png" 
                    alt="Tojee Mani" 
                    className="is-rounded profile-image" 
                  />
                </figure>
              </div>
            </div>
            <div className="column is-7">
              <div className="about-content">
                <h2 className="subtitle is-3">Full Stack Developer</h2>
                <p className="about-description">
                  Hello! I'm a passionate full-stack developer with a keen eye for creating elegant solutions.
                  With expertise in both frontend and backend development, I strive to build applications
                  that not only look great but also provide exceptional user experience.
                </p>
                <div className="tags are-medium">
                  <span className="tag is-primary">React</span>
                  <span className="tag is-primary">Node.js</span>
                  <span className="tag is-primary">JavaScript</span>
                  <span className="tag is-primary">TypeScript</span>
                  <span className="tag is-primary">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section interests-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Interests</h2>
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="interest-card">
                <i className="fas fa-code"></i>
                <h3>Coding</h3>
                <p>Passionate about writing clean, efficient code and learning new technologies.</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="interest-card">
                <i className="fas fa-book"></i>
                <h3>Learning</h3>
                <p>Continuously expanding knowledge in software development and new technologies.</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="interest-card">
                <i className="fas fa-users"></i>
                <h3>Collaboration</h3>
                <p>Enjoy working in teams and sharing knowledge with others.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 