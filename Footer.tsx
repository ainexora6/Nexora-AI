import React from 'react';
import { AGENCY_INFO } from '../data';
import { Instagram, MessageCircle, Mail, Phone, Heart, Globe, ArrowUp } from 'lucide-react';
import { NexoraLogoIcon } from './NexoraLogoIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040810] border-t border-white/10 relative z-10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <NexoraLogoIcon className="w-10 h-10" />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                NEXORA <span className="bg-gradient-to-r from-[#2853C3] to-[#00F2FE] bg-clip-text text-transparent">AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {AGENCY_INFO.subheading}
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={AGENCY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a 
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a 
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-[#2853C3] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a 
                href={`tel:${AGENCY_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-mono text-[#00F2FE]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-normal">
              <li><a href="#about" className="hover:text-white transition-colors">About Agency</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Development Process</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Portfolio</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-mono text-[#00F2FE]">
              Specialties
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-normal">
              <li><a href="#services" className="hover:text-white transition-colors">AI Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate Sites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Landing Pages</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Medical Portals</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Redesign</a></li>
            </ul>
          </div>

          {/* Direct Contact Desk */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-mono text-[#00F2FE]">
              Worldwide Desk
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400 font-normal">
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">Instagram (Preferred)</span>
                  <a href={AGENCY_INFO.instagram} target="_blank" rel="noreferrer" className="hover:underline font-mono text-xs">@nex0ra_ai</a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">WhatsApp Desk</span>
                  <span className="font-mono text-xs">{AGENCY_INFO.phone}</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">Inquiries</span>
                  <span className="font-mono text-xs truncate block">{AGENCY_INFO.email}</span>
                </div>
              </li>

              <li className="flex items-center gap-2 text-slate-400 text-xs pt-1">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Online Worldwide 24/7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} Nexora AI Studio. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Built with Next.js & Tailwind</span>
            <span>Worldwide Agency</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-medium"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
