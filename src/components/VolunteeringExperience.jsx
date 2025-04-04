import React, { useEffect } from 'react'; // Make sure to import useEffect
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { VOLUNTEER } from '../constants';

const VolunteeringExperience = () => {
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);
    
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, []);
    
    // Tilt configuration
    const tiltOptions = {
        tiltMaxAngleX: 8,
        tiltMaxAngleY: 8,
        glareEnable: true,
        glareMaxOpacity: 0.2,
        glareColor: '#a78bfa',
        scale: 1.02,
        transitionSpeed: 1500
    };

    const handleBack = () => {
        navigate('/#moreabtme', { replace: true });
        setTimeout(() => {
            const section = document.getElementById('moreabtme');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        
         <div id="volunteeringexperience" className="volunteer-page min-h-screen p-6 md:p-10">
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6 md:mb-0">
                    Volunteering Journey
                </h1>
                
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className="flex items-center gap-2 bg-pink-900 opacity-70 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <span>←</span>
                    <span>Back Home</span>
                </motion.button>
            </motion.div>

            {/* Volunteer Experiences */}
            <div className="space-y-16 md:space-y-20">
                {VOLUNTEER.map((vol, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 items-center"
                    >
                        {/* Tilt Card for Image */}
                        <div className="w-full lg:w-2/5">
                            <Tilt {...tiltOptions} className="w-full h-full">
                                <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-400/20 hover:border-purple-300/40 transition-all duration-500">
                                    <img 
                                        src={vol.image} 
                                        alt={vol.role}
                                        className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-purple-200 text-sm font-medium">{vol.organization}</p>
                                            <p className="text-white text-lg font-bold">{vol.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-3/5 bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full" />
                                <span className="text-sm text-purple-300 font-medium">{vol.duration}</span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {vol.role}
                            </h3>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {vol.description}
                            </p>
                            
                            {vol.skills && (
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {vol.skills.map((skill, i) => (
                                        <motion.span 
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1.5 bg-purple-900/40 text-purple-100 text-xs md:text-sm rounded-full border border-purple-700/50 backdrop-blur-sm"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer Spacer */}
            <div className="h-20"></div>
        </div>
    );
};

export default VolunteeringExperience;