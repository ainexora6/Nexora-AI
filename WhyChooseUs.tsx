import React from 'react';
import { 
  Cpu, Clock, Sparkles, Smartphone, Layout, TrendingUp, 
  Gauge, Lock, Activity, DollarSign, Globe, MessageSquare, CheckCircle2 
} from 'lucide-react';
import { WHY_CHOOSE_US, AGENCY_INFO } from '../data';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-blue-400 group-hover:text-[#00F2FE] transition-colors" };
    switch(iconName) {
      case 'Cpu': return <Cpu {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Gauge': return <Gauge {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'DollarSign': return <DollarSign {...props} />;
      case 'Globe': return <Globe {...props} />;
      default: return <MessageSquare {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-28 relative z-10 border-t border-white/5 bg-[#040810]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Why Nexora AI
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered To Outperform <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Traditional Web Agencies
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We deliver top-tier international quality by merging high-speed AI design tooling with Vercel and Apple-inspired engineering discipline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div 
              key={item.title}
              className={`bg-white/[0.04] border border-white/10 p-6 rounded-3xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-500/40 hover:-translate-y-1.5 shadow-lg group relative overflow-hidden flex flex-col justify-between ${
                idx === 0 || idx === 2 ? 'sm:col-span-2 bg-gradient-to-br from-[#08111F] to-[#0d1b33]' : ''
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/15 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getFeatureIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500">
                    ✔ ADVANTAGE
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
