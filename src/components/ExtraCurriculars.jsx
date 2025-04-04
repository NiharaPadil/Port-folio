import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { artItems } from '../constants';
import { cardItems } from '../constants';

// Helper function to extract YouTube video ID from URL
const extractYouTubeID = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const ExtraCurriculars = () => {
    const navigate = useNavigate();
    const [selectedArt, setSelectedArt] = useState(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

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

   

      // Art Component with modal trigger
      const ArtComponent = ({ title, image }) => (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="min-w-max bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 shadow-lg mx-4 cursor-pointer"
            onClick={() => setSelectedArt(image)}
        >
            <div className="relative group">
                <img 
                    src={image} 
                    alt={title}
                    className="w-64 h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-lg font-semibold">{title}</span>
                </div>
            </div>
        </motion.div>
    );

   // Card component for YouTube videos
   const Card = ({ title, link }) => {
    const videoID = extractYouTubeID(link);

    return (
        <Tilt {...tiltOptions} className="w-full h-full">
            <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 shadow-lg"
            >
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg">
                        {videoID ? (
                            <iframe
                                className="w-full h-56 rounded-lg"
                                src={`https://www.youtube.com/embed/${videoID}`}
                                title={title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="bg-gray-700 w-full h-56 flex items-center justify-center text-white rounded-lg">
                                Invalid YouTube Link
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">
                            {title}
                        </div>
                    </div>
                </a>
            </motion.div>
        </Tilt>
    );
};

return (
    <div id="extracurriculars" className="min-h-screen p-6 md:p-10 relative">
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16"
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6 md:mb-0">
                ExtraCurriculars
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

        {/* Description */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl"
        >
            A peek into my world of hobbies and odd talents - because life's too short not to mix a little fun with the serious stuff!
        </motion.p>

        {/* Artwork Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mr-4" />
                My Artwork
            </h2>
            
            <div className="flex overflow-x-auto scrollbar-hidden py-4">
                {artItems.map((item, index) => (
                    <ArtComponent key={index} title={item.title} image={item.image} />
                ))}
            </div>
        </motion.div>

        {/* Music Channel Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mr-4" />
                Music Channel
            </h2>
            
            <motion.a 
                whileHover={{ scale: 1.03 }}
                href="https://www.instagram.com/nidhara.tunes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
                Visit Nidhara Tunes
            </motion.a>
        </motion.div>

        {/* Performances Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mr-4" />
                My Performances
            </h2>
            
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {cardItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card title={item.title} link={item.link} />
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Artwork Modal */}
        {selectedArt && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedArt(null)}
            >
                <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setSelectedArt(null)}
                        className="absolute -top-8 right-0 text-white hover:text-purple-300 text-3xl z-50"
                    >
                        &times;
                    </button>
                    <motion.img
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        src={selectedArt}
                        alt="Enlarged artwork"
                        className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                    />
                    <div className="mt-4 text-center text-white text-lg">
                        {artItems.find(item => item.image === selectedArt)?.title}
                    </div>
                </div>
            </motion.div>
        )}

        <div className="h-20"></div>
    </div>
);
};

export default ExtraCurriculars;