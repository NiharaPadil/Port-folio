import React from 'react';
import about from '../assets/SpeechImg.png';
import backgroundImage from '../assets/BackImg1.png'; // Add your background image
import { ABOUT_TEXT1, ABOUT_TEXT2, ABOUT_TEXT3 } from '../constants';
import { motion } from "framer-motion";

const About = ({ id }) => {
  return (
    <div id={id} className="border-b border-neutral-900 pb-4 relative overflow-hidden">
      <h1 className="my-20 text-center text-4xl relative z-10">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap relative z-10">
        <div className="w-full lg:w-1/2 lg:p-8 relative">
          {/* Rotating Background Image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
              borderRadius: ["10%", "15%", "10%"]
            }}
            transition={{
              rotate: {
                duration: 30,
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
              width: '550px',  // Increase from 350px to 450px
              height: '500px', // Increase from 300px to 400px
              left: '10%',
              //top:'1%',
              opacity: 0.3,
              filter: 'blur(1px)',
            }}
          >
            <img
              src={backgroundImage}
              alt="background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* Glowing Foreground Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              duration: 2,
              ease: "easeInOut" 
            }} 
            className="relative"
          >
            <div className="flex items-center justify-center relative">
              <img
                src={about}
                alt="about"
                 className="rounded-[10%] w-[290px] h-[500px] object-cover bottom-10 relative drop-shadow-lg"

              />
              {/* Additional glow layer */}
              <div className="absolute inset-0 rounded-[10%]" 
                style={{
                  width: '390px',
                  height: '500px',
                  background: 'radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  animation: 'aaa 3s infinite alternate'
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ 
            duration: 2,
            ease: "easeInOut"
          }}
          className="w-full lg:w-1/2"
        >
          <div className="max-w-xl py-6 mx-auto lg:mx-0">
            <p className="my-4">{ABOUT_TEXT1}</p>
            <p className="my-4">{ABOUT_TEXT2}</p>
            <p className="my-4">{ABOUT_TEXT3}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;