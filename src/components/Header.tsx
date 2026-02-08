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
    <header className="bg-white/80 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-gray-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="bg-emerald-100 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Car className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800 tracking-tight">爱尔兰驾考通</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
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
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-colors"
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
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-soft-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
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
