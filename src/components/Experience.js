import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  padding: 8rem 0;
  background: var(--white);
`;

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ExperienceSection id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem' }}>
            Professional Experience
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--medium-gray)' }}>
            Over two decades of leadership across Fortune 500 companies and innovative startups.
          </p>
        </motion.div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;