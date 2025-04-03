import React from 'react';
import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import BackToTop from "./UIVerse/BackToTop"

const Contact = ({ id }) => {
  return (
    <div id={id} className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-100}} 
        transition={{duration:1.5}} 
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p  
          whileInView={{opacity:1,x:0}} 
          initial={{opacity:0,x:-100}} 
          transition={{duration:1.5}} 
          className="text-lg text-neutral-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{opacity:1,x:0}} 
          initial={{opacity:0,x:100}} 
          transition={{duration:1.5}} 
          className="text-lg text-neutral-400"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="text-lg text-neutral-400 border-b"
        >
          {CONTACT.email}
        </a>

        <motion.div 
          whileInView={{opacity:1,y:0}} 
          initial={{opacity:0,y:100}} 
          transition={{duration:1.5}} 
          className="flex justify-center gap-4 text-2xl text-white py-10"
        >
          <a href="https://www.linkedin.com/in/nihara-padil/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://github.com/NiharaPadil" target="_blank" rel="noopener noreferrer">
            <FaGithub className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://www.instagram.com/nihahahahaa__?utm_source=qr&igsh=cTYweDZqdHlkNTZp" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="transition-transform transform hover:scale-150" />
          </a>
        </motion.div>
        <BackToTop className="margintop-10"/>
      </div>
    </div>
  );
};

export default Contact;