import React from 'react';
import styled from 'styled-components';

const ResumeButton = () => {
  return (
    <StyledWrapper>
      <button className="resumeBtn"  onClick={() => window.open('https://niharapadil.github.io/Resume.pdf', '_blank')}>
        <span className="IconContainer">
          <svg viewBox="0 0 576 512" height="0.9em" className="icon">
            <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
          </svg>
        </span>
        <p className="text" >RESUME</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .resumeBtn {
    width: 130px; /* Increased from 120px */
    height: 35px; /* Slightly taller */
    border-radius: 44px;
    border: 1px solid rgba(255, 255, 255, 0.349);
    background-color: rgb(12, 12, 12);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: relative;
    box-shadow: 
    0 0 8px rgba(104, 227, 200, 0.6),
    0 0 15px rgba(16, 236, 152, 0.4),
    inset 0 0 5px rgba(255, 255, 255, 0.2);
  animation: pulse 2s infinite alternate;
  }

  .IconContainer {
  width: 30px;
  height: 25px;
  background: linear-gradient(to bottom, rgb(32, 80, 78), rgb(22, 61, 86));
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition: all 0.3s ease;
  position: absolute;
  left: 5px;
}

@keyframes pulse {
    0% {
    box-shadow: 
      0 0 50px rgba(64, 180, 171, 0.9),
      0 0 20px rgba(110, 137, 145, 0.6),
      0 0 25px rgba(144, 175, 182, 0.3);
  }

  50% {
    box-shadow: 
      0 0 30px rgba(188, 71, 118, 0.8),
      0 0 20px rgba(150, 54, 159, 0.6),
      0 0 25px rgba(195, 84, 127, 0.3);
  }

  100% {
    box-shadow: 
      0 0 10px rgba(85, 149, 104, 0.6),
      0 0 15px rgba(16, 236, 152, 0.4);
  }
  

  
}

  .icon {
    color: white;
    width: 0.8em;
    height: 0.6em;
  }

  .text {
    width: 100%; /* Take full width */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 1;
    transition: all 0.3s ease;
    font-size: 0.5em; /* Slightly larger */
    font-weight: 300;
    letter-spacing: 1px;
    padding-left: 30px; /* Push text right to avoid icon */
    text-shadow: 
    0 0 5px rgba(104, 227, 200, 0.5),
    0 0 10px rgba(16, 236, 152, 0.3),
    0 0 15px rgba(211, 236, 219, 0.2);
  filter: brightness(1.6); /* Slightly boost brightness */

  }

  .resumeBtn:hover .IconContainer {
    width: 93%; /* Expand to full width */
    border-radius: 44px; /* Match button radius */
    alignItems:center;
    justify-content: center;

    transition-duration: 0.3s;
  }

  .resumeBtn:hover .text {
    transform: translateX(20px);
    opacity: 0;
    transition-duration: 0.3s;
  }

  .resumeBtn:active {
    transform: scale(0.95);
    transition-duration: 0.3s;
  }`;

export default ResumeButton;