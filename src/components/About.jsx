import React from 'react';
import profilePic from '../assets/HeroImg1.png'; // Add your profile image
import backgroundImage from '../assets/BackImg1.png';
import { ABOUT_TEXT1, ABOUT_TEXT2, ABOUT_TEXT3 } from '../constants';
import { motion } from 'framer-motion';

const About = ({ id }) => {
  return (
    <div id={id} className="border-b border-neutral-900 pb-4 relative overflow-hidden">
      <h1 className="my-20 text-center text-4xl relative z-10">
        About<span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap relative z-10">
        {/* Left Column – Image and animated circles */}
        <div className="w-full lg:w-1/2 lg:p-8 relative flex justify-center items-center">

          {/* First Irregular Circle */}
          <motion.div
            className="absolute"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              borderRadius: ['50% 30% 70% 30%', '30% 50% 50% 70%', '50% 30% 70% 30%'],
            }}
            transition={{
              rotate: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              },
              borderRadius: {
                duration: 12,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              width: '450px',
              height: '450px',
              left: '120px',
              top: '0px',
              background: 'radial-gradient(circle, rgba(0, 255, 153, 0.3) 0%, rgba(0,255,255,0.3) 70%)',
              border: '2px solid rgba(80, 12, 169, 0.2)',
              filter: 'blur(1px)',
              opacity: 0.3,
            }}
          />

          {/* Second Irregular Circle */}
          <motion.div
            className="absolute"
            animate={{
              rotate: -360,
              scale: [0.9, 1, 0.9],
              borderRadius: ['40% 60% 60% 40%', '60% 40% 40% 60%', '40% 60% 60% 40%'],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
                delay: 3,
              },
              scale: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
              borderRadius: {
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              width: '500px',
              height: '500px',
              left: '100px',
              top: '0px',
              background: 'radial-gradient(circle, rgba(0, 255, 149, 0.1) 0%, rgba(18, 105, 205, 0.3) 70%)',
              border: '1px solid rgba(0, 255, 157, 0.5)',
              filter: 'blur(0.5px)',
              opacity: 0.2,
            }}
          />

          {/* Foreground Profile Image */}
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: 'spring',
              ease: 'easeInOut',
              delay: 0.5,
              duration: 1.5,
            }}
            src={profilePic}
            alt="Nihara Profile"
            className="rounded-lg relative"
            style={{
              width: '490px',
              height: '700px',
              borderRadius: '20%',
             objectFit: 'cover',
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))',
              // zIndex: 10,
               top: '-250px',
            }}
          />
        </div>

        {/* Right Column – About Text */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <p className="my-2 text-base text-neutral-400">{ABOUT_TEXT1}</p>
          <p className="my-2 text-base text-neutral-400">{ABOUT_TEXT2}</p>
          <p className="my-2 text-base text-neutral-400">{ABOUT_TEXT3}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
