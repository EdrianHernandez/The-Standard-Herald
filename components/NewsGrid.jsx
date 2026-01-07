import React, { useState } from 'react';
import { MOCK_NEWS } from '../constants';
import AdPlacement from './AdPlacement';
import { getArticleSummary } from '../services/geminiService';

const NewsGrid = () => {
  const [summaries, setSummaries] = useState({});
  const [loadingIds, setLoadingIds] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * @param {Object} article 
   */
  const handleAISummarize = async (article) => {
    if (summaries[article.id]) return;
    
    setLoadingIds(prev => new Set(prev).add(article.id));
    const summary = await getArticleSummary(article.title, article.summary + (article.content || ''));
    setSummaries(prev => ({ ...prev, [article.id]: summary }));
    setLoadingIds(prev => {
      const next = new Set(prev);
      next.delete(article.id);
      return next;
    });
  };

  const mainStory = MOCK_NEWS[0];
  const secondaryStories = MOCK_NEWS.slice(1, 3);
  const sideStories = MOCK_NEWS.slice(3);

  const mainImages = mainStory.images || [mainStory.imageUrl];

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % mainImages.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + mainImages.length) % mainImages.length);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
        <div className="lg:col-span-8">
          <article className="border-b border-gray-200 pb-10 mb-10">
            <div className="mb-6">
              <a href="#" className="topic-link">{mainStory.category}</a>
              <h1 className="headline-main mt-1 group cursor-pointer">
                <span className="hover:underline decoration-1 underline-offset-4">{mainStory.title}</span>
              </h1>
              <p className="text-xl text-gray-700 font-serif leading-relaxed mb-4 max-w-3xl">
                {mainStory.summary}
              </p>
              <div className="flex items-center space-x-3 mb-0">
                <span className="font-bold text-[11px] uppercase tracking-wider">{mainStory.author}</span>
                <span className="text-gray-300">|</span>
                <span className="meta-text">{mainStory.timestamp}</span>
                <span className="meta-text">• {mainStory.readTime}</span>
              </div>
            </div>
            
            <div className="relative group/carousel h-[300px] md:h-[450px] mb-8 overflow-hidden rounded-sm bg-gray-100">
              <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {mainImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${mainStory.title} - view ${idx + 1}`} 
                    className="w-full h-full object-cover flex-shrink-0 grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                  />
                ))}
              </div>

              {mainImages.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10 transform -translate-x-2 group-hover/carousel:translate-x-0">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10 transform translate-x-2 group-hover/carousel:translate-x-0">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {mainImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${currentImageIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border-t border-b md:border-l-4 md:border-t-0 md:border-b-0 border-red-700 p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  <h3 className="text-xs font-black uppercase tracking-tighter text-red-800">Briefing: AI Insights</h3>
                </div>
                {!summaries[mainStory.id] && (
                  <button 
                    onClick={() => handleAISummarize(mainStory)}
                    disabled={loadingIds.has(mainStory.id)}
                    className="text-[9px] bg-red-700 text-white px-3 py-1.5 font-bold uppercase tracking-widest hover:bg-red-800 transition-colors disabled:opacity-50 active:scale-95"
                  >
                    {loadingIds.has(mainStory.id) ? 'Processing...' : 'Generate Summary'}
                  </button>
                )}
              </div>
              <p className="text-[15px] italic text-gray-600 leading-relaxed font-serif">
                {summaries[mainStory.id] || "Gain a rapid perspective with our neural-summarization tool. Click above to extract the core thesis of this developing report."}
              </p>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {secondaryStories.map(story => (
              <article key={story.id} className="group">
                <div className="overflow-hidden mb-5 aspect-[16/10] bg-gray-100">
                  <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <a href="#" className="topic-link">{story.category}</a>
                <h2 className="headline-secondary mt-1 group-hover:text-red-800 transition-colors cursor-pointer">{story.title}</h2>
                <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3 mb-4 font-sans">{story.summary}</p>
                <div className="meta-text font-bold uppercase tracking-tighter">{story.author} <span className="mx-1 text-gray-300 font-normal">/</span> {story.timestamp}</div>
              </article>
            ))}
          </div>
          <div className="mt-4"><AdPlacement type="banner" /></div>
        </div>

        <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-10 lg:pt-0 lg:pl-10">
          <div className="sticky top-20">
            <div className="flex items-center justify-between border-b-2 border-black pb-1 mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest">Latest Highlights</h3>
              <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest animate-pulse">Live</span>
            </div>
            <div className="space-y-10">
              {sideStories.map(story => (
                <div key={story.id} className="group border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                  <a href="#" className="topic-link mb-1 inline-block">{story.category}</a>
                  <h4 className="headline-sidebar hover:text-red-700 transition-colors cursor-pointer leading-snug">{story.title}</h4>
                  <p className="text-[13px] text-gray-500 mt-3 line-clamp-2 leading-relaxed">{story.summary}</p>
                  <div className="mt-3 flex items-center text-[9px] text-gray-400 font-bold uppercase tracking-tighter">
                    <span className="text-gray-900">{story.author}</span>
                    <span className="mx-2 text-gray-200">•</span>
                    <span>{story.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10"><AdPlacement type="sidebar" /></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsGrid;
