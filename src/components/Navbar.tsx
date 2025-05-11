import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 shadow-md backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#" 
            className="text-2xl font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            SB
          </a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="ShresthaResume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200"
            >
              <FileText className="w-4 h-4 mr-1" />
              Resume
            </a>
          </nav>

          <button
            className="md:hidden text-slate-800 dark:text-slate-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-slate-900 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/Shrestha_Behera_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200"
          >
            <FileText className="w-4 h-4 mr-1" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;