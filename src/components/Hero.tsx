import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { typedStrings } from "../data/portfolioData";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: typedStrings,
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="pt-6 min-h-[90vh] lg:min-h-[80vh] flex flex-col md:flex-row items-center justify-center 
      px-4 md:px-8 lg:px-16"
    >
      <div
        className="text-center mx-10 lg:mx-20 md:text-left md:w-1/2 space-y-4"
        ref={nameRef}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{" "}
          <span className="block text-5xl md:text-6xl text-orange-600 dark:text-orange-500 transition-colors duration-300">
            Himanshu
          </span>
          <span className="text-4xl md:text-5xl">Kumawat</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-2xl text-gray-700 dark:text-gray-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {" "}
          <span
            ref={typedRef}
            className="text-orange-600 dark:text-orange-500 transition-colors duration-300"
          ></span>
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download="Himanshu"
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-600 text-orange-600 dark:text-orange-500 px-6 py-2 rounded-lg 
                hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      <motion.div
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
        ref={imageRef}
        initial={{ opacity: 0, y: -50 }} // Start above and hidden
        animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{
          duration: 0.5, // Smooth transition
          delay: 0.2, // Slight delay for sequencing
        }}
      >
        <img
          src="/profile4.jpg"
          alt="Profile"
          className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-xl ring-4 ring-orange-200 dark:ring-orange-100 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
