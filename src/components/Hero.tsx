import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { typedStrings } from "../data/portfolioData";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

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
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
          Hi, I'm{" "}
          <span className="block text-5xl md:text-6xl text-orange-600 dark:text-orange-500 transition-colors duration-300">
            Himanshu
          </span>
          <span className="text-4xl md:text-5xl">Kumawat</span>
        </h1>
        <p className="text-2xl md:text-2xl text-gray-700 dark:text-gray-300 transition-colors duration-300">
          {" "}
          <span
            ref={typedRef}
            className="text-orange-600 dark:text-orange-500 transition-colors duration-300"
          ></span>
        </p>
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
            className="border border-orange-600 text-orange-600 dark:text-orange-500 px-6 py-2 rounded-lg 
            hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      <div
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
        ref={imageRef}
      >
        <img
          src="/profile4.jpg"
          alt="Profile"
          className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-xl ring-4 ring-orange-200 dark:ring-orange-100 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;