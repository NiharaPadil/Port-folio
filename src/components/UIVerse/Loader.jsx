import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="tech-loader">
        {/* Laptop Structure */}
        <div className="laptop">
          <div className="screen">
            <div className="code-loader">
              <div className="code-line" />
              <div className="code-line" />
              <div className="code-line" />
              <div className="progress-bar" />
            </div>
          </div>
          <div className="keyboard" />
        </div>

        {/* Animated Mouse */}
        <div className="mouse">
          <div className="mouse-wheel" />
        </div>

        {/* Connection Dots */}
        <div className="connection-dots">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="dot" />
          ))}
        </div>

        {/* Loading Text */}
        <div className="loading-text">Loading...</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #000;
  color: #00ffff;
  font-family: 'Poppins', sans-serif;

  .tech-loader {
    position: relative;
    width: 300px;
    height: 250px;
    text-align: center;
  }

  /* Laptop Styles */
  .laptop {
    position: relative;
    width: 220px;
    height: 160px;
    margin: 0 auto;
    perspective: 1000px;
  }

  .screen {
    position: absolute;
    width: 100%;
    height: 80%;
    background: #0a0a12;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  .keyboard {
    position: absolute;
    bottom: -15px;
    width: 120%;
    height: 20%;
    left: -10%;
    background: #1a1a24;
    border-radius: 4px;
    box-shadow: inset 0px -2px 5px rgba(0, 255, 255, 0.3);
  }

  /* Code Loader Animation */
  .code-loader {
    padding: 15px;
    height: 100%;
  }

  .code-line {
    height: 10px;
    background: rgba(0, 255, 255, 0.3);
    margin-bottom: 6px;
    border-radius: 2px;
    animation: code-load 1.5s infinite ease-in-out;
    &:nth-child(1) { width: 80%; animation-delay: 0s }
    &:nth-child(2) { width: 65%; animation-delay: 0.2s }
    &:nth-child(3) { width: 70%; animation-delay: 0.4s }
  }

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    background: #00ffff;
    width: 0%;
    animation: progress 2s infinite linear;
    border-radius: 2px;
  }

  /* Mouse Animation */
  .mouse {
    position: absolute;
    right: 20px;
    bottom: 40px;
    width: 25px;
    height: 40px;
    border: 2px solid #00ffff;
    border-radius: 15px;
    animation: mouse-scroll 2s infinite ease-in-out;
  }

  .mouse-wheel {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: #00ffff;
    border-radius: 2px;
    animation: wheel-scroll 2s infinite;
  }

  /* Connection Dots */
  .connection-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 10px;
    opacity: 0.7;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: #00ffff;
    border-radius: 50%;
    animation: dot-pulse 1.4s infinite ease-in-out;
    &:nth-child(1) { animation-delay: 0s }
    &:nth-child(2) { animation-delay: 0.2s }
    &:nth-child(3) { animation-delay: 0.4s }
    &:nth-child(4) { animation-delay: 0.6s }
    &:nth-child(5) { animation-delay: 0.8s }
  }

  /* Loading Text */
  .loading-text {
    position: absolute;
    bottom: -50px;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    color: #00ffff;
    text-shadow: 0px 0px 8px rgba(0, 255, 255, 0.6);
    letter-spacing: 1px;
  }

  /* Animations */
  @keyframes code-load {
    0%, 100% { opacity: 0.3 }
    50% { opacity: 1 }
  }

  @keyframes progress {
    0% { width: 0% }
    100% { width: 100% }
  }

  @keyframes mouse-scroll {
    0%, 20% { transform: translateY(0) }
    40%, 60% { transform: translateY(-10px) }
    80%, 100% { transform: translateY(0) }
  }

  @keyframes wheel-scroll {
    0% { transform: translate(-50%, 0) }
    50% { transform: translate(-50%, 15px) }
    100% { transform: translate(-50%, 0) }
  }

  @keyframes dot-pulse {
    0%, 100% { transform: scale(1) }
    50% { transform: scale(1.5) }
  }
`;

export default Loader;
