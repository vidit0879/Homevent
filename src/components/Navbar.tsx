import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = ['about', 'eligibility', 'careers', 'benefits', 'contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span
            className={`text-2xl font-extrabold tracking-tight ${
              isScrolled ? 'text-indigo-600' : 'text-indigo-700'
            }`}
          >
            Prep Summit
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((id) => (
            <a
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer text-[15px] font-medium hover:text-indigo-500 transition ${
                isScrolled ? 'text-slate-800' : 'text-slate-700'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('registration-form')}
            className="ml-4 px-6 py-2 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 shadow rounded-full"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-indigo-700'}`}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {menuItems.map((id) => (
            <a
              key={id}
              onClick={() => scrollToSection(id)}
              className="block text-slate-800 hover:text-indigo-500 font-medium cursor-pointer"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('registration-form')}
            className="w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
          >
            Register Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
