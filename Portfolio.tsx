import React from 'react';
import { PORTFOLIO_PROJECTS, AGENCY_INFO } from '../data';
import { ExternalLink, Sparkles, ArrowUpRight, Layers } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-28 relative z-10 border-t border-white/5 bg-[#08111F]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Our Showcase
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected AI Websites & <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Digital Masterpieces
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md md:text-right leading-relaxed">
            We replace bulky image galleries with clean, stylish UI abstractions and real performance benchmarks.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white/[0.04] border border-white/10 hover:border-[#2853C3]/60 rounded-3xl backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between group"
            >
              {/* Stylish Abstract Placeholder / UI Header */}
              <div className="p-6 pb-0">
                <div className="w-full h-48 rounded-2xl bg-[#040810] border border-white/10 relative overflow-hidden flex flex-col justify-between p-5 group-hover:border-blue-500/40 transition-colors">
                  
                  {/* Animated Gradient Orb inside Placeholder */}
                  <div className={`absolute -right-10 -bottom-10 w-48 h-48 bg-gradient-to-tr ${proj.gradient} rounded-full blur-3xl opacity-40 group-hover:opacity-80 group-hover:scale-125 transition-all duration-700`}></div>

                  {/* Browser Mockup Top Bar */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      nexora.ai/live/{proj.id.split('-')[0]}
                    </span>
                  </div>

                  {/* Mockup Middle UI Elements */}
                  <div className="relative z-10 my-auto flex flex-col gap-2">
                    <div className="w-3/4 h-3 rounded bg-white/10"></div>
                    <div className="w-1/2 h-2 rounded bg-white/5"></div>
                  </div>

                  {/* Performance Badge */}
                  {proj.metrics && (
                    <div className="relative z-10 inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-300 w-fit">
                      <Sparkles className="w-3 h-3" />
                      <span>{proj.metrics}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-7 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-[#00F2FE] uppercase tracking-wider">{proj.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00F2FE] transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white/5 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo & Contact Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    <a 
                      href={AGENCY_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-[#2853C3] hover:bg-blue-600 rounded-xl text-center text-xs font-semibold text-white shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Get Similar</span>
                    </a>
                    <a 
                      href={proj.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-center text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-white/10 p-10 rounded-3xl backdrop-blur-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">Want your business featured in our showcase?</h3>
          <p className="text-sm text-slate-400 mb-6">Let our AI agents and senior developers build your high-converting website this week.</p>
          <a 
            href={AGENCY_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2853C3] via-indigo-600 to-[#00F2FE] rounded-2xl text-white font-bold text-sm shadow-[0_0_30px_rgba(40,83,195,0.6)] hover:scale-105 transition-transform"
          >
            <span>Start Your Website Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
