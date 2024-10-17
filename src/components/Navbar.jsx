import React from 'react';

import { FaLinkedin ,FaGithub, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=" mb-2 flex items-center justify-between px-6">
      <div className="flex flex-shrink-0 items-center">
      {/* <a href="#home" className="transition-transform transform hover:scale-110">Home</a>
        <a href="#about" className="transition-transform transform hover:scale-110">About</a>
        <a href="#projects" className="transition-transform transform hover:scale-110">Projects</a>
        <a href="#contact" className="transition-transform transform hover:scale-110">Contact</a> */}

      </div>
     
      <div className="flex items-center gap-4 text-2xl text-white py-10">
        <a href="https://www.linkedin.com/in/nihara-padil/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="transition-transform transform hover:scale-150" />
        </a>
        <a href="https://github.com/NiharaPadil" target="_blank" rel="noopener noreferrer">
          <FaGithub className="transition-transform transform hover:scale-150" />
        </a>
        <a href="https://www.instagram.com/nihahahahaa__?utm_source=qr&igsh=cTYweDZqdHlkNTZp" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="transition-transform transform hover:scale-150" />
        </a>
        <h1  > | </h1>

        <a href="https://drive.google.com/file/d/1SR0v3IxwAgbKzYjnpr3af4skskh1LgXt/view?usp=drive_link"   target="_blank" rel="noopener noreferrer">
          <h1 className="transition-transform transform hover:scale-110 text-0.2xl" >Resume</h1>
        </a>


      </div>
    </nav>
  );
}

export default Navbar;
