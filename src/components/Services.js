import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCpu, 
  FiTrendingUp, 
  FiRocket, 
  FiUsers, 
  FiShield,
  FiCloud,
  FiArrowRight,
  FiCheck,
  FiStar
} from 'react-icons/fi';

const ServicesSection = styled.section`
  padding: 8rem 0;
  background: var(--gradient-dark);
  color: var(--white);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  z-index: 2;

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(212, 175, 55, 0.2);
    color: var(--primary-gold);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(212, 175, 55, 0.3);
  }

  h2 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 800;
    margin-bottom: 2rem;

    .highlight {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 2;
  margin-bottom: 6rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  .service-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-navy);
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .features-list {
    list-style: none;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      color: rgba(255, 255, 255, 0.9);

      .check-icon {
        color: var(--primary-gold);
        font-size: 1rem;
      }
    }
  }

  .learn-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-gold);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      gap: 1rem;
    }
  }
`;

const ProcessSection = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 8rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 3rem;

    .highlight {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;

  .step-number {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 800;
    color: var(--dark-navy);
    margin: 0 auto 2rem;
    position: relative;
    z-index: 2;

    &::before {
      content: '';
      position: absolute;
      inset: -10px;
      border: 2px solid rgba(212, 175, 55, 0.3);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.7; }
      100% { transform: scale(1); opacity: 1; }
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--white);
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const CTASection = styled.div`
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 25px;
  padding: 4rem;
  text-align: center;
  margin-top: 6rem;
  position: relative;
  z-index: 2;

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const servicesData = [
    {
      icon: <FiCpu />,
      title: "AI & Digital Transformation",
      description: "Transform your business with cutting-edge AI implementation and comprehensive digital transformation strategies tailored for the Dubai market.",
      features: [
        "AI Strategy Development",
        "Process Automation",
        "Digital Roadmap Planning",
        "Technology Integration"
      ]
    },
    {
      icon: <FiTrendingUp />,
      title: "Business Performance Optimization",
      description: "Maximize ROI and operational efficiency through data-driven insights and proven optimization methodologies.",
      features: [
        "Performance Analytics",
        "KPI Development",
        "Process Improvement",
        "ROI Enhancement"
      ]
    },
    {
      icon: <FiRocket />,
      title: "Innovation & Product Strategy",
      description: "Accelerate innovation and bring breakthrough products to market with our comprehensive strategy and execution framework.",
      features: [
        "Product Development",
        "Market Entry Strategy",
        "Innovation Workshops",
        "Go-to-Market Planning"
      ]
    },
    {
      icon: <FiUsers />,
      title: "Leadership & Culture Transformation",
      description: "Build high-performance teams and foster innovation culture that drives sustainable organizational growth.",
      features: [
        "Leadership Development",
        "Culture Assessment",
        "Change Management",
        "Team Optimization"
      ]
    },
    {
      icon: <FiShield />,
      title: "Enterprise Security & Compliance",
      description: "Ensure robust security posture and regulatory compliance across all digital transformation initiatives.",
      features: [
        "Security Assessment",
        "Compliance Framework",
        "Risk Management",
        "Governance Strategy"
      ]
    },
    {
      icon: <FiCloud />,
      title: "Cloud & Infrastructure Modernization",
      description: "Modernize your IT infrastructure with scalable cloud solutions designed for enterprise-grade performance.",
      features: [
        "Cloud Migration",
        "Infrastructure Design",
        "Scalability Planning",
        "Performance Optimization"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current state, challenges, and opportunities for transformation."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Custom roadmap creation with clear milestones, timelines, and success metrics aligned to your goals."
    },
    {
      number: "03",
      title: "Implementation & Execution",
      description: "Agile execution with continuous monitoring, optimization, and stakeholder communication."
    },
    {
      number: "04",
      title: "Optimization & Scale",
      description: "Continuous improvement and scaling of successful initiatives across your organization."
    }
  ];

  return (
    <ServicesSection id="services" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ServicesHeader>
            <motion.div variants={itemVariants}>
              <div className="section-badge">
                <FiStar />
                Our Services
              </div>
              <h2>
                Comprehensive <span className="highlight">Digital Solutions</span> 
                for Modern Enterprises
              </h2>
              <p>
                From AI implementation to organizational transformation, we deliver 
                end-to-end solutions that drive measurable business impact.
              </p>
            </motion.div>
          </ServicesHeader>

          <ServicesGrid>
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FiCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="learn-more">
                  Learn More <FiArrowRight />
                </div>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <ProcessSection>
            <motion.h3 variants={itemVariants}>
              Our Proven <span className="highlight">Process</span>
            </motion.h3>
            <ProcessGrid>
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="step-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </ProcessStep>
              ))}
            </ProcessGrid>
          </ProcessSection>

          <motion.div variants={itemVariants}>
            <CTASection>
              <h3>Ready to Transform Your Business?</h3>
              <p>
                Join the ranks of Dubai's most successful organizations who have 
                partnered with us to achieve exceptional digital transformation results.
              </p>
              <div className="cta-buttons">
                <motion.a 
                  href="#contact" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                  <FiArrowRight />
                </motion.a>
                <motion.a 
                  href="#portfolio" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.a>
              </div>
            </CTASection>
          </motion.div>
        </motion.div>
      </div>
    </ServicesSection>
  );
};

export default Services;