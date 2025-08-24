import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PortfolioSection = styled.section`
  padding: 8rem 0;
  background: var(--light-gray);
`;

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <PortfolioSection id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem' }}>
            Success Stories
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--medium-gray)' }}>
            Transformative projects that delivered exceptional results for our clients.
          </p>
        </motion.div>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
