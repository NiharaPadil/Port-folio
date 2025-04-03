// Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { EDUCATION } from '../constants';

const EducationSection = styled.section`
  padding: 4rem 0;
  color: white;
`;

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 40px; /* Added gap at top */
    width: 2px;
    height: calc(100% - 80px); /* Reduced height for gap */
    background: #334155;
    transform: translateX(-50%);
  }
`;

const EducationItem = styled(motion.div)`
  position: relative;
  width: 45%;
  padding: 1.5rem;
  border: 1px solid #334155;
  
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(226, 209, 209, 0.9);

  &:nth-child(odd) {
    margin-left: 55%;
  }

  &:nth-child(even) {
    margin-right: 5%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    width: 12px;
    height: 12px;
    background: #3b82f6;
    border-radius: 50%;
  }

  &:nth-child(odd)::before {
    left: -34px;
  }

  &:nth-child(even)::before {
    right: -34px;
  }
`;

const Education = ({ id }) => {
  return (
    <EducationSection id={id}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Education
      </motion.h2>

      <TimelineWrapper>
        {EDUCATION.map((item, index) => (
          <EducationItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-l font-semibold mb-1 text-blue-400">{item.title}</h3>
            <p className="text-stext-gray-300 mb-1">{item.institution}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">{item.duration}</p>
              <p className="text-sm font-semibold text-white-400">{item.performance}</p>
            </div>
          </EducationItem>
        ))}
      </TimelineWrapper>
    </EducationSection>
  );
};

export default Education;