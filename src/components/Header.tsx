import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } shadow-lg`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="pacifico-regular text-xl font-bold hover:scale-105 transition-transform duration-300">Bhavleen Singh Manaktala</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 transform hover:rotate-90 ${
              isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;