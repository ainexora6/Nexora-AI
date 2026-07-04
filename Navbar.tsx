import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data';
import { NexoraLogoIcon } from './NexoraLogoIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#040810]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <NexoraLogoIcon className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
              NEXORA <span className="bg-gradient-to-r from-[#2853C3] to-[#00F2FE] bg-clip-text text-transparent">AI</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-slate-400 -mt-1 uppercase">Agency</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/[0.03] border border-white/[0.08] px-6 py-2.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a 
            href={AGENCY_INFO.instagram}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-xl text-xs font-semibold text-purple-200 transition-all hover:scale-105"
            title="Preferred Contact"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>DM Us</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          </a>

          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-2.5 bg-[#2853C3] hover:bg-blue-600 rounded-xl text-xs font-semibold text-white shadow-[0_0_20px_rgba(40,83,195,0.4)] hover:shadow-[0_0_30px_rgba(40,83,195,0.7)] hover:scale-105 transition-all duration-300"
          >
            <span>Start Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#08111F]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#00F2FE] transition-colors py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href={AGENCY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-center text-sm font-semibold text-white shadow-lg flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram DM (Preferred)</span>
              </a>
              <a 
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-emerald-600 rounded-xl text-center text-sm font-semibold text-white flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
