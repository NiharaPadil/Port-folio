

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Helper function to extract YouTube video ID from URL, including Shorts
const extractYouTubeID = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const ExtraCurriculars = () => {
    const navigate = useNavigate();

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

    // Sample art items
    const artItems = [
        { title: 'WallArt 1', link: 'https://drive.google.com/file/d/1OOMTJMcqFnpJW2QFRYIIBS0KZfzXsjHS/view?usp=drive_link' },
        { title: 'WallArt 2', link: 'https://drive.google.com/file/d/1YFbevOYKj8fZm5tQsaRgP9HGKXNwYoO6/view?usp=drive_link' },
        { title: 'WallArt 3', link: 'https://drive.google.com/file/d/1qtro6978RX6uSwKOQMiQV-a1-SI5HTlC/view?usp=drive_link' },
    ];

    // Sample card items
    const cardItems = [
        { title: 'Namma Yelubina Handara', link: 'https://youtu.be/W0uuPBxRxn4?si=POg834dIrcn8NliB' },
        { title: 'Narayana Narayan', link: 'https://youtu.be/xMFD1zDhVrg' },
        { title: 'Munjane Manjalli', link: 'https://youtu.be/QAKoywp3x_8' },
        { title: 'Mere Yara', link: 'https://youtu.be/wOCJddm9aDo' },
        { title: 'Naguva Nayana', link: 'https://youtu.be/upwcwtkjupk' },
        { title: 'Branch Entry 2K22', link: 'https://youtu.be/-dSa-ZKc3ho' },
        { title: 'Branch Entry 2K23', link: 'https://youtu.be/IjgGdwaueV0' },
        { title: 'Geejaga Hakki', link: 'https://youtu.be/8dC6J_WcDNg' },
        { title: 'Tune Kya Kiya', link: 'https://youtube.com/shorts/lJXzd6lhN1M?feature=share' },
        { title: 'Pasoori', link: 'https://youtube.com/shorts/PDrZt5LkiTE?feature=share' },
        { title: 'Kadalanu Kana', link: 'https://youtube.com/shorts/Ilfahk-OF4k?feature=share' },
        { title: 'Pehli Nazar', link: 'https://youtube.com/shorts/AwyvppvAcss?feature=share' },
        { title: 'Na Naguva Modalene', link: 'https://youtube.com/shorts/1oB8moyv55U?feature=share' },
    ];

    // Art Component with enhanced styling
    const ArtComponent = ({ title, link }) => (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="min-w-max bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 shadow-lg mx-4"
        >
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-purple-300 transition-colors">
                {title}
            </a>
        </motion.div>
    );

    // Card component with embedded YouTube previews and enhanced styling
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
                                ></iframe>
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
        <div id="extracurriculars" className="min-h-screen p-6 md:p-10 ">
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

            {/* Horizontal Scrolling Section for Art */}
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
                        <ArtComponent key={index} title={item.title} link={item.link} />
                    ))}
                </div>
            </motion.div>

            {/* Instagram Channel Section */}
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
                
                <p className="text-gray-300 mb-6 text-lg max-w-3xl">
                    This is the Instagram page where me and my friend sing and post videos. Check out our musical journey!
                </p>
                
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

            {/* Videos Section */}
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

            {/* Footer Spacer */}
            <div className="h-20"></div>
        </div>
    );
};

export default ExtraCurriculars;