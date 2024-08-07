import React from 'react';
import about from '../assets/about.jpg';
import { ABOUT_TEXT1, ABOUT_TEXT2, ABOUT_TEXT3 } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={about}
              alt="about"
              style={{
                borderRadius: '10%',
                width: '390px',
                height: '500px',
                objectFit: 'cover',
                boxShadow: '0 10px 30px -5px rgba(255, 255, 255, 0.6)', 
              }}
                  />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="max-w-xl py-6 mx-auto lg:mx-0">
            <p className="my-4">{ABOUT_TEXT1}</p>
            <p className="my-4">{ABOUT_TEXT2}</p>
            <p className="my-4">{ABOUT_TEXT3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
