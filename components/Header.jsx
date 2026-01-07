import React from 'react';

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white pt-4 pb-0 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-100 pb-2">
          <span>{today}</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-black transition-colors">Digital Edition</a>
            <a href="#" className="hover:text-black transition-colors">Subscribe</a>
            <a href="#" className="hover:text-black transition-colors">Login</a>
          </div>
          <span className="hidden sm:inline">London / New York / Tokyo</span>
        </div>
        
        <div className="text-center py-2 md:py-4">
          <h1 className="font-serif text-5xl md:text-8xl font-black tracking-tighter text-gray-900 select-none leading-none">
            THE STANDARD HERALD
          </h1>
          <p className="mt-1 md:mt-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 italic">
            Truth in Reporting • Global in Perspective • Independent in Voice
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
