import React, { useState } from 'react';
import styled from 'styled-components';
import Experience from '../Experience';
import Education from '../Education';

const ExperienceEducationTabs = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for Experience, 1 for Education

  return (
    <StyledWrapper>
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Experience
          </button>
          <button
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}>
            Education
          </button>
          <span className="glider" style={{ transform: `translateX(${activeTab * 100}%)` }} />
        </div>
      </div>
      
      <div className="tab-content">
        {activeTab === 0 ? <Experience /> : <Education />}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem 0;

  .tabs-container {
    display: flex;
    justify-content: center;
    width: fit-content;
    margin-bottom: 2rem;
  }

  .tabs {
    display: flex;
    position: relative;
    background-color: rgba(72, 135, 236, 0.1);
    padding: 0.4rem;
    border-radius: 9999px;
    border: 1px solid rgba(236, 72, 153, 0.3);
    transition: all 0.3s ease;
    width: fit-content;
    
    &:hover {
      box-shadow: 0 0 15px rgba(236, 72, 153, 0.5);
      border-color: rgba(236, 72, 153, 0.7);
    }
  }

  .tab {
    position: relative;
    height: 32px;
    width: 100px;
    font-size: 0.85rem;
    color: #f3f4f6;
    font-weight: 500;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    border: none;
    outline: none;
    
    &:hover {
      color: #ec4899;
    }

    &.active {
      color: #ffffff;
      font-weight: 600;
    }
  }

  .glider {
    position: absolute;
    height: 32px;
    width: 100px;
    background-color: rgba(236, 72, 153, 0.5);
    border-radius: 9999px;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.3);
    left: 0.4rem;
  }

  .tab-content {
    width: 100%;
    max-width: 90%;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .tabs {
      padding: 0.3rem;
    }
    
    .tab {
      height: 28px;
      width: 80px;
      font-size: 0.75rem;
    }
    
    .glider {
      height: 28px;
      width: 80px;
    }
  }
`;

export default ExperienceEducationTabs;