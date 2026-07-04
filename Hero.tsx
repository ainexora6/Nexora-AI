import React from 'react';
import { Sparkles, ArrowRight, Instagram, MessageCircle, Mail, Phone, Bot, Zap, Globe, Shield, Star, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO, STATISTICS } from '../data';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden z-10">
      {/* Background Decorative Gradients specific to Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#2853C3]/20 via-purple-600/10 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Main CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00F2FE] font-bold text-xs uppercase tracking-[0.2em] mb-6 w-fit mx-auto lg:mx-0 animate-fade-in shadow-[0_0_15px_rgba(0,242,254,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Future of Web Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.02] font-extrabold text-white mb-6 tracking-tight">
              AI Websites <br className="hidden sm:inline" />
              That Help Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-[#00F2FE] to-[#9F55FF] bg-clip-text text-transparent">
                Business Grow
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-normal">
              {AGENCY_INFO.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2853C3] to-blue-600 rounded-2xl text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(40,83,195,0.5)] hover:shadow-[0_0_45px_rgba(40,83,195,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-2xl text-white font-semibold text-sm sm:text-base backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">AI-Embedded</p>
                  <p className="text-[11px] text-slate-400">Smart Agent Ready</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-[#00F2FE] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Sub-1s Speeds</p>
                  <p className="text-[11px] text-slate-400">Vercel Edge CDN</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Worldwide</p>
                  <p className="text-[11px] text-slate-400">Online Agency</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Bento Theme Showcase Card & Communication Center */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Top Row Bento Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-[#2853C3]" />
                </div>
                <h3 className="text-white font-bold text-base mb-1.5">AI-Powered</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Next-gen intelligent workflows for automated conversion.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-[#00F2FE]" />
                </div>
                <h3 className="text-white font-bold text-base mb-1.5">Fast Delivery</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Optimized development cycles for rapid 5-10 day launch.</p>
              </div>
            </div>

            {/* Preferred Communication Hub Bento Card */}
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/15 p-7 rounded-3xl backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preferred Contact</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-semibold border border-blue-500/30">Direct DM</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[11px] text-emerald-400 font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Engineers Online</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Highlighted Instagram (Preferred) */}
                <a 
                  href={AGENCY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600/30 via-pink-600/25 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/30 rounded-2xl border border-pink-500/40 shadow-[0_4px_25px_-5px_rgba(236,72,153,0.3)] hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-bold tracking-wide">Instagram DM</p>
                      <p className="text-xs text-pink-200 opacity-80">@nex0ra_ai</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold bg-white text-slate-950 px-2.5 py-1 rounded-lg tracking-wider shadow-sm">
                    MOST PREFERRED
                  </span>
                </a>
                
                {/* Secondary Row: WhatsApp & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={AGENCY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-white/5 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/40 rounded-2xl transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white truncate">WhatsApp</p>
                      <p className="text-[10px] text-slate-400 truncate">+92 322 5590294</p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-3 p-3.5 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 rounded-2xl transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white truncate">Email Agency</p>
                      <p className="text-[10px] text-slate-400 truncate">ainexora6@gmail.com</p>
                    </div>
                  </a>
                </div>

              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-slate-200 font-semibold">5.0 Star Rating</span>
                </span>
                <span>Worldwide Online Agency</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
