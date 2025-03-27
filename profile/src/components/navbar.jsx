import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsActive(false);
  }, [location]);

  const handleResumeClick = () => {
    // You can add analytics tracking here if needed
    console.log('Resume downloaded');
  };

  return (
    <nav className={`navbar is-fixed-top ${isScrolled ? 'is-scrolled' : ''}`} role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item brand-name">
            <span className="has-text-weight-bold">Tojee Mani</span>
          </Link>

          <a
            role="button"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/" className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}>
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span>Home</span>
            </Link>

            <Link to="/about" className={`navbar-item ${location.pathname === '/about' ? 'is-active' : ''}`}>
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span>About</span>
            </Link>

            <Link to="/projects" className={`navbar-item ${location.pathname === '/projects' ? 'is-active' : ''}`}>
              <span className="icon">
                <i className="fas fa-code"></i>
              </span>
              <span>Projects</span>
            </Link>

            <Link to="/skills" className={`navbar-item ${location.pathname === '/skills' ? 'is-active' : ''}`}>
              <span className="icon">
                <i className="fas fa-tools"></i>
              </span>
              <span>Skills</span>
            </Link>

            <Link to="/contact" className={`navbar-item ${location.pathname === '/contact' ? 'is-active' : ''}`}>
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span>Contact</span>
            </Link>

            <div className="navbar-item">
              <div className="buttons">
                <a href="https://github.com/TojeeMani" className="button is-light" target="_blank" rel="noopener noreferrer">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
                <a 
                  href="/resume.pdf" 
                  className="button is-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleResumeClick}
                  download
                >
                  <span className="icon">
                    <i className="fas fa-file-alt"></i>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 