import { useTheme } from '../hooks/useTheme';

import { experienceData } from '../utils/experienceData';

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 hover:scale-105 transition-transform duration-300">Experience</h2>
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                  isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{exp.company}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li 
                      key={idx} 
                      className={`${isDark ? 'text-gray-300' : 'text-gray-700'} hover:translate-x-2 transition-transform duration-300`}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;