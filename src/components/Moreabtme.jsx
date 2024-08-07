import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 p-6 rounded-lg shadow-xl shadow-gray-800 border border-black transition-transform transform hover:scale-150 cursor-pointer flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-white text-center">{title}</h2>
            <p className="text-sm text-gray-300 text-center">{description}</p>
        </div>
    );
};


const Moreabtme = () => {
    return (
        <div className="py-20 ">
            <h1 className="text-center text-4xl font-semibold text-gray-100 mb-12">Know More About Me</h1>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <Card 
                        title="Achievements" 
                        
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <Card 
                        title="Volunteering Experience" 
                        
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <Card 
                        title="Extra Curriculars" 
                        
                    />
                </div>
            </div>
        </div>
    );
};

export default Moreabtme;
