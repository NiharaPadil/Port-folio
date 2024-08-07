import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            width: '250px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ marginBottom: '10px' }}>{title}</h2>
            <p>{description}</p>
        </div>
    );
};


const Moreabtme = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Know More About Me</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <Card 
                    title="Achievements" 
                    
                />
                <Card 
                    title="Volunteering Experience" 
                    
                />
                <Card 
                    title="Extra Curriculars" 
                    
                />
            </div>
        </div>
    );
};
export default Moreabtme
