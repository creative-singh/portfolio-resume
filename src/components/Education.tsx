import { useTheme } from '../hooks/useTheme';

import { educationData } from '../utils/educationData';
import { certificationData } from '../utils/certificationData';

const Education = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 hover:scale-105 transition-transform duration-300">Education</h2>
          
          <div className="space-y-6 mb-12">
            {educationData.map((edu:any, index:number) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                  isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{edu.institution}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</p>
              </div>
            ))}
          </div>

          <div 
            className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
              isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-lg hover:shadow-2xl'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">CertificationData</h3>
            <ul className="space-y-4">
              {certificationData.map((cert, index) => (
                <li 
                  key={index} 
                  className={`${isDark ? 'text-gray-300' : 'text-gray-700'} hover:translate-x-2 transition-transform duration-300`}
                >
                  <div className="font-medium">{cert.name}</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Issuer: {cert.issuer}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;