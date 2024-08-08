import React from 'react';
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
    const navigate = useNavigate();

    return (
        <div className="p-10">
            <h1 className="text-center text-3xl font-semibold text-gray-100 mb-6">Achievements</h1>
            <p className="text-center text-gray-300 mb-6">Details about your achievements.</p>
            <button 
                onClick={() => navigate('/')} 
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Back
            </button>
        </div>
    );
};

export default Achievements;
