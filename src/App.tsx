import React, { useRef, useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { useLocomotiveScroll } from "./hooks/useLocomotiveScroll";
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

  // const scroll = useLocomotiveScroll(containerRef, {
  //   smooth: true,
  //   smartphone: {
  //     smooth: true,
  //   },
  //   tablet: {
  //     smooth: true,
  //   },
  // });

  // useEffect(() => {
  //   if (scroll) {
  //     const timer = setTimeout(() => {
  //       scroll.update();
  //     }, 200);
  //     return () => clearTimeout(timer);
  //   }
  // }, [darkMode, scroll]);

  return (
    <>
      {/* Fixed Navbar (always visible at top) */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scroll={scroll}
      />

      {/* Main Locomotive Scroll Container */}
      <div
        ref={containerRef}
        className={`relative min-h-screen ${
          darkMode ? "dark:bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
        data-scroll-container
      >
        <ParticleBackground isDarkMode={darkMode} />

        {/* Offset top padding so content doesn't go under fixed navbar */}
        <div className="relative z-10 pt-20">
          <section id="home" data-scroll-section>
            <Hero />
          </section>
          <section id="education" data-scroll-section>
            <Education />
          </section>
          <section id="experience" data-scroll-section>
            <Experience />
          </section>
          <section id="skills" data-scroll-section>
            <Skills />
          </section>
          <section id="projects" data-scroll-section>
            <Projects />
          </section>
          <section id="contact" data-scroll-section>
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
