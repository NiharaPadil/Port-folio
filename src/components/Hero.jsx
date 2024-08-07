import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/Prof.png"

const Hero = () => {
  return (
    <div className=" border-b  border-neutral-900 pb-4 lb:mb-35">
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
    <div className="flex flex-col items-center lg:items-start px-6 lg:px-20 py-4 lg:py-8">
      <h1 className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Nihara Padil</h1>
        <span className="bg-gradient-to-r from-blue-900 via-slate-600 to-pink-900 bg-clip-text text-3xl tracking-tight text-transparent">Data Science Enthusiast and Developer</span>
    
        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
        </p>   
    </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
        <div className=" flex justify-center">
        <img 
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
