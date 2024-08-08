import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";


export const HERO_CONTENT = `
I’m a passionate Data Science enthusiast and Software Engineer skilled in React Native, Python, and machine learning, committed to developing innovative applications and solving real-world problems.`;

export const ABOUT_TEXT1 = `
I'm Nihara Padil, with a Bachelor's in Computer Science and Engineering specializing in Data Science. I have a solid foundation in programming languages and frameworks, focusing on transforming complex data into actionable insights and developing innovative solutions.`

export const ABOUT_TEXT2 = `Currently, I'm enhancing my skills through practical projects and internships, working with datasets, implementing machine learning models, and developing meaningful applications. My experience includes developing the ResQ mobile application for disaster management and creating a wildlife conservation system using Streamlit and MySQL. I am focused on using technology to solve real-world problems and improve user experiences.`

export const ABOUT_TEXT3 =`In addition to my technical work, I'm involved in the tech community, organizing events, workshops, and hackathons, and mentoring aspiring developers. I'm always eager to learn and embrace new challenges that drive innovation.Outside of work, I enjoy traveling, singing, drawing, and dancing. Feel free to connect with me on LinkedIn or GitHub to learn more about my projects and achievements!
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Intern",
    company: "CoE Digital Forensics Intelligence, Sahyadri Mangalore",
    description: "Analyzed datasets with over 100,000 entries during a data science internship. Created visualizations to highlight key trends and implemented machine learning models that improved prediction accuracy by 15%.",
    technologies: ["Python", "Data Science", "Machine Learning", "Visualization"],
  },
];


export const PROJECTS = [
  {
    title: "ResQ - AI and IoT Enhanced Mobile Application for Disaster and Resource Management",
    image: project1,
    description:
      "A mobile application for disaster management with crowd-sourced reporting and resource coordination. Integrated IoT using LoRa for SOS signals during network outages and AI to manage food shelf life. Features include real-time reporting, donation tracking, and role-based navigation for normal users, rescue teams, and NGOs.",
    technologies: ["React Native", "Firebase ", "Expo"],
  },
  {
    title: "Environmental Data Observation and Species Preservation Management System",
    image: project2,
    description:
      "Developed a comprehensive wildlife conservation management system that streamlines data storage, retrieval, and organization. Implemented features for efficient data manipulation, security, process automation, and collaboration, enhancing overall system functionality and usability.",
    technologies: ["Streamlit", "MySQL", "Python"],
  },
  {
    title: "Aarambh - Smart First Aid Assistant",
    image: project3,
    description:
      "Aarambh, built on the Kivy framework, utilizes AI and datasets for real-time disease and symptom detection. Empowering users with personalized first aid guidance, it ensures effective response to medical emergencies until professional help arrives.",
    technologies: ["Kivy", "OpenCV", "Speech Recognition"],
  },
  {
    title: "Keylogger Detection",
    image: project4,
    description:
      "A program using Python with pynput, smtplib, threading, and dotenv for capturing keystrokes and sending logs via email. The project team includes Chirasmitha and Moulya, and they won first place for their keylogger project.",
    technologies: ["Python", "pynput", "smtplib", "threading", "dotenv"],
  },
  {
    title: "Bank Locker Authorization",
    image: project5,
    description:
      "Developed a system for secure authorization of bank locker access, focusing on user authentication and authorization mechanisms to ensure secure and efficient access control.",
    technologies: ["Python", "Database Management", "Security Protocols"],
  },
  {
    title: "Fake Bills Detection",
    image: project6,
    description:
      "A machine learning model to accurately detect fake bills from a dataset of genuine and fake receipts. The solution includes data preprocessing, logistic regression model building, and rigorous evaluation to enhance financial security and prevent fraud.",
    technologies: ["Python", "Logistic Regression", "Machine Learning"],
  },
];


export const CONTACT = {
  address: "AK Compound Padil Karmar M'lore",
  phoneNo: "+91 7204687050 ",
  email: "niharapadilhr@gmail.com",
};


export const ACHIEVEMENTS = [
  {
    year: "2023",
    title: "Cognizant Hackathon Finalist",
    description: "Ranked in the Top 12 at Cognizant’s Technoverse Hackathon, against 108 teams.",
    details: ["Hackathon", "Teamwork", "Innovation"],
    image: "src/assets/achievements/cog.png", // Replace with your actual image path
  },
  {
    year: "2024",
    title: "SAP Hackfest Hackathon Finalist",
    description: "National-level event held at PSG iTech, Coimbatore, ranked among the top 100 teams across the country after successfully passing two selection rounds.",
    details: ["Hackathon", "Problem Solving", "ResQ Project"],
    image: "src/assets/achievements/sap.png", // Replace with your actual image path
  },
  {
    year: "2023",
    title: "Cyber Expo First Place",
    description: "Secured first place in the departmental competition for the Keylogger project.",
    details: ["Python", "Cybersecurity", "Pynput", "Threading"],
    image: "src/assets/achievements/keylog.png", // Replace with your actual image path
  },
  
];

