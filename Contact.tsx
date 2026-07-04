import React, { useState } from 'react';
import { AGENCY_INFO } from '../data';
import { 
  Instagram, MessageCircle, Mail, PhoneCall, Send, Sparkles, 
  CheckCircle2, Globe, ShieldCheck, ArrowRight, Star 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open preferred channel (Instagram / WhatsApp / Mail) with prefilled summary
    const text = `Hi Nexora AI! My name is ${formData.name} from ${formData.business || 'my company'}. Phone: ${formData.phone}. Requirement: ${formData.message}`;
    const instaMsgUrl = `${AGENCY_INFO.instagram}`;
    window.open(instaMsgUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 relative z-10 border-t border-white/5 bg-[#040810]">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#2853C3]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Initiate Project
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Let’s Build Something <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Connect with our lead AI architects. Choose your preferred instant social channel or submit project details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels & Insta Highlight */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-[#0d1629] via-[#08111F] to-[#121f3a] border border-pink-500/40 p-8 rounded-3xl backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(236,72,153,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-pink-500 to-purple-600 text-[10px] font-extrabold text-white rounded-bl-xl uppercase tracking-widest shadow">
                ★ Preferred Method
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Instagram DM</h3>
                  <p className="text-xs text-pink-300 font-mono">@nex0ra_ai</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Skip long inquiry queues. Chat directly with our founder & lead frontend developers on Instagram. Most clients receive response wireframes within 30 minutes!
              </p>

              <a 
                href={AGENCY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-pink-500 rounded-2xl text-white font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-3 group"
              >
                <Instagram className="w-5 h-5" />
                <span>Message on Instagram Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Other Instant Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* WhatsApp */}
              <a 
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-emerald-600/15 border border-white/10 hover:border-emerald-500/40 p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">WhatsApp Chat</h4>
                    <p className="text-xs text-slate-400 font-mono">{AGENCY_INFO.phone}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  Instant
                </span>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${AGENCY_INFO.email}`}
                className="bg-white/5 hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/40 p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email Proposal</h4>
                    <p className="text-xs text-slate-400 truncate">{AGENCY_INFO.email}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                  24hr Reply
                </span>
              </a>

            </div>

            {/* Worldwide Availability Notice */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <Globe className="w-5 h-5 text-[#00F2FE] shrink-0" />
              <span>Worldwide Online Agency. Serving USA, UK, EU, UAE, & Asia 24/7.</span>
            </div>

          </div>

          {/* Right Column: Formal Contact Form */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl relative">
            
            <h3 className="text-2xl font-bold text-white mb-2">Send Project Specifications</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the form below. Once submitted, it will instantly redirect you to our lead engineer's Instagram or WhatsApp desk.
            </p>

            {submitted ? (
              <div className="py-16 text-center bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-[#00F2FE] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Specifications Received!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Thank you {formData.name || 'friend'}. We have prepared your initial brief. Please check the Instagram DM window that opened or click below.
                </p>
                <a 
                  href={AGENCY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold text-xs shadow-lg"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Open Instagram Discussion</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3.5 bg-[#040810]/80 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#2853C3] focus:ring-1 focus:ring-[#2853C3] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Corporate Email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 bg-[#040810]/80 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#2853C3] focus:ring-1 focus:ring-[#2853C3] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="business" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Business / Agency Name
                    </label>
                    <input 
                      type="text" 
                      id="business"
                      name="business" 
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="e.g. Rivera Technologies"
                      className="w-full px-4 py-3.5 bg-[#040810]/80 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#2853C3] focus:ring-1 focus:ring-[#2853C3] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 bg-[#040810]/80 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#2853C3] focus:ring-1 focus:ring-[#2853C3] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Project Scope & Vision *
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build (e.g. AI SaaS Landing Page, Clinic Website, E-commerce Portal)..."
                    className="w-full px-4 py-3.5 bg-[#040810]/80 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#2853C3] focus:ring-1 focus:ring-[#2853C3] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-[#2853C3] via-blue-600 to-[#00F2FE] hover:opacity-95 rounded-xl text-white font-extrabold text-base shadow-[0_0_25px_rgba(40,83,195,0.6)] hover:shadow-[0_0_40px_rgba(40,83,195,0.9)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit & Connect on Instagram DM</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 We respect privacy. No spam, ever. Worldwide prompt dispatch.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
