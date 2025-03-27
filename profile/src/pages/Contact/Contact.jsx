import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("ezXFvFCAD8L5xsEhm");
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'T', // Your EmailJS service ID
        'template_p7lpwq6',
        form.current,
        'ezXFvFCAD8L5xsEhm'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="contact">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Get in Touch</h1>
            <p className="subtitle has-text-centered">
              Let's work together on your next project
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <div className="contact-info-container">
                <h2 className="title is-3 mb-5">Contact Information</h2>
                
                <div className="contact-info-item">
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Your City, Country</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>tojeemani8@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="icon">
                    <i className="fas fa-phone"></i>
                  </span>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 9497082600</p>
                  </div>
                </div>

                <div className="social-links">
                  <a href="https://github.com/TojeeMani" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/tojee-mani" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:tojeemani8@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="column is-7">
              <div className="contact-form-container">
                <h2 className="title is-3 mb-5">Send a Message</h2>
                
                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Subject</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-heading"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button 
                        className={`button is-primary ${isSubmitting ? 'is-loading' : ''}`}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="notification is-success">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="notification is-danger">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="map-container">
            {/* Replace with your map embed code */}
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <p>Map goes here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
