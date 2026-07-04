import React, { useState } from 'react';
import { TESTIMONIALS, AGENCY_INFO } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight, Instagram, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-28 relative z-10 border-t border-white/5 bg-[#040810]/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Client Feedback
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Trusted By Executive Leaders <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how founders and clinic directors accelerated their lead generation with Nexora AI's high-speed web delivery.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-8 sm:p-14 rounded-3xl backdrop-blur-2xl shadow-2xl relative">
          
          <Quote className="w-16 h-16 text-[#2853C3]/30 absolute top-8 right-8 pointer-events-none" />

          {/* Testimonial Content */}
          <div className="min-h-[220px] flex flex-col justify-between">
            
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-lg sm:text-2xl text-slate-100 font-normal leading-relaxed mb-8 italic">
              "{current.quote}"
            </p>

            {/* Author Row & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              
              <div className="flex items-center gap-4">
                <img 
                  src={current.avatarUrl} 
                  alt={current.name} 
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#2853C3] shadow-md"
                />
                <div>
                  <h3 className="text-white font-bold text-lg">{current.name}</h3>
                  <p className="text-xs text-[#00F2FE] font-medium">{current.role}</p>
                  <p className="text-[11px] text-slate-400">{current.company}</p>
                </div>
              </div>

              {/* Navigation Arrows & Dots */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#2853C3] border border-white/10 text-slate-300 hover:text-white transition-all shadow"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-1.5 px-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-6 bg-[#00F2FE]' : 'w-2 bg-white/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#2853C3] border border-white/10 text-slate-300 hover:text-white transition-all shadow"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Live Social Chat Prompt */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>Want to speak directly with our past clients?</span>
          <a 
            href={AGENCY_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-pink-400 font-bold hover:underline"
          >
            <Instagram className="w-4 h-4" />
            <span>Check Instagram Stories & Tags</span>
          </a>
        </div>

      </div>
    </section>
  );
};
