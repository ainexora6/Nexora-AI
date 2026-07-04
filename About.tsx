import React from 'react';
import { Sparkles, Cpu, Target, Award, CheckCircle2, TrendingUp, Globe2, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO, STATISTICS } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            About {AGENCY_INFO.name}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Where Human Ingenuity Meets <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            At Nexora AI, we combine creativity with artificial intelligence to build modern websites that help businesses stand out online. We deliver fast, responsive, SEO-friendly, and visually stunning websites designed to convert visitors into customers.
          </p>
        </div>

        {/* Feature Grid & Stats Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Philosophy Glass Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0d1627]/80 to-[#08111F]/90 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#2853C3]/20 border border-[#2853C3]/40 flex items-center justify-center text-[#00F2FE]">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Nexora Advantage</h3>
                <p className="text-xs text-slate-400">Silicon Valley Standards • Worldwide Reach</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Traditional web agencies take months to build bloated WordPress websites that load slowly and fail to convert. We completely revolutionized the development lifecycle by pairing proprietary AI prototyping with bespoke frontend engineering.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-blue-500/20 text-[#00F2FE] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Vercel & Linear-Inspired Aesthetic</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Glassmorphism UI, smooth typography hierarchies, and buttery micro-interactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-purple-500/20 text-purple-400 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Conversion & Revenue Focused</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Every button, heading, and layout container is mathematically aligned to turn clicks into WhatsApp & Insta inquiries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Global Asynchronous Delivery</h4>
                  <p className="text-xs text-slate-400 mt-0.5">We collaborate seamlessly across timezones with fast updates directly on your favorite social platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Statistics Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {STATISTICS.map((stat, idx) => (
              <div 
                key={stat.label}
                className="bg-white/[0.04] border border-white/10 hover:border-blue-500/40 p-6 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 block">
                    Metric 0{idx + 1}
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight my-2">
                    <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-[#2853C3]">{stat.suffix}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-200 mt-2">{stat.label}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
