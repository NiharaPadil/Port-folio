
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Moreabtme from "./components/Moreabtme";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import VolunteeringExperience from "./components/VolunteeringExperience";
import ExtraCurriculars from "./components/ExtraCurriculars";
import ParallaxStars from "./components/BackgroundMov/ParallaxStars";
import ExperienceEducationTabs from "./components/UIVerse/ExperienceEducationTabs";
import Loader from "./components/UIVerse/Loader";
import ScrollToTop from "./components/UIVerse/ScrollToTop";




const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                        <Moreabtme id="moreabtme" />
                        <Contact id="contact" />


                        <footer className="w-full py-4 flex justify-center items-center bg-transparent">
      <div className="text-white text-lg font-semibold">
        Developed and maintained by{" "}
        <span className="text-purple-400 glow">Nihara🌼</span>
      </div>
    </footer> </>}/>
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/volunteering-experience" element={<VolunteeringExperience />}/>
                  <Route path="/extra-curriculars" element={<ExtraCurriculars />} />

                </Routes>
              </div>
            </div>
          </div>
        </Router>
      )}
    </>
  );
};

export default App;

