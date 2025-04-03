import React, { useState } from "react"; // Add useState import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education"; // Add missing Education import
import Moreabtme from "./components/Moreabtme";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import VolunteeringExperience from "./components/VolunteeringExperience";
import ExtraCurriculars from "./components/ExtraCurriculars";
import ParallaxStars from "./components/BackgroundMov/ParallaxStars";
import { Tabs, Tab } from '@mui/material';
import ExperienceEducationTabs from "./components/UIVerse/ExperienceEducationTabs"; 

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-black relative">
        {/* Parallax Stars Background */}
        <ParallaxStars />

        {/* Radial Gradient Overlay */}
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-40 -z-10"></div>

        {/* Main Content */}
        <div className="flex-1 relative z-10">
          <Navbar />
          <div className="mx-auto px-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero id="home" />
                    <About id="about" />
                    <Technologies />
                    <Projects id="projects" />

<ExperienceEducationTabs onTabChange={(tab) => console.log(tab)} />

                    <Moreabtme />
                    <Contact id="contact" />
                  </>
                }
              />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/volunteering-experience" element={<VolunteeringExperience />} />
              <Route path="/extra-curriculars" element={<ExtraCurriculars />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;