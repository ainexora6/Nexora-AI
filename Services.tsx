import React from 'react';
import { 
  Bot, Briefcase, Rocket, ShoppingBag, Stethoscope, Building2, 
  UtensilsCrossed, UserCheck, RefreshCw, Smartphone, Search, Zap, 
  ShieldCheck, ArrowRight, Sparkles, Check 
} from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data';

export const Services: React.FC = () => {
  // Helper to map icon names to actual Lucide components
  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#00F2FE] group-hover:scale-110 transition-transform duration-300" };
    switch(iconName) {
      case 'Bot': return <Bot {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Search': return <Search {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              What We Build
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Comprehensive AI Web <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Development Capabilities
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md md:text-right leading-relaxed">
            From high-converting landing funnels to AI agent web applications. Every solution is engineered for sub-second speeds and maximum customer conversion.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white/[0.04] border border-white/10 hover:border-[#2853C3]/50 p-7 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07] shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top right glow on hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#2853C3]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Card Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#08111F] via-[#152442] to-[#2853C3]/40 border border-white/10 flex items-center justify-center shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2853C3]/20 text-[#00F2FE] border border-[#2853C3]/40 shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F2FE] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Trigger CTA */}
              <a 
                href={`${AGENCY_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white/[0.04] hover:bg-[#2853C3] border border-white/10 hover:border-[#2853C3] rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all duration-300 flex items-center justify-between group/btn"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#08111F] via-[#122244] to-[#08111F] border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Need a custom AI web solution?</h4>
            <p className="text-sm text-slate-400">We build tailored platforms with backend APIs, authentication, and smart workflows.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a 
              href={AGENCY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-xs font-bold text-white shadow-lg hover:scale-105 transition-transform"
            >
              Chat on Instagram DM
            </a>
            <a 
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold text-white shadow-lg hover:scale-105 transition-transform"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
