import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/logo01.png';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/85 h-[80px]' : 'bg-black/50 h-[120px]'
        }`}
    >
      <div className="container max-w-[1596px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 ${isScrolled ? 'h-[60px]' : 'h-[60px] md:h-[100px]'}`}
          />
        </div>

        {/* Navigation Section */}
        <nav className="hidden xl:flex items-center space-x-8 text-white text-lg">
          {['O INWESTYCJI', 'APARTAMENTY', 'UDOGODNIENIA', 'LOKALIZACJA', 'GALERIA', 'O DEWELOPERZE', 'KONTAKT'].map((item, index) => (
            <HashLink smooth key={index} to={`#${item.split(" ").join("_").toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </HashLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full ${isScrolled ? 'bg-black/85 ' : 'bg-black/50 '
          } transition-all duration-300 xl:hidden ${isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col xl:items-center gap-6 py-6 text-white text-lg px-6 xl:px-0">
          {['O INWESTYCJI', 'APARTAMENTY', 'UDOGODNIENIA', 'LOKALIZACJA', 'GALERIA', 'O DEWELOPERZE', 'KONTAKT'].map((item, index) => (
            <li key={index}>
              <HashLink smooth key={index} to={`#${item.split(" ").join("_").toLowerCase()}`} className="hover:text-white transition-colors flex justify-between flex-row" onClick={() => setIsMenuOpen(false)}>
                {item} <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m9 5 7 7-7 7" />
                </svg>
                </span>
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
