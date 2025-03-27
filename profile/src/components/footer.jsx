import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Portfolio</strong> by{' '}
          <a href="https://github.com/TojeeMani" target="_blank" rel="noopener noreferrer">
            Tojee Mani
          </a>
          . Built with{' '}
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          and{' '}
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            Bulma
          </a>
          .
        </p>
        <div className="social-links">
          <a href="https://github.com/TojeeMani" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/tojeemani" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:tojeemani@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
