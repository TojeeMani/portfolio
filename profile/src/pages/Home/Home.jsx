import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-6 hero-content">
                <h1 className="title is-1 hero-title">
                  Hi, I'm <span className="highlight">Tojee Mani</span>
                </h1>
                <h2 className="subtitle is-3 hero-subtitle">
                  Full Stack Developer
                </h2>
                <p className="hero-description">
                  I create beautiful and functional web applications with modern technologies.
                  Let's turn your ideas into reality!
                </p>
                <div className="hero-buttons">
                  <a href="#contact" className="button is-primary is-medium">
                    Get in Touch
                  </a>
                  <a href="#projects" className="button is-light is-medium">
                    View My Work
                  </a>
                </div>
              </div>
              <div className="column is-6 hero-image-container">
                <div className="floating-image">
                  <img src="/pic.png" alt="Tojee Mani" className="profile-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <a href="#about">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      <section className="section skills-preview">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-3">
              <div className="skill-card">
                <i className="fas fa-laptop-code"></i>
                <h3>Web Development</h3>
              </div>
            </div>
            <div className="column is-3">
              <div className="skill-card">
                <i className="fas fa-mobile-alt"></i>
                <h3>Responsive Design</h3>
              </div>
            </div>
            <div className="column is-3">
              <div className="skill-card">
                <i className="fas fa-database"></i>
                <h3>Backend Development</h3>
              </div>
            </div>
            <div className="column is-3">
              <div className="skill-card">
                <i className="fas fa-cloud"></i>
                <h3>Cloud Services</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 