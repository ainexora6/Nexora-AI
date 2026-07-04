import React from 'react';
import { TECHNOLOGIES } from '../data';
import { 
  Atom, Layers, Palette, FileCode, Code2, Server, 
  Database, Cpu, Terminal, MonitorSmartphone, LineChart, Sparkles 
} from 'lucide-react';

export const Technologies: React.FC = () => {
  const getTechIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-[#00F2FE] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" };
    switch(iconName) {
      case 'Atom': return <Atom {...props} className="w-7 h-7 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />;
      case 'Layers': return <Layers {...props} className="w-7 h-7 text-white" />;
      case 'Palette': return <Palette {...props} className="w-7 h-7 text-teal-400" />;
      case 'FileCode': return <FileCode {...props} className="w-7 h-7 text-amber-400" />;
      case 'Code2': return <Code2 {...props} className="w-7 h-7 text-orange-500" />;
      case 'Server': return <Server {...props} className="w-7 h-7 text-emerald-400" />;
      case 'Database': return <Database {...props} className="w-7 h-7 text-amber-500" />;
      case 'Cpu': return <Cpu {...props} className="w-7 h-7 text-blue-400 animate-pulse" />;
      case 'Terminal': return <Terminal {...props} className="w-7 h-7 text-purple-400" />;
      case 'MonitorSmartphone': return <MonitorSmartphone {...props} className="w-7 h-7 text-indigo-400" />;
      case 'LineChart': return <LineChart {...props} className="w-7 h-7 text-green-400" />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="technologies" className="py-28 relative z-10 border-t border-white/5 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Core Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Modern Tech Stack & <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              AI Frameworks
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We build enterprise-grade software utilizing the exact modern tooling powering OpenAI, Stripe, and Vercel.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {TECHNOLOGIES.map((tech) => (
            <div 
              key={tech.name}
              className="bg-white/[0.03] border border-white/10 hover:border-[#00F2FE]/50 p-6 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07] shadow-lg group relative overflow-hidden aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2853C3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                {getTechIcon(tech.icon)}
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                {tech.name}
              </h3>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
