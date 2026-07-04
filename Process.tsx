import React from 'react';
import { PROCESS_STEPS } from '../data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-28 relative z-10 border-t border-white/5 bg-[#08111F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Our Workflow
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Rapid 6-Step <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Development Lifecycle
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We stripped away traditional agency bottlenecks. Here is our streamlined process to take your business from concept to global launch in under two weeks.
          </p>
        </div>

        {/* Horizontal Timeline Layout */}
        <div className="relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 -translate-y-12 opacity-30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={step.number}
                className="bg-white/[0.04] border border-white/10 hover:border-blue-500/50 p-6 rounded-3xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07] shadow-xl group relative overflow-hidden"
              >
                {/* Glowing step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#2853C3] to-[#00F2FE] flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_20px_rgba(40,83,195,0.6)] group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                    {step.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#00F2FE] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                  <span className="truncate">{step.keyDeliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Bottom Notice */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Ready to initiate Step 01? <a href="https://www.instagram.com/nex0ra_ai/" target="_blank" rel="noopener noreferrer" className="text-[#00F2FE] font-bold hover:underline">DM us on Instagram</a> or <a href="https://wa.me/923225590294" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">Message on WhatsApp</a>.
          </p>
        </div>

      </div>
    </section>
  );
};
