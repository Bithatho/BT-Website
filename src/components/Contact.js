import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 8rem 0;
  background: var(--white);
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: var(--dark-navy);

    .highlight {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--medium-gray);
    margin-bottom: 3rem;
    line-height: 1.7;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--light-gray);
  border-radius: 15px;

  .icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-navy);
    font-size: 1.5rem;
  }

  .content {
    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--dark-navy);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--medium-gray);
      margin: 0;
      font-size: 1rem;
    }
  }
`;

const ContactForm = styled.form`
  background: var(--light-gray);
  padding: 3rem;
  border-radius: 25px;
  
  .form-group {
    margin-bottom: 2rem;

    label {
      display: block;
      font-weight: 600;
      color: var(--dark-navy);
      margin-bottom: 0.5rem;
    }

    input, textarea, select {
      width: 100%;
      padding: 1rem;
      border: 2px solid transparent;
      border-radius: 10px;
      font-size: 1rem;
      background: var(--white);
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ContactSection id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ContactContent>
            <ContactInfo>
              <h2>
                Let's <span className="highlight">Transform</span> Your Business
              </h2>
              <p>
                Ready to unlock your organization's potential? Get in touch with Dubai's 
                leading digital transformation expert.
              </p>

              <ContactItem>
                <div className="icon">
                  <FiPhone />
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <p>+971 50 123 4567</p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">
                  <FiMail />
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <p>info@bettroi.com</p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <p>Dubai Silicon Oasis, UAE</p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">
                  <FiLinkedin />
                </div>
                <div className="content">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/bijitharakanthomas</p>
                </div>
              </ContactItem>
            </ContactInfo>

            <ContactForm>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your.email@company.com" required />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Your company name" />
              </div>

              <div className="form-group">
                <label>Service Interest</label>
                <select>
                  <option>Select a service</option>
                  <option>AI & Digital Transformation</option>
                  <option>Business Performance Optimization</option>
                  <option>Innovation & Product Strategy</option>
                  <option>Leadership & Culture Transformation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your project or inquiry..." required></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </ContactForm>
          </ContactContent>
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;