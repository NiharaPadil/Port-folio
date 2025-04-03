// import React, { useState } from "react"; // Add useState import
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Technologies from "./components/Technologies";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Education from "./components/Education"; // Add missing Education import
// import Moreabtme from "./components/Moreabtme";
// import Contact from "./components/Contact";
// import Achievements from "./components/Achievements";
// import VolunteeringExperience from "./components/VolunteeringExperience";
// import ExtraCurriculars from "./components/ExtraCurriculars";
// import ParallaxStars from "./components/BackgroundMov/ParallaxStars";
// import { Tabs, Tab } from '@mui/material';
// import ExperienceEducationTabs from "./components/UIVerse/ExperienceEducationTabs"; 

// const App = () => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-black relative">
//         {/* Parallax Stars Background */}
//         <ParallaxStars />

//         {/* Radial Gradient Overlay */}
//         <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-40 -z-10"></div>

//         {/* Main Content */}
//         <div className="flex-1 relative z-10">
//           <Navbar />
//           <div className="mx-auto px-8">
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Hero id="home" />
//                     <About id="about" />
//                     <Technologies />
//                     <Projects id="projects" />

// <ExperienceEducationTabs onTabChange={(tab) => console.log(tab)} />

//                     <Moreabtme />
//                     <Contact id="contact" />
//                   </>
//                 }
//               />
//               <Route path="/achievements" element={<Achievements />} />
//               <Route path="/volunteering-experience" element={<VolunteeringExperience />} />
//               <Route path="/extra-curriculars" element={<ExtraCurriculars />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Moreabtme from "./components/Moreabtme";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import VolunteeringExperience from "./components/VolunteeringExperience";
import ExtraCurriculars from "./components/ExtraCurriculars";
import ParallaxStars from "./components/BackgroundMov/ParallaxStars";
import ExperienceEducationTabs from "./components/UIVerse/ExperienceEducationTabs";
import Loader from "./components/UIVerse/Loader";

// Loader Component
// const Loader = () => (
//   <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
//     <div className="flex flex-col items-center">
//       <div className="relative w-20 h-20">
//         <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin border-t-transparent"></div>
//         <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-ping"></div>
//       </div>
//       <p className="mt-4 text-cyan-400 text-lg font-mono animate-pulse">
//         Initializing Portfolio Matrix...
//       </p>
//     </div>
//   </div>
// );

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
                        <Moreabtme />
                        <Contact id="contact" />
                      </>
                    }
                  />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route
                    path="/volunteering-experience"
                    element={<VolunteeringExperience />}
                  />
                  <Route
                    path="/extra-curriculars"
                    element={<ExtraCurriculars />}
                  />
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