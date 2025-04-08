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
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/tojeemani" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">
                    <span className="icon"><i className="fab fa-linkedin"></i></span>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/TojeeMani" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">
                    <span className="icon"><i className="fab fa-github"></i></span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="title is-4">Integrated MCA</h3>
              <p className="subtitle is-5">Amal Jyothi College of Engineering (Autonomous), Kanjirapally, Kottayam</p>
              <p className="subtitle is-6">APJ Abdul Kalam Technological University, Thiruvananthapuram</p>
              <p>11/2021 - Present | CGPA: 7.0</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">Higher Secondary Education</h3>
              <p className="subtitle is-5">KPM Public School, Mundakkayam</p>
              <p className="subtitle is-6">Central Board of Secondary Education</p>
              <p>2021 | Percentage: 83%</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">Secondary Education</h3>
              <p className="subtitle is-5">KPM Public School, Mundakkayam</p>
              <p className="subtitle is-6">Central Board of Secondary Education</p>
              <p>2019 | Percentage: 80%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="title is-4">Python/Django Full Stack Internship</h3>
              <p className="subtitle is-5">Nestsoft Technologies, Infopark Cochin</p>
              <p>06/2024 - 07/2024</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">MERN Stack Internship</h3>
              <p className="subtitle is-5">Ainsoft Solutions, Trivandrum</p>
              <p>08/2023 - 09/2023</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Projects</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="title is-4">Vegetable Store E-Commerce</h3>
              <p className="subtitle is-5">Micro Project (10/2024 - 11/2024)</p>
              <p>Developed a vegetable store e-commerce platform to facilitate seamless online ordering, inventory management, and secure payment processing, enhancing customer experience and operational efficiency.</p>
              <div className="tags">
                <span className="tag is-primary">PHP</span>
                <span className="tag is-primary">MySQL</span>
                <span className="tag is-primary">HTML</span>
                <span className="tag is-primary">CSS</span>
                <span className="tag is-primary">JavaScript</span>
                <span className="tag is-primary">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Technical Skills</h2>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="skill-category">
                <h3 className="title is-4">Programming Languages</h3>
                <div className="tags">
                  <span className="tag is-primary">C</span>
                  <span className="tag is-primary">C++</span>
                  <span className="tag is-primary">Java</span>
                  <span className="tag is-primary">Python</span>
                  <span className="tag is-primary">PHP</span>
                  <span className="tag is-primary">VB.NET</span>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="skill-category">
                <h3 className="title is-4">Web Development</h3>
                <div className="tags">
                  <span className="tag is-primary">HTML</span>
                  <span className="tag is-primary">CSS</span>
                  <span className="tag is-primary">JavaScript</span>
                  <span className="tag is-primary">jQuery</span>
                  <span className="tag is-primary">AJAX</span>
                  <span className="tag is-primary">Bootstrap</span>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="skill-category">
                <h3 className="title is-4">Databases</h3>
                <div className="tags">
                  <span className="tag is-primary">MySQL</span>
                  <span className="tag is-primary">SQLite</span>
                  <span className="tag is-primary">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="skill-category">
                <h3 className="title is-4">Frameworks and Libraries</h3>
                <div className="tags">
                  <span className="tag is-primary">Django</span>
                  <span className="tag is-primary">Laravel</span>
                  <span className="tag is-primary">ReactJs</span>
                  <span className="tag is-primary">NodeJs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Certifications</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="title is-4">Generative AI Certified Professional</h3>
              <p className="subtitle is-5">Oracle University</p>
              <p>07/2024</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">Blockchain Foundation Program</h3>
              <p className="subtitle is-5">Kerala Blockchain Academy (KBA)</p>
              <p>08/2024</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">Career Essentials in Generative AI</h3>
              <p className="subtitle is-5">Microsoft & LinkedIn Learning</p>
              <p>07/2024</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">SOLID Principles Every Developer Must Know Masterclass</h3>
              <p>08/2024</p>
            </div>
            <div className="timeline-item">
              <h3 className="title is-4">The DevOps Essentials – The Handbook</h3>
              <p className="subtitle is-5">Infosys</p>
              <p>08/2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 