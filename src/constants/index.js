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
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "ResQ - AI and IoT Enhanced Mobile Application for Disaster and Resource Management",
    image: project1,
    description:
      "A mobile application for disaster management with crowd-sourced reporting and resource coordination. Integrated IoT using LoRa for SOS signals during network outages and AI to manage food shelf life. Features include real-time reporting, donation tracking, and role-based navigation for normal users, rescue teams, and NGOs.",
    technologies: ["React Native", "Firebase Firestore", "Expo"],
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
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
