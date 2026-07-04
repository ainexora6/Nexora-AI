import React from 'react';

interface LogoProps {
  className?: string;
}

export const NexoraLogoIcon: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} rounded-xl bg-[#181B22] border border-white/10 flex items-center justify-center p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative group-hover:border-blue-500/50 transition-colors shrink-0 overflow-hidden`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
      >
        {/* 1. Col 3 Top: Sky blue tall vertical bar */}
        <rect x="45" y="4" width="11" height="25" rx="2.5" fill="#3B82F6" />

        {/* 2. Col 2 Top: Sky blue vertical bar */}
        <rect x="31" y="18" width="11" height="25" rx="2.5" fill="#3B82F6" />

        {/* 3. Col 4 Top: Royal blue square */}
        <rect x="59" y="18" width="11" height="11" rx="2.5" fill="#2563EB" />

        {/* 4. Col 1 Upper: Violet square */}
        <rect x="17" y="32" width="11" height="11" rx="2.5" fill="#9333EA" />

        {/* 5. Col 3-5 Upper: Orange horizontal bar */}
        <rect x="45" y="32" width="39" height="11" rx="2.5" fill="#F97316" />

        {/* 6. Col 0 Mid: Violet square */}
        <rect x="3" y="46" width="11" height="11" rx="2.5" fill="#9333EA" />

        {/* 7. Col 1 Mid-Lower: Royal blue vertical bar */}
        <rect x="17" y="46" width="11" height="25" rx="2.5" fill="#2563EB" />

        {/* 8. Col 2-3 Mid: Violet horizontal bar */}
        <rect x="31" y="46" width="25" height="11" rx="2.5" fill="#9333EA" />

        {/* 9. Col 4 Mid: Green vertical bar */}
        <rect x="59" y="46" width="11" height="25" rx="2.5" fill="#10B981" />

        {/* 10. Col 5-6 Mid: Orange horizontal bar */}
        <rect x="73" y="46" width="25" height="11" rx="2.5" fill="#F97316" />

        {/* 11. Col 5 Lower: Green square */}
        <rect x="73" y="60" width="11" height="11" rx="2.5" fill="#10B981" />

        {/* 12. Col 2 Lower: Sky blue vertical bar */}
        <rect x="31" y="60" width="11" height="25" rx="2.5" fill="#3B82F6" />

        {/* 13. Col 3 Lower: Sky blue tall vertical bar */}
        <rect x="45" y="60" width="11" height="36" rx="2.5" fill="#3B82F6" />

        {/* 14. Col 4 Lower: Orange square */}
        <rect x="59" y="74" width="11" height="11" rx="2.5" fill="#F97316" />
      </svg>
    </div>
  );
};

