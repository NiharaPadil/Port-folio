import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/Prof.png"
import {motion} from "framer-motion";

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      delay:delay,
    }
  }
})
const Hero = () => {
  return (
    <div className=" border-b  border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
    <div className="flex flex-col items-center lg:items-start px-6 lg:px-20 py-4 lg:py-8">
      <motion.h1  
      variants={container(0)}
      initial="hidden"
      animate="visible"
      
      
       className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Nihara Padil</motion.h1>
        <motion.span 
        variants={container(0.5)}
      initial="hidden"
      animate="visible"
        
        className="bg-gradient-to-r from-white via-gray-800 to-white bg-clip-text text-3xl tracking-tight text-transparent">Data Science Enthusiast and Developer</motion.span>
    
        <motion.p 
        variants={container(1)}
      initial="hidden"
      animate="visible"
      className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
        </motion.p>   
    </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
        <div className=" flex justify-center">
        <motion.img 
        initial={{ x: 100, opacity: 0 }}
  animate={{ x: 3, opacity: 1.5 }}
  whileHover={{ scale: 1.05 }}
  transition={{ 
    type: "spring",    // Spring type for a bouncy effect
    ease: "easeInOut", // Easing function for smooth transition
    delay: 0.5,        // Delay before the animation starts
    duration: 1.5      // Duration of the animation
  }}


  
  src={profilePic} 
  alt="Nihara Profile"
  style={{
    borderRadius: '10%', 
    width: '390px', 
    height: '500px', 
    objectFit: 'cover', 
    boxShadow: '0 10px 30px -5px rgba(255, 255, 255, 0.7)', // White shadow with 30% opacity
    //hover
    transition: 'transform 0.2s ease-in-out',
  }}
/>

        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
