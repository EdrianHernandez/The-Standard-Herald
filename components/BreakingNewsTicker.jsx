import React from 'react';
import { BREAKING_HEADLINES } from '../constants';

const BreakingNewsTicker = () => {
  return (
    <div className="bg-black text-white py-2 overflow-hidden border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 bg-red-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest mr-4">
          Breaking
        </div>
        <div className="relative flex-grow overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-ticker hover:pause">
            {BREAKING_HEADLINES.map((headline, idx) => (
              <span key={idx} className="mx-8 text-xs font-medium tracking-wide">
                • {headline}
              </span>
            ))}
            {BREAKING_HEADLINES.map((headline, idx) => (
              <span key={`dup-${idx}`} className="mx-8 text-xs font-medium tracking-wide">
                • {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
