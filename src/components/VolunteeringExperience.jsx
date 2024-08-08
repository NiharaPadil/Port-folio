import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VOLUNTEER } from '../constants';

const VolunteeringExperience = () => {
    const navigate = useNavigate();

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-6xl font-bold text-gray-100">Volunteering Experience</h1>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-gradient-to-r from-pink-500 to-white-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Back
                </button>
            </div>

            <div className='mb-52' />

            <div>
                {VOLUNTEER.map((vol, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center items-start'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4 flex flex-col items-center'>
                            {/* Ensure image URLs are correct */}
                            <img 
                                src={vol.image} 
                                alt={vol.role} 
                                style={{ width: '300px', height: '350px' }} 
                                className='mb-4 object-cover rounded-lg' 
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 text-xl font-semibold'>
                                {vol.role}
                            </h6>
                            <p className='mb-4 text-neutral-400'>{vol.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VolunteeringExperience;
