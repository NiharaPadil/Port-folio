// import React from 'react';
import { FaPython, FaJs, FaJava, FaHtml5, FaCss3, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC, SiR, SiScikitlearn, SiMysql, SiFirebase, SiFigma, SiOracle, SiJupyter, SiTensorflow, SiPytorch } from 'react-icons/si';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  overflow-x: scroll; /* Enable horizontal scrolling */
  -ms-overflow-style: none; /* Hide scrollbar in Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar in Firefox */

  /* For Webkit browsers like Chrome and Safari */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <ScrollContainer>
        <ScrollMenu>
          <div className="flex space-x-8 py-4">
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaPython className="text-6xl text-yellow-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaJava className="text-6xl text-orange-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaReact className="text-6xl text-cyan-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaGit className="text-6xl text-orange-300" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaGithub className="text-6xl text-black-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiCplusplus className="text-6xl text-green-700" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiC className="text-6xl text-blue-300" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaHtml5 className="text-6xl text-orange-800" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaCss3 className="text-6xl text-blue-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <FaJs className="text-6xl text-yellow-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiR className="text-6xl text-white-900" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiScikitlearn className="text-6xl text-orange-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiMysql className="text-6xl text-blue-500" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiFirebase className="text-6xl text-yellow-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiFigma className="text-6xl text-purple-400" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiOracle className="text-6xl text-red-600" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiJupyter className="text-6xl text-orange-500" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiTensorflow className="text-6xl text-yellow-600" />
            </div>
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <SiPytorch className="text-6xl text-orange-700" />
            </div>
          </div>
        </ScrollMenu>
      </ScrollContainer>
    </div>
  );
}

export default Technologies;
