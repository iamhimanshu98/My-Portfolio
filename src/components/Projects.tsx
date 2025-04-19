import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div 
      id="projects" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50/50 dark:bg-gray-800/30 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 rounded-full text-sm transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 flex items-center gap-2 transition-colors duration-300"
            >
              View Project <Github className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
