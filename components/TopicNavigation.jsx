import React from 'react';

/** @type {string[]} */
const TOPICS = ['World', 'Politics', 'Tech', 'Science', 'Sports', 'Culture'];

const TopicNavigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-start md:justify-center space-x-6 md:space-x-12 py-2.5 overflow-x-auto no-scrollbar scroll-smooth">
          {TOPICS.map((topic) => (
            <li key={topic} className="flex-shrink-0">
              <a 
                href={`#${topic.toLowerCase()}`} 
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-red-700 transition-all whitespace-nowrap relative group"
              >
                {topic}
                <span className="absolute -bottom-2.5 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopicNavigation;
