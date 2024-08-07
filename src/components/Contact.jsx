import React from 'react';
import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="text-lg text-neutral-400">{CONTACT.address}</p>
        <p className="text-lg text-neutral-400">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="text-lg text-neutral-400 border-b">
          {CONTACT.email}
        </a>

        <div className="flex justify-center gap-4 text-2xl text-white py-10">
          <a href="https://www.linkedin.com/in/nihara-padil/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://github.com/NiharaPadil" target="_blank" rel="noopener noreferrer">
            <FaGithub className="transition-transform transform hover:scale-150" />
          </a>
          <a href="https://www.instagram.com/nihahahahaa__?utm_source=qr&igsh=cTYweDZqdHlkNTZp" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="transition-transform transform hover:scale-150" />
          </a>
        </div>
      </div>

    
    </div>
  );
};

export default Contact;
