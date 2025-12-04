import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter">Maxim<span className="text-primary-500">.</span></a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#work" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down">
          <a href="#home" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-slate-300">Home</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-slate-300">Services</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-slate-300">About</a>
          <a href="#work" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-slate-300">Work</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="px-5 py-3 bg-primary-600 text-white rounded-lg text-center font-bold">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;