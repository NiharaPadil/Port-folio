import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="wrapper">
          <span className="letter letter1">W</span>
          <span className="letter letter2">e</span>
          <span className="letter letter3">l</span>
          <span className="letter letter4">c</span>
          <span className="letter letter5">o</span>
          <span className="letter letter6">m</span>
          <span className="letter letter7">e</span>
          <span className="letter letter8"> </span>
          <span className="letter letter9">t</span>
          <span className="letter letter10">o</span>
          <span className="letter letter11"> </span>
          <span className="letter letter12">N</span>
          <span className="letter letter13">i</span>
          <span className="letter letter14">h</span>
          <span className="letter letter15">a</span>
          <span className="letter letter16">r</span>
          <span className="letter letter17">a</span>
          <span className="letter letter18">'</span>
          <span className="letter letter19">s</span>
          <span className="letter letter20"> </span>
          <span className="letter letter21">P</span>
          <span className="letter letter22">o</span>
          <span className="letter letter23">r</span>
          <span className="letter letter24">t</span>
          <span className="letter letter25">f</span>
          <span className="letter letter26">o</span>
          <span className="letter letter27">l</span>
          <span className="letter letter28">i</span>
          <span className="letter letter29">o</span>
          <span className="letter letter30"> </span>
          <span className="letter letter31">W</span>
          <span className="letter letter32">e</span>
          <span className="letter letter33">b</span>
          <span className="letter letter34">s</span>
          <span className="letter letter35">i</span>
          <span className="letter letter36">t</span>
          <span className="letter letter37">e</span>
          <span className="letter letter38">!</span>
          <span className="letter letter38">     </span>
          
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0a0a12;

  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .wrapper {
    min-height: 4rem;
    font-size: 2.5rem;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0)
    );
    font-family: 'Courier New', monospace;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  .letter {
    width: 1ch;
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    left: 100%;
    animation: scroll 4s linear infinite;
  }

  @keyframes scroll {
    to {
      left: -1ch;
    }
  }

  /* Generate animation delays for 37 letters */
  ${Array.from({ length: 39}, (_, i) => {
    const totalLetters = 39;
    return `
      .letter${i + 1} {
        animation-delay: calc(4s / ${totalLetters} * (${totalLetters} - ${i + 1}) * -1);
      }
    `;
  }).join('')}
`;

export default Loader;