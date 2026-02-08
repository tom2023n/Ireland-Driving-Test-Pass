import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: '首页', path: '/' },
    { name: '考驾照流程', path: '/process' },
    { name: '考试路线', path: '/test-routes' },
    { name: '通关笔记', path: '/pass-notes' },
    { name: '路标学习', path: 'https://tom2023n.github.io/my-single-page/', external: true },
    { name: '交规问答', path: 'https://tom2023n.github.io/rules-of-the-road/', external: true },
    { name: '考试当天流程', path: '/test-day' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Car className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">爱尔兰驾考通</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
