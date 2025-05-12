import React, { useRef, useEffect, useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import ParticleBackground from "./components/ParticleBackground"; // Particle Background component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Adjust the timeout as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Keep the Particle Background visible during loading */}
      {/* Show Loader during the loading state */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <Loader darkMode={darkMode} isVisible={isLoading} />
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            scroll={{
              scrollTo: (id: string) => {
                const section = document.querySelector(id);
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              },
            }}
          />
          <div
            ref={containerRef}
            className={`relative min-h-screen ${
              darkMode ? "dark:bg-gray-900" : "bg-white"
            } transition-colors duration-300`}
          >
            <ParticleBackground />
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

          <Toaster position="bottom-center" />
        </>
      )}
    </>
  );
}

export default App;
