import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.png";
import ach1 from "../assets/achievements/cog.png";
import ach2 from "../assets/achievements/sap.png";
import ach3 from "../assets/achievements/keylog.png";
import vol1 from "../assets/Volunteering/vol1.png"
import vol2 from "../assets/Volunteering/vol2.png"
import vol3 from "../assets/Volunteering/vol3.png"
import vol4 from "../assets/Volunteering/vol4.png"
import vol5 from "../assets/Volunteering/vol5.png"
import vol6 from "../assets/Volunteering/vol6.png"
import exp1 from "../assets/Experience/Internship.png"
import exp2 from "../assets/Experience/logowithleaf.png"
import wall1 from "../assets/ExtraCurr/1.jpg"
import wall2 from "../assets/ExtraCurr/2.jpg"
import wall3 from "../assets/ExtraCurr/3.jpg"




export const HERO_CONTENT = `
I’m a passionate Data Science enthusiast and Software Engineer skilled in React Native, Python, and machine learning, committed to developing innovative applications and solving real-world problems.`;

export const ABOUT_TEXT1 = `
I'm Nihara Padil, with a Bachelor's in Computer Science and Engineering specializing in Data Science. I have a solid foundation in programming languages and frameworks, focusing on transforming complex data into actionable insights and developing innovative solutions.`;

export const ABOUT_TEXT2 = `Currently, I'm enhancing my skills through practical projects and internships, working with datasets, implementing machine learning models, and developing meaningful applications. My experience includes developing the ResQ mobile application for disaster management and creating a wildlife conservation system using Streamlit and MySQL and building EcoAlert, an environmental monitoring app to detect illegal poaching and deforestation. I am focused on using technology to solve real-world problems and improve user experiences.`;

export const ABOUT_TEXT3 = `In addition to my technical work, I'm involved in the tech community, organizing events, workshops, and hackathons, and mentoring aspiring developers. I'm always eager to learn and embrace new challenges that drive innovation. Outside of work, I enjoy traveling, singing, drawing, and dancing. Feel free to connect with me on LinkedIn or GitHub to learn more about my projects and achievements!`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    img:exp2,
    role: "Intern",
    company: "Ukshati Technologies Pvt Ltd, Manglore",
    description: "Developing and maintaining cross-platform mobile applications using React Native. Collaborating with cross-functional teams to design and implement application features, ensuring smooth user experiences. Enhancing app performance and resolving bugsto optimize functionality. Adhering to agile methodologies and contributing to code reviews for maintaining code quality.",
    technologies: ["React Native", "MySQL", "Node.js"],
  },
  {
    year: "2023 ",
    img:exp1,
    role: "Intern",
    company: "CoE Digital Forensics Intelligence, Sahyadri Mangalore",
    description: "Analyzed datasets with over 100,000 entries during a data science internship. Created visualizations to highlight key trends and implemented machine learning models that improved prediction accuracy by 15%.",
    technologies: ["Python", "Data Science", "Machine Learning", "Visualization"],
  },
  


];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering in Computer Science and Engineering (Data Science)",
    duration: "Dec 2021 - Present",
    institution: "Sahyadri College of Engineering and Management, Karnataka, India",
    performance: "CGPA: 9.35"
  },
  {
    title: "12th Board - Science (PCMB)",
    duration: "2019 - 2021",
    institution: "Aloysius PU College, Karnataka, India",
    performance: "Percentage: 97%"
  },
  {
    title: "10th Board",
    duration: "2018 - 2019",
    institution: "St. Gerosa School, India",
    performance: "Percentage: 94.88%"
  }
];

export const PROJECTS = [
  {
    title: "ResQ - AI and IoT Enhanced Mobile Application for Disaster and Resource Mgnt",
    image: project1,
    description:
      "A mobile application for disaster management with crowd-sourced reporting and resource coordination. Integrated IoT using LoRa for SOS signals during network outages and AI to manage food shelf life. Features include real-time reporting, donation tracking, and role-based navigation for normal users, rescue teams, and NGOs.",
    technologies: ["React Native", "Firebase", "Expo"],
    githubLink: "https://github.com/SankshipthShetty/ResQ",
    youtubeLink:"https://youtu.be/FQp1ZShGhsE",
    DeployLink:null,
  },
  {
    title: "Environmental Data Observation and Species Preservation Management System",
    image: project2,
    description:
      "Developed a comprehensive wildlife conservation management system that streamlines data storage, retrieval, and organization. Implemented features for efficient data manipulation, security, process automation, and collaboration, enhancing overall system functionality and usability.",
    technologies: ["Streamlit", "MySQL", "Python"],
    githubLink:"https://github.com/NiharaPadil/DBMS_MINI_PROJ.git",
    youtubeLink:"https://www.youtube.com/watch?v=_umW077_9z8",
    DeployLink:null,
  },
  {
    title: "EcoAlert - Environmental Monitoring App",
    image: project7,
    description:
      "An environmental monitoring app that detects illegal poaching and deforestation using machine learning and IoT. It provides real-time alerts and data visualization for effective conservation efforts.",
    technologies: ["React Native", "Machine Learning", "IoT"],
    githubLink:"https://github.com/NiharaPadil/EcoAlert-expo.git",
    youtubeLink:"https://youtu.be/VOcxAyi1xxA",
  },
  
  {
    title: "Keylogger Detection",
    image: project4,
    description:
      "A program using Python with pynput, smtplib, threading, and dotenv for capturing keystrokes and sending logs via email.",
    technologies: ["Python", "pynput", "smtplib", "threading", "dotenv"],
    githubLink:"https://github.com/NiharaPadil/Cryptography-Network-Security-MiniProject",
    youtubeLink:null,
    DeployLink:null,
  },
  {
    title: "Bank Locker Authorization",
    image: project5,
    description:
      "Developed a system for secure authorization of bank locker access, focusing on user authentication and authorization mechanisms to ensure secure and efficient access control.",
    technologies: ["Python", "Database Management", "Security Protocols"],
    githubLink:"https://github.com/NiharaPadil/Bank_locker_auth",
    youtubeLink:null,
    DeployLink:null,
  },
  {
    title: "Fake Bills Detection",
    image: project6,
    description:
      "A machine learning model to accurately detect fake bills from a dataset of genuine and fake receipts. The solution includes data preprocessing, logistic regression model building, and rigorous evaluation to enhance financial security and prevent fraud.",
    technologies: ["Python", "Logistic Regression", "Machine Learning"],
    githubLink:"https://github.com/NiharaPadil/Fake_bills_Flask_React",
    youtubeLink:"https://youtu.be/yQxuXCIfbu0",
    DeployLink:null,
  },
  {
    title: "Aarambh - Smart First Aid Assistant",
    image: project3,
    description:
      "Aarambh, built on the Kivy framework, utilizes AI and datasets for real-time disease and symptom detection. Empowering users with personalized first aid guidance, it ensures effective response to medical emergencies until professional help arrives.",
    technologies: ["Kivy", "OpenCV", "Speech Recognition"],
    githubLink:"https://github.com/NiharaPadil/AARAMBH-Cognizant-hackathon",
    youtubeLink:null,
    DeployLink:null,
  },
  
];

export const CONTACT = {
  address: "AK Compound Padil Karmar M'lore",
  phoneNo: "+91 7204687050",
  email: "niharapadilhr@gmail.com",
};

export const ACHIEVEMENTS = [
  {
    year: "2023",
    title: "Cognizant Hackathon Finalist",
    description: "Ranked in the Top 12 at Cognizant’s Technoverse Hackathon, against 108 teams.",
    details: ["Hackathon", "Teamwork", "Innovation"],
    image: ach1 // Update this path
  },
  {
    year: "2024",
    title: "SAP Hackfest Hackathon Finalist",
    description: "National-level event held at PSG iTech, Coimbatore, ranked among the top 100 teams across the country after successfully passing two selection rounds.",
    details: ["Hackathon", "Problem Solving", "ResQ Project"],
    image: ach2 // Update this path
  },
  {
    year: "2023",
    title: "Cyber Expo First Place",
    description: "Secured first place in the departmental competition for the Keylogger project.",
    details: ["Python", "Cybersecurity", "Pynput", "Threading"],
    image: ach3// Update this path
  },
];

export const VOLUNTEER = [
  {
    role: 'President, SOSWC (Sahyadri Open Source Women’s Community)',
    description: 'Organized multiple workshops, hackathons, and events. Mentored students and taught Python. Organized DevHost ’24.',
    image: vol1
  },
  {
    role: 'MinDs Association, Technical Co-ordinator',
    description: 'Organized cultural events.',
    image: vol2
  },
  {
    role: 'Volunteer Head and Event Organizer, Synergia ’23',
    description: 'Managed volunteers and organized an event named TechMaze with over 100 participants.',
    image:vol3
  },
  {
    role: 'IEEE, Sahyadri Chapter, Member',
    description: 'Attended an industry visit to A1 Logics.',
    image:vol4
  },
  {
    role: 'Student Volunteer,Outreach Program ',
    description: 'Innovation and Entrepreneurship Outreach Program for Schools ',
    image:vol5
  },
  {
    role: 'Mentor, Junior Internship Program',
    description: 'Mentored  over 150 learners in Python through interactive sessions and the Hack Harbor Summer Internship program, fostering mutual growth and learning.',
    image:vol6
  },


];

export const artItems = [
  { title: 'WallArt 1', image: wall1 },
  { title: 'WallArt 2', image: wall2 },
  { title: 'WallArt 3', image: wall3 },
];


export const cardItems = [
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
        { title: 'Maand', link: 'https://youtube.com/shorts/rn3nJXJD3Ro?feature=share' },
        { title: 'Titli', link: 'https://youtube.com/shorts/UxEloBn8B7g?feature=share' },
        { title: 'Nange allava ', link: 'https://youtube.com/shorts/DVaVR8O00Sg?feature=share' },
    ];
