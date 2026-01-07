import React from 'react';

/**
 * @param {{ type: 'banner' | 'sidebar' | 'inline' }} props
 */
const AdPlacement = ({ type }) => {
  const styles = {
    banner: "w-full h-32 bg-gray-100 flex items-center justify-center border-y border-gray-200 my-8",
    sidebar: "w-full h-64 bg-gray-50 flex items-center justify-center border border-gray-100 mb-6",
    inline: "w-full h-24 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 my-4"
  };

  return (
    <div className={styles[type]}>
      <div className="text-center">
        <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Advertisement</p>
        <div className="text-xs font-bold text-gray-300 uppercase tracking-widest italic">
          Premium Space
        </div>
      </div>
    </div>
  );
};

export default AdPlacement;
