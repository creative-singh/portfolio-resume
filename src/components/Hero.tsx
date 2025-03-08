import { Linkedin, Github, Code2, Phone, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-20 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">Bhavleen Singh</h1>
          <h2 className="text-2xl font-semibold mb-6 hover:scale-105 transition-transform duration-300">Sr. Full Stack Engineer</h2>
          
          <p className="text-lg mb-8 hover:translate-x-2 transition-transform duration-300">
            As a Full Stack Developer, I have experience developing websites and web applications, 
            having a vast skill set that includes key components of the web development industry.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/creative-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 transform hover:translate-y-[-2px]"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/creative-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-500 transition-colors duration-300 transform hover:translate-y-[-2px]"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://leetcode.com/bhavleen_singh_fsd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 transform hover:translate-y-[-2px]"
            >
              <Code2 size={20} />
              <span>LeetCode</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Phone size={20} />
              <span>+91-9811596790</span>
            </div>
            
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <Mail size={20} />
              <span>singhbhavleen3@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
              <MapPin size={20} />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;