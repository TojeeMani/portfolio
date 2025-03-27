import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span className="has-text-weight-bold is-size-4">Portfolio</span>
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/projects" className="navbar-item">
            Projects
          </Link>
          <Link to="/skills" className="navbar-item">
            Skills
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://github.com/yourusername" className="button is-light" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
