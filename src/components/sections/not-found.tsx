import React from 'react';

/**
 * NotFound component for the "Page Not Found" screen.
 * Replicates the minimalist Framer-style 404 page layout.
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-5">
      <main className="flex flex-col items-center justify-center max-w-[240px] w-full text-center">
        {/* Logo Section */}
        <div className="mb-5">
          <svg 
            width="14" 
            height="21" 
            viewBox="0 0 14 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#333333]"
          >
            <path 
              d="M0 0H14V7H7L0 14V0Z" 
              fill="currentColor"
            />
            <path 
              d="M0 14L7 7H14V21L0 14Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Heading Section */}
        <h1 className="text-[12px] font-semibold text-[#333333] mb-[10px] leading-tight font-sans">
          Page Not Found
        </h1>

        {/* Description Section */}
        <div className="text-[12px] leading-[1.5] text-[#888888] mb-5 font-sans">
          The page you are looking for does not exist or may have been moved.
        </div>

        {/* Action Button Section */}
        <a 
          href="/" 
          role="button" 
          className="inline-flex items-center justify-center bg-[#0099ff] text-white text-[12px] font-medium h-[30px] px-3 rounded-lg transition-colors hover:bg-[#0088ee] font-sans"
        >
          Back to Home
        </a>
      </main>

      {/* Hidden system component tracker as seen in DOM */}
      <div id="component-2m27a9x7wft" className="hidden"></div>
    </div>
  );
};

export default NotFound;