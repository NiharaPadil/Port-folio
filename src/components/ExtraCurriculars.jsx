import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExtraCurriculars = () => {
    const navigate = useNavigate();

    return (
        <div className="p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-6xl font-bold text-gray-100 ">ExtraCurriculars</h1>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-gradient-to-r from-pink-500 to-white-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Back
                </button>
            </div>
            <p className=" text-gray-300 mb-6">Details about your ExtraCurriculars.</p>
        </div>
    );
};


export default ExtraCurriculars;
