import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Display only a subset of projects based on the state
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
    <div className="border-b border-neutral-900 pb-40 mb-8">
<motion.h1  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.0,delay:0.1}} className="my-20 text-center text-4xl">Projects</motion.h1>      <div className="flex flex-wrap justify-center gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer"
            onClick={() => handleCardClick(project)}
            whileHover={{ scale: 1.1, rotate: 0 }} // Slightly scale up and rotate
            whileTap={{ scale: 0.95 }} // Slightly scale down on tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg h-72 flex flex-col transition-transform transform hover:scale-110">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-32 object-cover rounded-md mb-4 border-2 border-gray-500 shadow-lg"
              />
              <h2 className="text-xl font-bold mb-2 truncate">{project.title}</h2>
              <p className="text-sm text-neutral-400 truncate">{project.description}</p>
              <div className="flex flex-wrap mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="mr-2 mb-2 px-2 py-1 text-xs bg-gray-800 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="px-6 py-3 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {showAll ? 'Show Less' : 'See More >'}
        </button>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" 
          onClick={handleOverlayClick}
        >
          <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full mx-4 relative">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 object-cover rounded-md mb-4 border-2 border-gray-500 shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-sm text-neutral-400 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap mb-4">
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className="mr-2 mb-2 px-2 py-1 text-xs bg-gray-800 rounded-full">{tech}</span>
              ))}
            </div>
            {/* Add more details or additional information here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
