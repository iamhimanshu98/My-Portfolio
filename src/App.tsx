import React, { useRef /*, useEffect*/ } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
// import Lenis from "@studio-freight/lenis";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scroll={{
          scrollTo: (id: string) => {
            const section = document.querySelector(id);
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          },
        }}
      />

      {/* Main Scroll Container */}
      <div
        ref={containerRef}
        className={`relative min-h-screen ${
          darkMode ? "dark:bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
      >
        {/* Particle Background */}
        <ParticleBackground />

        {/* Content Sections */}
        <div className="relative z-10 pt-20">
          <section id="home">
            <Hero />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
