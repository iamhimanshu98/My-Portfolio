import React, { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

const greetings = ["Hello", "नमस्ते", "Ciao", "こんにちは"];
const directions = ["from-top", "from-left", "from-right", "from-bottom"];

const darkModeColors = [
  "text-green-500",
  "text-yellow-500",
  "text-violet-500",
  "text-red-500",
];

const Loader: React.FC<{ darkMode: boolean; isVisible: boolean }> = ({
  darkMode,
  isVisible,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 540);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      
      <div
        key={index}
        className={`text-6xl font-bold animate-greeting ${directions[index]} ${darkModeColors[index]}`}
      >
        {greetings[index]}
      </div>

      <style>{`
        .animate-greeting {
          opacity: 0;
          animation: enter 0.5s ease-out forwards;
        }

        .from-top { transform: translateY(-40px); }
        .from-bottom { transform: translateY(40px); }
        .from-left { transform: translateX(-40px); }
        .from-right { transform: translateX(40px); }

        @keyframes enter {
          to {
            transform: translate(0, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
