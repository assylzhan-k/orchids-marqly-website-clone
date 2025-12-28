import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full h-[88px] flex items-center justify-center bg-white px-6 md:px-10 sticky top-0 z-50">
      <div className="w-full max-w-[1360px] flex items-center justify-between">
        {/* Left: Navigation Menu */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
          <div className="flex items-center bg-[#F3F4FB] rounded-full p-1.5 px-2">
            <a 
              href="/" 
              className="text-[14px] font-semibold text-[#000000] px-4 py-1.5 bg-white rounded-full shadow-sm"
            >
              Home
            </a>
            <div className="flex items-center">
              <a 
                href="/pricing" 
                className="text-[14px] font-medium text-[#666666] px-4 py-1.5 hover:text-[#000000] transition-colors"
              >
                Pricing
              </a>
              <a 
                href="/extension" 
                className="text-[14px] font-medium text-[#666666] px-4 py-1.5 hover:text-[#000000] transition-colors"
              >
                Extension
              </a>
              <a 
                href="/help" 
                className="text-[14px] font-medium text-[#666666] px-4 py-1.5 hover:text-[#000000] transition-colors"
              >
                Help
              </a>
              <a 
                href="/blog" 
                className="text-[14px] font-medium text-[#666666] px-4 py-1.5 hover:text-[#000000] transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="block">
            <Image 
              src="https://framerusercontent.com/images/hkZ7o9s2iJ5UbKZGZTPxMKTSQ.svg" 
              alt="Marqly Logo" 
              width={69} 
              height={32} 
              priority
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="https://chrome.google.com/webstore/detail/marqly" 
            className="hidden md:flex items-center justify-center border border-[#E5E7EB] rounded-full px-6 py-2.5 text-[14px] font-semibold text-[#000000] hover:bg-gray-50 transition-all"
          >
            Install Extension
          </a>
          <a 
            href="https://app.marqly.com" 
            className="flex items-center justify-center bg-[#30A2FF] text-white rounded-full px-6 py-2.5 text-[14px] font-semibold hover:bg-[#2581cc] transition-all shadow-[0_4px_14px_0_rgba(48,162,255,0.39)]"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;