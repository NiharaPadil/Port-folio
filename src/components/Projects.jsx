// Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import SeeMore from './UIVerse/SeeMore';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const ProjectCardWrapper = styled.div`
  ${'' /* .card {
    position: relative;
    width: 100%;
    height: 300px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
    cursor: pointer;
  } */}
  .card {
    position: relative;
    width: 100%;
    height: 300px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
    cursor: pointer;
    transform-style: preserve-3d;
  }

  .background {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 107%, #ff89cc 0%, #9cb8ec 30%, #00ffee 60%, #62c2fe 100%);
  }

  .project-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  .box {
    position: absolute;
    padding: 15px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon {
    display: inline-block;
    width: 24px;
    height: 24px;
  }

  .icon .svg {
    fill: black;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }

  .box:hover .svg {
    fill: white;
    filter: drop-shadow(0 0 5px white);
  }
  .box {
    position: absolute;
    padding: 15px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform-origin: bottom left;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .box1 {
    width: 50px;
    height: 50px;
    bottom: -50px;
    right: 20px;
  }

  .box2 {
    width: 50px;
    height: 50px;
    bottom: -50px;
    right: 80px;
  }
  .box3 {
    width: 50px;
    height: 50px;
    bottom: -50px;
    right: 140px;
  }

  .card:hover .box {
    bottom: 20px;
  }

  .project-info {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    transition: all 0.5s ease;
    z-index: 2;
  }

  .card:hover .project-info {
    top: 0;
  }

  .project-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .tech-tag {
    padding: 3px 10px;
    background: rgba(255,255,255,0.2);
    border-radius: 20px;
    font-size: 0.7rem;
    color: white;
    backdrop-filter: blur(5px);
  }
`;

const Projects = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div id={id} className="border-b border-neutral-900 pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.0, delay: 0.1 }} 
        className="my-20 text-center text-4xl text-white drop-shadow-[0_0_10px_#48dbfb]"
      >
        Projects
      </motion.h1>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {displayedProjects.map((project, index) => (

          <ProjectCardWrapper key={index}>

          <Tilt
      tiltAngleXInitial={0}
      tiltAngleYInitial={0}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glarePosition="all"
      glareMaxOpacity={0.2}
      glareEnable={true}
      glareBorderRadius="30px"
      transitionSpeed={300}
      scale={1.05}
      tiltReverse={true}
      gyroscope={true}
    >
            <motion.div
              className="card"
              onClick={() => handleCardClick(project)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="background"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag">+{project.technologies.length - 5}</span>
                  )}
                </div>
              </div>
              
              {project.githubLink && (
  <div className="box box1">
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </a>
  </div>
)}

{project.youtubeLink && (
  <div className="box box2">
    <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="icon">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </div>
)}

{project.DeployLink && (
  <div className="box box3">
    <a href={project.DeployLink} target="_blank" rel="noopener noreferrer" className="icon">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
      </svg>
    </a>
  </div>
)}
            </motion.div>
            </Tilt>
          </ProjectCardWrapper>
        ))}
      </div>

      <div className="text-center mt-8">
        <SeeMore 
          onClick={() => setShowAll(!showAll)} 
          showAll={showAll}
        />
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 sm:p-8" 
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 p-6 rounded-lg max-w-xl sm:max-w-4xl w-full relative"
          >
            <button 
              onClick={handleCloseModal} 
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-cyan-400 transition-colors"
            >
              &times;
            </button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-48 sm:h-64 object-cover rounded-md mb-4 border-2 border-gray-700 shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2 text-white">{selectedProject.title}</h2>
            <p className="text-sm text-neutral-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap mb-4">
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className="mr-2 mb-2 px-3 py-1 text-xs bg-gray-800 rounded-full text-cyan-400">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              )}
              {selectedProject.youtubeLink && (
                <a 
                  href={selectedProject.youtubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              )}
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors"
                >
                  View Project
                </a>
              )}
              {selectedProject.DeployLink && (
  <a 
    href={selectedProject.DeployLink} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
    </svg>
    Visit Live
  </a>
)}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;