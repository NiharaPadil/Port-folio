import React from 'react';
import { motion } from 'framer-motion';

// Card Component
const Card = ({ title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }} // Start off-screen
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // Only animate once when scrolled into view
            className="bg-gradient-to-r from-black-100 p-6 rounded-lg shadow-xl shadow-pink-800 border border-black flex flex-col items-center"
        >
            <h2 className="text-xl font-bold mb-2 text-white text-center">{title}</h2>
            <p className="text-sm text-gray-300 text-center">{description}</p>
        </motion.div>
    );
};

// Moreabtme Component
const Moreabtme = () => {
    return (
        <div className="py-20">
            <h1 className="text-center text-4xl font-semibold text-gray-100 mb-12">Know More About Me</h1>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                <motion.div
                    whileHover={{ scale: 1.5, rotate: 5 }} // Scale up and rotate on hover
                    whileTap={{ scale: 0.9 }} // Slightly scale down on tap
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                >
                    <Card
                        title="Achievements"
                      description="Show more..."
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5, rotate: -5 }} // Scale up and rotate on hover
                    whileTap={{ scale: 0.9 }} // Slightly scale down on tap
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                >
                    <Card
                        title="Volunteering Experience"
                       description="Show more..."
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5, rotate: 5 }} // Scale up and rotate on hover
                    whileTap={{ scale: 0.9 }} // Slightly scale down on tap
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                >
                    <Card
                        title="Extra Curriculars"
                        description="Show more..."
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Moreabtme;
