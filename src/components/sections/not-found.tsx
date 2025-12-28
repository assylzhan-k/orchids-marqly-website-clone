import React from 'react';

const NotFoundSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-5 overflow-hidden">
      <main className="flex flex-col items-center justify-center text-center max-w-[400px] w-full gap-4">
        {/* Logo Section */}
        <div className="logo-wrapper flex items-center justify-center mb-2">
          <svg 
            width="14" 
            height="21" 
            viewBox="0 0 14 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#333333]"
            aria-hidden="true"
          >
            <path 
              d="M0 0H14V7H7L7 14H14V21H0V14H7L7 7H0V0Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Heading Section */}
        <h1 className="text-[18px] font-semibold text-[#333333] leading-[1.4] m-0">
          Page Not Found
        </h1>

        {/* Description Section */}
        <div className="max-w-[320px] text-[14px] font-normal text-[#888888] leading-[1.6]">
          The page you are looking for does not exist or may have been moved.
        </div>

        {/* Action Button */}
        <a 
          href="/" 
          role="button" 
          className="inline-flex items-center justify-center min-w-[124px] h-[44px] px-6 py-3 mt-2 bg-[#0099ff] text-white text-[14px] font-medium leading-none rounded-lg transition-colors duration-200 hover:bg-[#0088ee] no-underline"
        >
          Back to Home
        </a>
      </main>
    </div>
  );
};

export default NotFoundSection;