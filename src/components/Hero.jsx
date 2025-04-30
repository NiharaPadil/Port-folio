import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/YO.png";
import backgroundPic from "../assets/BackImg1.png"; // Add your background image
import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay,
    }
  }
});

const Hero = ({ id }) => {
  return (
    <div 
      id={id} 
      className="border-b border-neutral-900 pb-4 lg:mb-35 relative" 
      style={{ overflow: 'hidden' }}
    >
      <div className="flex flex-wrap mx-auto max-w-7xl relative z-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-6 lg:px-20 py-4 lg:py-8">
            <motion.h1  
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl 
                text-white 
                drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]
                hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]
                transition-all duration-300"
            >
              Nihara Padil
            </motion.h1>
            
            <motion.span 
      variants={container(0.5)}
      initial="hidden"
      animate="visible"
      className="typewriter text-white text-3xl tracking-tight 
                 [text-shadow:_0_0_20px_#ADD8E6,_0_0_40px_#87CEFA]
                 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]"
    >
      Data Science Enthusiast and Developer
    </motion.span>
            
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>   
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:p-8 relative">


          {/* First Irregular Circle */}
          {/* <motion.div
            className="absolute"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              borderRadius: ["50% 30% 70% 30%", "30% 50% 50% 70%", "50% 30% 70% 30%"]
            }}
            transition={{
              rotate: {
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              },
              borderRadius: {
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{
              width: '450px',
              height: '450px',
              left: '50px',
              top: '50px',
              background: 'radial-gradient(circle, rgba(0, 255, 153, 0.3) 0%, rgba(0,255,255,0.3) 70%)',
              border: '2px solid rgba(80, 12, 169, 0.2)',
              filter: 'blur(1px)',
              opacity: 0.3
            }}
          /> */}

          {/* Second Irregular Circle - Now positioned relative to container */}
          {/* <motion.div
            className="absolute"
            animate={{
              rotate: -360,
              scale: [0.9, 1, 0.9],
              borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "40% 60% 60% 40%"]
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: 3
              },
              scale: {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              },
              borderRadius: {
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{
              width: '500px',
              height: '500px',
              left: '20px',
              top: '20px',
              background: 'radial-gradient(circle, rgba(0, 255, 149, 0.1) 0%, rgba(18, 105, 205, 0.3) 70%)',
              border: '1px solid rgba(0, 255, 157, 0.5)',
              filter: 'blur(0.5px)',
              opacity: 0.2
            }}
          /> */}

         {/* Foreground Image with Glow Effect */}
<div className="flex justify-center relative z-10">
  <motion.img 
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ 
      type: "spring",
      ease: "easeInOut",
      delay: 0.5,
      duration: 1.5
    }}
    src={profilePic} 
    
    alt="Nihara Profile"
    className="rounded-lg relative"
    style={{
      width: '540px',
      height: '550px',
      right: '10px',
      borderRadius: '20%',
      bottom: '50px',
      objectFit: 'cover',
      filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))',
      //position: 'relative'
    }}
  />
  <motion.div
    className="absolute inset-0 rounded-lg"
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    style={{
      width: '490px',
      height: '700px',
      bottom: '190px',
      borderRadius: '20%',
      background: 'radial-gradient(circle at center, rgba(0,255,255,0.3) 0%, transparent 70%)',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: -1
    }}
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;