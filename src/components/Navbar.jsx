import React from 'react';
import logo from '../assets/NP.png';
import { FaLinkedin ,FaGithub, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=" mb-2 flex items-center justify-between px-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
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

        <a href="https://shorturl.at/TQH9Y" target="_blank" rel="noopener noreferrer">
          <h1 className="transition-transform transform hover:scale-110 text-0.2xl" >Resume</h1>
        </a>


      </div>
    </nav>
  );
}

export default Navbar;
