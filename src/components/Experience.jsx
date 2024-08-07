import React from 'react'
import { EXPERIENCES} from '../constants'

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#121212',
    color: '#ffffff',
  },
  header: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
itemContainer: {
  backgroundColor: '#1E1E1E',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
},
  year: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'purple',
  },
  role: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#FFFFFF',
  },
  company: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#888888',
    marginTop: '5px',
  },
  description: {
    fontSize: '16px',
    marginTop: '10px',
    lineHeight: '1.5',
    color: '#CCCCCC',
  },
  technologies: {
    fontSize: '16px',
    marginTop: '10px',
    fontStyle: 'italic',
    color: 'purple',
  },
};


const ExperienceItem = ({ item }) => (
  <div style={styles.itemContainer}>
    <h5 style={styles.company}>{item.company}</h5>
    <h4 style={styles.role}>{item.role}</h4>
    <h3 style={styles.year}>{item.year}</h3>
    
    <p style={styles.description}>{item.description}</p>
    <p style={styles.technologies}>Technologies: {item.technologies.join(', ')}</p>
  </div>
);

const Experience = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Experience</h2>
      {EXPERIENCES.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Experience;