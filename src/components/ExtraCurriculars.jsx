import React from 'react';
import { useNavigate } from 'react-router-dom';

// Helper function to extract YouTube video ID from URL, including Shorts
const extractYouTubeID = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

// Sample Art component
const ArtComponent = ({ title, link }) => (
    <div className="min-w-max bg-gray-700 text-white p-4 rounded-lg shadow-lg mx-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold">
            {title}
        </a>
    </div>
);

// Sample Card component with embedded YouTube previews
const Card = ({ title, link }) => {
    const videoID = extractYouTubeID(link);

    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-lg">
                    {videoID ? (
                        <iframe
                            className="w-full h-56"
                            src={`https://www.youtube.com/embed/${videoID}`}
                            title={title}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="bg-gray-600 w-full h-56 flex items-center justify-center text-white">
                            Invalid YouTube Link
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white text-lg font-semibold">
                        {title}
                    </div>
                </div>
            </a>
        </div>
    );
};

const ExtraCurriculars = () => {
    const navigate = useNavigate();

    // Sample art items
    const artItems = [
      
        { title: 'WallArt 1', link: 'https://drive.google.com/file/d/1OOMTJMcqFnpJW2QFRYIIBS0KZfzXsjHS/view?usp=drive_link' },
         { title: 'WallArt 2', link: 'https://drive.google.com/file/d/1YFbevOYKj8fZm5tQsaRgP9HGKXNwYoO6/view?usp=drive_link' },
         { title: 'WallArt 3', link: 'https://drive.google.com/file/d/1qtro6978RX6uSwKOQMiQV-a1-SI5HTlC/view?usp=drive_link' },

        // Add more items as needed
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
        // Add more cards as needed
    ];

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-6xl font-bold text-gray-100">ExtraCurriculars</h1>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-gradient-to-r from-pink-500 to-white-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Back
                </button>
            </div>

            <p className="text-gray-300 mb-6 text-1xl">
                A peek into my world of hobbies and odd talents - because life’s too short not to mix a little fun with the serious stuff!
            </p>

            <div className='mb-32' />

            {/* Horizontal Scrolling Section for Art */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-100 mb-4">Art</h2>
                <div className="flex overflow-x-auto scrollbar-hidden space-x-4 pb-4">
                    {artItems.map((item, index) => (
                        <ArtComponent key={index} title={item.title} link={item.link} />
                    ))}
                </div>
            </div>

            <div className='mb-32' />

             {/* Instagram Channel Section */}
             <div className="mt-16"></div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">My Instagram Page</h2>
            <p className="text-gray-300 mb-6">
                 <span> This is the instagram page where me and my friend sing and post videos  </span>
                
                <a 
                    href="https://www.instagram.com/nidhara.tunes" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:underline"
                >
                    Visit the page 
                </a>
            </p>

            <div className='mb-32' />

            {/* Cards Section */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cardItems.map((item, index) => (
                    <Card key={index} title={item.title} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ExtraCurriculars;
