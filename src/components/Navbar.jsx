import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrolled, 
  activeSection, 
  scrollToSection, 
  personalData 
}) {
  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">{personalData.name.split(' ')[0]}</span>
            <span className="text-cyan-400">{personalData.name.split(' ')[1] || ''}</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-cyan-400 transition-colors relative ${
                  activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t border-slate-800 pt-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block capitalize hover:text-cyan-400 transition-colors w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}