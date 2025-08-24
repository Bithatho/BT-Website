import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiAward, FiTrendingUp, FiUsers } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(15, 23, 42, 0.95) 0%, 
    rgba(30, 58, 138, 0.9) 50%, 
    rgba(212, 175, 55, 0.1) 100%
  ),
  url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(1deg); }
    66% { transform: translateY(10px) rotate(-1deg); }
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: var(--white);
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  .highlight {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  color: var(--primary-gold);
  font-weight: 600;
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlayButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .play-icon {
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-navy);
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-gold);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80');
  background-size: cover;
  background-position: center;
  border: 6px solid var(--primary-gold);
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-navy);
    font-size: 1.5rem;
  }

  .content {
    .title {
      font-weight: 700;
      color: var(--dark-navy);
      margin-bottom: 0.25rem;
    }
    .subtitle {
      color: var(--medium-gray);
      font-size: 0.9rem;
    }
  }

  &.card-1 {
    top: 20%;
    left: -10%;
  }

  &.card-2 {
    top: 60%;
    right: -10%;
  }

  &.card-3 {
    bottom: 10%;
    left: 10%;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <HeroSection>
      <ParticleBackground />
      <div className="container">
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroText>
              <HeroSubtitle variants={itemVariants}>
                Digital Innovation Leader
              </HeroSubtitle>
              <HeroTitle variants={itemVariants}>
                Transforming <span className="highlight">Business</span> Through 
                <span className="highlight"> AI & Technology</span>
              </HeroTitle>
              <HeroDescription variants={itemVariants}>
                Biji Tharakan Thomas, Founder & CEO of Bettroi.com, empowering Dubai's 
                leading organizations with cutting-edge digital transformation strategies, 
                AI implementation, and sustainable business growth solutions.
              </HeroDescription>
              
              <ButtonGroup variants={itemVariants}>
                <motion.a 
                  href="#contact" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Transformation
                  <FiArrowRight />
                </motion.a>
                
                <PlayButton
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="play-icon">
                    <FiPlay />
                  </div>
                  Watch Success Stories
                </PlayButton>
              </ButtonGroup>

              <StatsGrid variants={itemVariants}>
                <StatCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Experience</div>
                </StatCard>
                <StatCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Delivered</div>
                </StatCard>
                <StatCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Companies Transformed</div>
                </StatCard>
              </StatsGrid>
            </HeroText>
          </motion.div>

          <HeroVisual>
            <ProfileImage
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            
            <FloatingCard 
              className="card-1"
              variants={floatingVariants}
              animate="animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="icon">
                <FiAward />
              </div>
              <div className="content">
                <div className="title">Industry Leader</div>
                <div className="subtitle">AI & Digital Innovation</div>
              </div>
            </FloatingCard>

            <FloatingCard 
              className="card-2"
              variants={floatingVariants}
              animate="animate"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="icon">
                <FiTrendingUp />
              </div>
              <div className="content">
                <div className="title">300% ROI</div>
                <div className="subtitle">Average Client Growth</div>
              </div>
            </FloatingCard>

            <FloatingCard 
              className="card-3"
              variants={floatingVariants}
              animate="animate"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="icon">
                <FiUsers />
              </div>
              <div className="content">
                <div className="title">Global Network</div>
                <div className="subtitle">Dubai & Beyond</div>
              </div>
            </FloatingCard>
          </HeroVisual>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;