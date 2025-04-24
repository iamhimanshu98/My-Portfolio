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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 100);

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (id: string) => {
    if (scroll && scroll.scrollTo) {
      scroll.scrollTo(`#${id}`);
    }
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
            href="#home"
            className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
            onClick={() => handleScrollToSection("home")}
          >
            Portfolio
          </a>
          <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
