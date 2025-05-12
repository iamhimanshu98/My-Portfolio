import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scroll: any;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  scroll,
}) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [manualScroll, setManualScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 100);

      if (!manualScroll) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, manualScroll]);

  const handleScrollToSection = (id: string) => {
    setManualScroll(true);

    const element = document.getElementById(id);
    if (element) {
      const yOffset = id === "home" ? -80 : -30;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setTimeout(() => setManualScroll(false), 1000);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out transform shadow-sm
        ${
          isAtTop
            ? "bg-white/10 dark:bg-gray-900/10"
            : "bg-white dark:bg-gray-900"
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
            onClick={() => handleScrollToSection("home")}
          >
            Portfolio
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "home",
              "education",
              "experience",
              "skills",
              "projects",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className="text-lg cursor-pointer text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-300 capitalize bg-transparent border-none focus:outline-none"
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
              hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Hamburger menu button - only 2 lines */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none "
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ease-in-out
                    ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "rotate-0 translate-y-0"
                    }
                  `}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transition-opacity duration-300 ease-in-out
                    ${mobileMenuOpen ? "opacity-0" : "opacity-100"}
                  `}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown with smooth slide */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-md overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
          {[
            "home",
            "education",
            "experience",
            "skills",
            "projects",
            "contact",
          ].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-700 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-300 capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
