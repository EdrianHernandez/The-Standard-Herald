
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-black pt-16 pb-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <h2 className="font-serif text-3xl font-black mb-6 tracking-tighter">THE STANDARD HERALD</h2>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed font-sans font-medium">
              A bastion of rigorous inquiry and relentless reporting. Providing our global readership with clarity in an age of complexity since 1924.
            </p>
          </div>
          <div>
            <h5 className="text-[11px] font-black uppercase mb-6 tracking-[0.2em] text-gray-900">News</h5>
            <ul className="text-xs space-y-3 text-gray-500 font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-red-700 transition-colors">World</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Politics</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Economy</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Opinion</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-black uppercase mb-6 tracking-[0.2em] text-gray-900">Business</h5>
            <ul className="text-xs space-y-3 text-gray-500 font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-red-700 transition-colors">Markets</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Tech</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Innovation</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-black uppercase mb-6 tracking-[0.2em] text-gray-900">Company</h5>
            <ul className="text-xs space-y-3 text-gray-500 font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-red-700 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Ethics</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-black uppercase mb-6 tracking-[0.2em] text-gray-900">Follow</h5>
            <ul className="text-xs space-y-3 text-gray-500 font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-red-700 transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Youtube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} The Standard Herald Media. Empowering the global citizen.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
