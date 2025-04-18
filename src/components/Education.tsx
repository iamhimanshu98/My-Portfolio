import React from 'react';
import { educationData } from '../data/portfolioData';
import { BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div
      id="education"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50/50 dark:bg-gray-800/50 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300 flex items-center justify-center gap-2">
        <BookOpen className="w-8 h-8 text-orange-600" />
        Education
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {item.institution}
            </p>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              {item.grade} | {item.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
