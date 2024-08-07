import { FaPython, FaJs, FaJava, FaHtml5, FaCss3, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC, SiR, SiScikitlearn, SiMysql, SiFirebase, SiFigma, SiOracle, SiJupyter, SiTensorflow, SiPytorch } from 'react-icons/si';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define individual variants for each icon
const iconVariants = {
  python: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  java: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  react: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  git: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  github: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.8, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  cplusplus: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.2, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  c: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.7, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  html5: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.1, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  css3: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.3, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  js: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.9, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  r: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.4, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  scikitlearn: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.6, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  mysql: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  firebase: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.2, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  figma: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.1, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  oracle: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.3, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  jupyter: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.9, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  tensorflow: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 3.4, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  },
  pytorch: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: { duration: 2.8, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  }
};

const IconBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* Width of the box */
  height: 100px; /* Height of the box */
  border: 2px solid #ddd; /* Border around the box */
  border-radius: 50px; /* Rounded corners for the box */
  ${'' /* background-color: #f5f5f5;  */}
  box-shadow: 0 5px 10px rgba(255, 105, 180, 0.6); /* Shadow effect */
  
  margin: 0 12px;

  position: relative; /* Relative position for overlay positioning */

  /* Hover effect */
  &:hover .icon-name {
    opacity: 1;
    visibility: visible;
`;



const IconOverlay = styled.div`
  position: absolute;
  bottom: 150;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background for text visibility */
  color: white;
  text-align: center;
  padding: 4px;
  border-radius: 50px; /* Rounded corners for the overlay */
  opacity: 0.5;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;


const ScrollContainer = styled.div`
  overflow-x: scroll; /* Enable horizontal scrolling */
  -ms-overflow-style: none; /* Hide scrollbar in Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar in Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <ScrollContainer>
        <ScrollMenu>
          <div className="flex py-4">
            <IconBox variants={iconVariants.python} initial="initial" animate="animate">
              <FaPython className="text-4xl text-yellow-400" />
              <IconOverlay className="icon-name">Python</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.java} initial="initial" animate="animate">
              <FaJava className="text-4xl text-orange-400" />
              <IconOverlay className="icon-name">Java</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.react} initial="initial" animate="animate">
              <FaReact className="text-4xl text-cyan-400" />
              <IconOverlay className="icon-name">React</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.git} initial="initial" animate="animate">
              <FaGit className="text-4xl text-orange-300" />
              <IconOverlay className="icon-name">Git</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.github} initial="initial" animate="animate">
              <FaGithub className="text-4xl text-black-400" />
              <IconOverlay className="icon-name">GitHub</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.cplusplus} initial="initial" animate="animate">
              <SiCplusplus className="text-4xl text-green-700" />
              <IconOverlay className="icon-name">C++</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.c} initial="initial" animate="animate">
              <SiC className="text-4xl text-blue-300" />
              <IconOverlay className="icon-name">C</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.html5} initial="initial" animate="animate">
              <FaHtml5 className="text-4xl text-orange-800" />
              <IconOverlay className="icon-name">HTML5</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.css3} initial="initial" animate="animate">
              <FaCss3 className="text-4xl text-blue-400" />
              <IconOverlay className="icon-name">CSS3</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.js} initial="initial" animate="animate">
              <FaJs className="text-4xl text-yellow-400" />
              <IconOverlay className="icon-name">JavaScript</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.r} initial="initial" animate="animate">
              <SiR className="text-4xl text-white-900" />
              <IconOverlay className="icon-name">R</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.scikitlearn} initial="initial" animate="animate">
              <SiScikitlearn className="text-4xl text-orange-400" />
              <IconOverlay className="icon-name">Scikit-learn</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.mysql} initial="initial" animate="animate">
              <SiMysql className="text-4xl text-blue-500" />
              <IconOverlay className="icon-name">MySQL</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.firebase} initial="initial" animate="animate">
              <SiFirebase className="text-4xl text-yellow-400" />
              <IconOverlay className="icon-name">Firebase</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.figma} initial="initial" animate="animate">
              <SiFigma className="text-4xl text-purple-400" />
              <IconOverlay className="icon-name">Figma</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.oracle} initial="initial" animate="animate">
              <SiOracle className="text-4xl text-red-600" />
              <IconOverlay className="icon-name">Oracle</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.jupyter} initial="initial" animate="animate">
              <SiJupyter className="text-4xl text-orange-500" />
              <IconOverlay className="icon-name">Jupyter</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.tensorflow} initial="initial" animate="animate">
              <SiTensorflow className="text-4xl text-yellow-600" />
              <IconOverlay className="icon-name">TensorFlow</IconOverlay>
            </IconBox>
            <IconBox variants={iconVariants.pytorch} initial="initial" animate="animate">
              <SiPytorch className="text-4xl text-orange-700" />
              <IconOverlay className="icon-name">PyTorch</IconOverlay>
            </IconBox>
          </div>
        </ScrollMenu>
      </ScrollContainer>
    </div>
  );
}

export default Technologies;