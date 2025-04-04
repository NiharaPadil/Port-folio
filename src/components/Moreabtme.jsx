

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// // Card Component
// const Card = ({ title, description, onClick }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className=" p-8 rounded-xl shadow-2xl shadow-pink-800/40 border border-gray-700 flex flex-col items-center cursor-pointer hover:border-purple-500 transition-all duration-300 h-full opacity-80"
//             onClick={onClick}
//         >
//             <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-center">
//                 {title}
//             </h2>
//             <p className="text-md text-gray-300 text-center leading-relaxed">
//                 {description}
//             </p>
//         </motion.div>
//     );
// };

// // Moreabtme Component
// const Moreabtme = () => {
//     const navigate = useNavigate();

//     return (
//         <div id="moreabtme" className="relative py-20 px-4 sm:px-6 lg:px-8">
//             {/* Radial gradient background */}
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 to-transparent opacity-40 -z-10"></div>

//             <motion.h1 
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-16"
//             >
//                 Know More About Me
//             </motion.h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 <motion.div
//                     whileHover={{ scale: 1.05, rotate: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="h-full"
//                 >
//                     <Card
//                         title="Achievements"
//                         description="Explore my notable accomplishments and awards"
//                         onClick={() => navigate('/achievements')}
//                     />
//                 </motion.div>

//                 <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="h-full"
//                 >
//                     <Card
//                         title="Volunteering Experience"
//                         description="Discover my community involvement and social work"
//                         onClick={() => navigate('/volunteering-experience')}
//                     />
//                 </motion.div>

//                 <motion.div
//                     whileHover={{ scale: 1.05, rotate: 3 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="h-full"
//                 >
//                     <Card
//                         title="Extra Curriculars"
//                         description="View my hobbies and activities beyond academics"
//                         onClick={() => navigate('/extra-curriculars')}
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Moreabtme;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Card Component remains the same
const Card = ({ title, description, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl shadow-2xl shadow-pink-800/40 border border-gray-700 flex flex-col items-center cursor-pointer hover:border-purple-500 transition-all duration-300 h-full opacity-80"
            onClick={onClick}
        >
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-center">
                {title}
            </h2>
            <p className="text-md text-gray-300 text-center leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

// Moreabtme Component with scroll fix
const Moreabtme = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
    // Scroll to top before navigation
       
        navigate(path);
    };

    return (
        <div id="moreabtme" className="relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 to-transparent opacity-40 -z-10"></div>

            <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-16"
            >
                Know More About Me
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <motion.div
                    whileHover={{ scale: 1.05, rotate: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full"
                >
                    <Card
                        title="Achievements"
                        description="Explore my notable accomplishments and awards"
                        onClick={() => handleNavigation('/achievements')}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full"
                >
                    <Card
                        title="Volunteering Experience"
                        description="Discover my community involvement and social work"
                        onClick={() => handleNavigation('/volunteering-experience')}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full"
                >
                    <Card
                        title="Extra Curriculars"
                        description="View my hobbies and activities beyond academics"
                        onClick={() => handleNavigation('/extra-curriculars')}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Moreabtme;



