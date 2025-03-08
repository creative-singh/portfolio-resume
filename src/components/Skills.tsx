import { useTheme } from '../hooks/useTheme';

import { skillCategories } from "../utils/skillData";
import { additionalExperience } from '../utils/experienceData';

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 hover:scale-105 transition-transform duration-300">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                  isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-110 ${
                        isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
              isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-lg hover:shadow-2xl'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Additional Experience</h3>
            <ul className="list-disc list-inside space-y-2">
              {additionalExperience.map((exp, index) => (
                <li 
                  key={index} 
                  className={`${isDark ? 'text-gray-300' : 'text-gray-700'} hover:translate-x-2 transition-transform duration-300`}
                >
                  <span className="font-semibold">{exp.title}</span>{exp.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;