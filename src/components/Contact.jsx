import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BackToTop from "./UIVerse/BackToTop";
import { CONTACT } from '../constants';

const Contact = ({ id }) => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/niharapadilhr@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.current.user_name.value,
          email: form.current.user_email.value,
          message: form.current.message.value,
          _subject: "New Message From Portfolio Contact Form",
          _template: "table",
          _captcha: "false" // Disable CAPTCHA for testing
        })
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        form.current.reset();
      } else {
        alert("Message failed to send. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please contact me directly at niharapadilhr@gmail.com");
      console.error('Submission error:', error);
    }
  };

  return (
    <div id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-neutral-900">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?galaxy,stars')] bg-cover opacity-20"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl py-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative z-10"
        >
          <div className="p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black bg-opacity-80 border border-gray-600 rounded-xl shadow-lg backdrop-blur-md">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              Contact Me
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* FormSubmit hidden fields */}
              <input type="text" name="_honey" style={{display: "none"}} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />

              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name..."
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-pink-900 via-blue-900 to-pink-900 text-white font-bold rounded-lg shadow-lg hover:opacity-80 transition"
              >
                <FiSend className="text-lg" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative z-10 text-center"
        >
          <motion.h1 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: -100 }} 
            transition={{ duration: 1.5 }} 
            className="text-4xl font-bold text-white mb-8"
          >
            Get in Touch
          </motion.h1>

          <div className="space-y-4">
            <motion.p  
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -100 }} 
              transition={{ duration: 1.5 }} 
              className="text-lg text-neutral-300"
            >
              {CONTACT.address}
            </motion.p>

            <motion.p 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: 100 }} 
              transition={{ duration: 1.5 }} 
              className="text-lg text-neutral-300"
            >
              {CONTACT.phoneNo}
            </motion.p>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} 
              initial={{ opacity: 0, y: 100 }} 
              transition={{ duration: 1.5 }}
            >
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-lg text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-400"
              >
                {CONTACT.email}
              </a>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} 
              initial={{ opacity: 0, y: 100 }} 
              transition={{ duration: 1.5 }} 
              className="flex justify-center gap-6 text-3xl text-white py-4"
            >
              <a href="https://www.linkedin.com/in/nihara-padil/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/NiharaPadil" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/nihahahahaa__?utm_source=qr&igsh=cTYweDZqdHlkNTZp" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          <BackToTop className="mt-4" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;