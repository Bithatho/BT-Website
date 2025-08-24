import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = styled.section`
  padding: 8rem 0;
  background: var(--gradient-dark);
  color: var(--white);
`;

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <TestimonialsSection id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem' }}>
            Client Testimonials
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
            Hear from the leaders who have transformed their businesses with our expertise.
          </p>
        </motion.div>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
