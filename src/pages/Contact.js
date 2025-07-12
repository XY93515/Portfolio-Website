import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import StarsCanvas from '../components/canvas/Stars';
import '../main.css';

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setStatus({
        show: true,
        success: false,
        message: 'Please fill in all fields.'
      });
      return;
    }
    
    setLoading(true);
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        to_name: process.env.REACT_APP_TO_NAME,
        to_email: process.env.REACT_APP_TO_EMAIL,
        message: form.message,
      }
    )
    
    .then(() => {
      setLoading(false);
      setStatus({
        show: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });

      setForm({
        name: '',
        email: '',
        message: ''
      });
      
      // Hide status message after 5 seconds
      setTimeout(() => {
        setStatus({ show: false, success: false, message: '' });
      }, 5000);
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS Error:', error);
      let errorMessage = 'Oops! Something went wrong. Please try again.';
      if (error.text) {
        console.error('Error details:', error.text);
        if (error.text.includes('template')) {
          errorMessage = 'Email template not found. Please check your template ID.';
        } else if (error.text.includes('service')) {
          errorMessage = 'Email service not found. Please check your service ID.';
        } else if (error.text.includes('public')) {
          errorMessage = 'Public key error. Please check your EmailJS configuration.';
        }
      }
      
      setStatus({
        show: true,
        success: false,
        message: errorMessage
      });
      
      setTimeout(() => {
        setStatus({ show: false, success: false, message: '' });
      }, 5000);
    });
  };

  return (
    <section className="section-container contact-section">
      <StarsCanvas />
      
      {/* Header Section */}
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get In <span className="purple-gradient">Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>

      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="form-header">
            <h3 className="form-title">Send me a message</h3>
            <p className="form-subtitle">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label className="label">Your Name</label>
              <input
                className="input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="form-field">
              <label className="label">Your Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="form-field">
              <label className="label">Your Message</label>
              <textarea
                className="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                rows={6}
                required
              />
            </div>
            
            <motion.button
              className="submit-button"
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-content">
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </>
                )}
              </span>
            </motion.button>
            
            {status.show && (
              <motion.div
                className={`status-message ${status.success ? 'success' : 'error'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Right Side - Contact Info & Earth */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-description">
              Ready to turn your vision into reality? Reach out through any of these channels.
            </p>
            
            <div className="contact-info">
              <motion.div 
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <span className="info-value">paridhiguptaaa@gmail.com</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91-6377800739</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="info-item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-value">Jaipur, India</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 