import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#EBEEF0] h-[72px] flex items-center">
      <div className="container mx-auto px-10 flex items-center justify-between h-full max-w-[1240px]">
        {/* Left Section: Menu Items */}
        <div className="flex items-center gap-1">
          <a
            href="/"
            className="px-[11px] py-[6px] text-[16px] font-medium text-[#657786] transition-colors hover:text-black rounded-[10px]"
          >
            Home
          </a>
          <a
            href="/Pricing"
            className="px-[11px] py-[6px] text-[16px] font-medium text-[#657786] transition-colors hover:text-black rounded-[10px]"
          >
            Pricing
          </a>
          <a
            href="/Extension"
            className="px-[11px] py-[6px] text-[16px] font-medium text-[#657786] transition-colors hover:text-black rounded-[10px]"
          >
            Extension
          </a>
          <a
            href="#"
            className="px-[11px] py-[6px] text-[16px] font-medium text-[#657786] transition-colors hover:text-black rounded-[10px]"
          >
            Help
          </a>
          <a
            href="/blog"
            className="px-[11px] py-[6px] text-[16px] font-medium text-black bg-[#F4F4F7] transition-colors rounded-[10px]"
          >
            Blog
          </a>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="/" className="flex items-center">
            <Image
              src="https://framerusercontent.com/images/hkZ7o9s2iJ5UbKZGZTPxMKTSQ.svg"
              alt="Marqly"
              width={69}
              height={32}
              priority
              className="object-contain"
            />
          </a>
        </div>

        {/* Right Section: CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://chrome.google.com/webstore/detail/marqly/kcadneobjofkppmekgadodnaojoehemc/"
            className="px-5 py-[10px] text-[15px] font-semibold text-black border border-[#EBEEF0] rounded-[8px] transition-colors hover:bg-[#F7F9FB]"
          >
            Install Extension
          </a>
          <a
            href="https://app.marqly.com"
            className="px-5 py-[10px] text-[15px] font-semibold text-white bg-[#1DA1F2] rounded-[8px] transition-opacity hover:opacity-90 shadow-sm"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;