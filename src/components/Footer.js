import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiGlobe, FiMail } from 'react-icons/fi';

const FooterSection = styled.footer`
  background: var(--gradient-dark);
  color: var(--white);
  padding: 4rem 0 2rem 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterBrand = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-gold);
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;

    a {
      width: 40px;
      height: 40px;
      background: rgba(212, 175, 55, 0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-gold);
      font-size: 1.25rem;
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary-gold);
        color: var(--dark-navy);
        transform: translateY(-2px);
      }
    }
  }
`;

const FooterSection2 = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.75rem;

      a {
        color: rgba(255, 255, 255, 0.8);
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary-gold);
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterContent>
          <FooterBrand>
            <h3>Biji Tharakan Thomas</h3>
            <p>
              Transforming businesses through digital innovation, AI implementation, 
              and strategic leadership in Dubai and beyond.
            </p>
            <div className="social-links">
              <motion.a 
                href="https://linkedin.com/in/bijitharakanthomas" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="https://instagram.com/bettroi" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a 
                href="https://bettroi.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <FiGlobe />
              </motion.a>
              <motion.a 
                href="mailto:info@bettroi.com"
                whileHover={{ scale: 1.1 }}
              >
                <FiMail />
              </motion.a>
            </div>
          </FooterBrand>

          <FooterSection2>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">AI & Digital Transformation</a></li>
              <li><a href="#services">Business Performance Optimization</a></li>
              <li><a href="#services">Innovation & Product Strategy</a></li>
              <li><a href="#services">Leadership Development</a></li>
            </ul>
          </FooterSection2>

          <FooterSection2>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </FooterSection2>

          <FooterSection2>
            <h4>Contact Info</h4>
            <ul>
              <li>Dubai Silicon Oasis, UAE</li>
              <li>+971 50 123 4567</li>
              <li>info@bettroi.com</li>
              <li>www.bettroi.com</li>
            </ul>
          </FooterSection2>
        </FooterContent>

        <FooterBottom>
          <p>&copy; 2024 Biji Tharakan Thomas. All rights reserved. Empowering digital transformation.</p>
        </FooterBottom>
      </div>
    </FooterSection>
  );
};

export default Footer;