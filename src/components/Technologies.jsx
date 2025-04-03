


'use client';
import React from 'react';
import TechStackIcon from './UIVerse/TechStackIcon';
import { motion } from 'framer-motion';

const techStacks = [
  { icon: 'c-program-icon.svg', language: 'C' },
  { icon: 'c-plus-plus-programming-language-icon.svg', language: 'C++' },
{ icon: 'python-svgrepo-com.svg', language: 'Python' },
{ icon: 'java-programming-language-icon.svg', language: 'Java' },
{ icon: 'r-programming-language-icon.svg', language: 'R' },
{ icon: 'html-icon.svg', language: 'HTML' },
{ icon: 'css-icon.svg', language: 'CSS' },
{icon: 'javascript-programming-language-icon.svg', language: 'JavaScript' },
{ icon: 'react-js-icon.svg', language: 'React.js' },
{ icon: 'react-native-app-icon.svg', language: 'React Native' },
{ icon: 'firebase-svgrepo-com.svg', language: 'Firebase' },
{ icon: 'flask.svg', language: 'Flask' },
{ icon: 'node-js-icon.svg', language: 'Node.js' },
{ icon: 'mysql-logo-svgrepo-com.svg', language: 'MySQL' },
{ icon: 'git-icon-svgrepo-com.svg', language: 'Git' },
{ icon: 'github-color-svgrepo-com.svg', language: 'GitHub' },
{ icon: 'figma-svgrepo-com.svg', language: 'Figma' },
{ icon: 'machine-learning_8618881.png', language: 'Machine Learning'}
];

const Technologies = () => {
  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] overflow-hidden" id="Portfolio">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.0, delay: 0.1 }} 
        className="my-20 text-center text-4xl text-white drop-shadow-[0_0_10px_#48dbfb]"
      >
        Projects
      </motion.h1> 

      <div className="container mx-auto flex justify-center items-center pb-[10%]">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2 md:gap-3">
          {techStacks.map((stack, index) => (
            <div
              key={stack.language}
              className="p-1" // Added padding to each grid item
              data-aos={index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'}
              data-aos-duration={index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'}
            >
              <TechStackIcon 
                TechStackIcon={stack.icon} 
                Language={stack.language}
                className="w-10 h-10 md:w-12 md:h-12" // Pass size props to your TechStackIcon
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
