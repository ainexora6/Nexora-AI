import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Navy gradient base overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(40,83,195,0.18),rgba(255,255,255,0))]"></div>
      
      {/* Floating Glowing Blobs */}
      <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] bg-[#2853C3]/15 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute top-2/3 right-1/12 w-[600px] h-[600px] bg-[#00F2FE]/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9F55FF]/10 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid overlay texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      ></div>
    </div>
  );
};
