import React from "react";
import { skillsData } from "../data/portfolioData";
import { Code, FileCode, Brain, Terminal, Award } from "lucide-react";

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "languages":
        return <Code className="w-5 h-5 text-orange-600" />;
      case "frameworks":
        return <FileCode className="w-5 h-5 text-orange-600" />;
      case "database":
        return <Brain className="w-5 h-5 text-orange-600" />;
      case "tools":
        return <Terminal className="w-5 h-5 text-orange-600" />;
      default:
        return <Code className="w-5 h-5 text-orange-600" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "languages":
        return "Programming Languages";
      case "frameworks":
        return "Frameworks";
      case "database":
        return "Database";
      case "tools":
        return "Tools";
      default:
        return category;
    }
  };

  const categories = ["languages", "frameworks", "database", "tools"];

  return (
    <div
      id="skills"
      className="py-16 px-4 md:px-8 lg:px-16 bg-white/30 dark:bg-gray-900/50 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white transition-colors duration-300 flex items-center justify-center gap-2">
        <Award className="w-8 h-8 text-orange-600" />
        Skills
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white transition-colors duration-300 flex items-center gap-2">
                {getIcon(category)}
                {getCategoryTitle(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 
                        rounded-full text-sm transition-colors duration-300 hover:bg-orange-200 dark:hover:bg-orange-900/40"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
