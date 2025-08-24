import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiAward, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget,
  FiBookOpen,
  FiGlobe,
  FiStar,
  FiZap
} from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 8rem 0;
  background: var(--light-gray);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, var(--white) 0%, transparent 100%);
    z-index: 1;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const AboutText = styled.div`
  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--gradient-primary);
    color: var(--dark-navy);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--dark-navy);
    margin-bottom: 2rem;
    line-height: 1.2;

    .highlight {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: 1.125rem;
    color: var(--medium-gray);
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const AboutVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MainImage = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      rgba(15, 23, 42, 0.3) 0%, 
      rgba(212, 175, 55, 0.2) 100%
    );
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const FloatingStats = styled(motion.div)`
  position: absolute;
  background: var(--white);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  backdrop-filter: blur(10px);

  &.stat-1 {
    top: 10%;
    left: -5%;
    width: 200px;
  }

  &.stat-2 {
    bottom: 15%;
    right: -5%;
    width: 220px;
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-navy);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--dark-navy);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: var(--medium-gray);
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ExpertiseCard = styled(motion.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
  }

  .icon {
    width: 60px;
    height: 60px;
    background: rgba(212, 175, 55, 0.1);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-gold);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--dark-navy);
    margin-bottom: 1rem;
  }

  p {
    color: var(--medium-gray);
    line-height: 1.6;
    font-size: 1rem;
    margin: 0;
  }
`;

const ValuesSection = styled.div`
  margin-top: 8rem;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--dark-navy);
    margin-bottom: 3rem;

    .highlight {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const ValueCard = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  background: var(--white);
  border-radius: 25px;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--gradient-primary);
  }

  .value-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-navy);
    font-size: 2rem;
    margin: 0 auto 2rem;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark-navy);
    margin-bottom: 1rem;
  }

  p {
    color: var(--medium-gray);
    line-height: 1.7;
    font-size: 1rem;
  }
`;

const About = () => {
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

  const expertiseData = [
    {
      icon: <FiZap />,
      title: "AI & Digital Transformation",
      description: "Leading organizations through comprehensive digital transformation journeys with cutting-edge AI implementation."
    },
    {
      icon: <FiTrendingUp />,
      title: "Business Strategy",
      description: "Developing data-driven strategies that deliver measurable ROI and sustainable competitive advantages."
    },
    {
      icon: <FiUsers />,
      title: "Leadership Development",
      description: "Mentoring C-level executives and building high-performance teams that drive innovation."
    },
    {
      icon: <FiGlobe />,
      title: "Global Operations",
      description: "Scaling businesses internationally with deep understanding of Middle East and global markets."
    }
  ];

  const valuesData = [
    {
      icon: <FiTarget />,
      title: "Innovation First",
      description: "We believe in pushing boundaries and embracing emerging technologies to create breakthrough solutions for our clients."
    },
    {
      icon: <FiStar />,
      title: "Excellence Driven",
      description: "Every project is executed with meticulous attention to detail and an unwavering commitment to delivering exceptional results."
    },
    {
      icon: <FiBookOpen />,
      title: "Continuous Learning",
      description: "We stay at the forefront of industry trends and technologies, constantly evolving our expertise to serve you better."
    }
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AboutContent>
            <AboutText>
              <motion.div variants={itemVariants}>
                <div className="section-badge">
                  <FiAward />
                  About Biji Thomas
                </div>
                <h2>
                  Pioneering <span className="highlight">Digital Excellence</span> 
                  in the Heart of Dubai
                </h2>
                <p>
                  With over two decades of experience leading digital transformation 
                  initiatives across Fortune 500 companies, I founded Bettroi to help 
                  organizations in Dubai and beyond harness the power of AI and emerging 
                  technologies.
                </p>
                <p>
                  My journey spans from engineering excellence at General Electric to 
                  strategic leadership roles at Baker Hughes and Meggitt, culminating 
                  in the creation of Dubai's premier digital innovation consultancy.
                </p>
              </motion.div>

              <ExpertiseGrid>
                {expertiseData.map((item, index) => (
                  <ExpertiseCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </ExpertiseCard>
                ))}
              </ExpertiseGrid>
            </AboutText>

            <AboutVisual>
              <MainImage
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              <FloatingStats 
                className="stat-1"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <div className="stat-icon">
                  <FiAward />
                </div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Successful Projects Delivered</div>
              </FloatingStats>

              <FloatingStats 
                className="stat-2"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <div className="stat-icon">
                  <FiTrendingUp />
                </div>
                <div className="stat-number">300%</div>
                <div className="stat-label">Average ROI Improvement for Clients</div>
              </FloatingStats>
            </AboutVisual>
          </AboutContent>

          <ValuesSection>
            <motion.h3 variants={itemVariants}>
              Our Core <span className="highlight">Values</span>
            </motion.h3>
            <ValuesGrid>
              {valuesData.map((value, index) => (
                <ValueCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesSection>
        </motion.div>
      </div>
    </AboutSection>
  );
};

export default About;