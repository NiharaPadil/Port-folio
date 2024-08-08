import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';

const Achievements = () => {
    const navigate = useNavigate();

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-6xl font-bold text-gray-100">Achievements</h1>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-gradient-to-r from-pink-500 to-white-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Back
                </button>
            </div>

            {/* Add more space here */}
            <div className='mb-52' />

            <div>
                {ACHIEVEMENTS.map((achievement, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center items-start'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4 flex flex-col items-center'>
                            {/* Fixed size for images using inline styles */}
                            <img 
                                src={achievement.image} 
                                alt={achievement.title} 
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
                                {achievement.title}
                            </h6>
                            <p className='mb-4 text-neutral-400'>{achievement.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {achievement.details.map((detail, index) => (
                                    <span key={index} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                        {detail}
                                    </span>
                                ))}
                            </div>
                            {/* <p className='mb-8 text-sm text-neutral-400 '>{achievement.year}</p> */}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
