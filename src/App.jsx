
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Moreabtme from './components/Moreabtme';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-black">
      <div className="fixed top-0 left-0 z-[-1] h-full w-full">
      <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_90%_80%_at_50%_-20%,rgba(128,0,64,.45),rgba(255,255,255,0))]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Projects/>
        <Experience/>
        <Moreabtme/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
