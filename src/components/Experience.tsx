import React from "react";
import { experienceData } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="pt-8 pb-16 px-4 md:px-8 lg:px-16 bg-gray-50/50 dark:bg-gray-800/50 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300 flex items-center justify-center gap-2">
        <Briefcase className="w-8 h-8 text-orange-600" />
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {item.company} | {item.period}
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {item.responsibilities.map((responsibility, i) => (
                <li key={i} className="mt-1">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
