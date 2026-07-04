import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, Sparkles, MessageCircle, Instagram } from 'lucide-react';
import { AGENCY_INFO } from '../data';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 relative z-10 border-t border-white/5 bg-[#08111F]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2853C3] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about our AI web development timeline, pricing, and worldwide support workflow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.question}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen 
                    ? 'bg-white/[0.06] border-[#2853C3]/60 shadow-[0_10px_30px_-10px_rgba(40,83,195,0.25)]' 
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00F2FE] opacity-60">0{idx + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#2853C3] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 pt-2 sm:px-7 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-fade-in font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 bg-gradient-to-r from-[#0d182e] via-[#142647] to-[#0d182e] border border-blue-500/30 p-8 rounded-3xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-1">Still have a specific question?</h3>
            <p className="text-xs text-slate-400">Ask our AI agents or lead engineers directly on WhatsApp or Insta.</p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={AGENCY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-xs font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Insta Chat</span>
            </a>
            <a 
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 rounded-xl text-xs font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
