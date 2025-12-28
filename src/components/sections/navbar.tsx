import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Extension', href: '/extension' },
    { name: 'Help', href: '/help' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-10 h-[80px] flex items-center justify-between">
        {/* Left: Navigation Links */}
        <div className="flex items-center gap-[12px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-[16px] py-[8px] rounded-[10px] text-[14px] font-medium transition-colors duration-200 ${
                link.active
                  ? 'bg-[#F2F2F2] text-[#333333]'
                  : 'text-[#666666] hover:text-[#333333]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="block">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/svgs/hkZ7o9s2iJ5UbKZGZTPxMKTSQ-1.svg"
              alt="Marqly Logo"
              width={69}
              height={32}
              priority
              className="object-contain"
            />
          </a>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-[12px]">
          <a
            href="https://chrome.google.com/webstore/detail/marqly/kcadneobjofkppmekgadodnaojoehemc/"
            className="px-[24px] py-[10px] rounded-[10px] border border-[#E5E7EB] text-[14px] font-semibold text-[#333333] hover:bg-[#F9FAFB] transition-all duration-200"
          >
            Install Extension
          </a>
          <a
            href="https://app.marqly.com"
            className="px-[24px] py-[10px] rounded-[10px] bg-[#2996F5] text-[14px] font-semibold text-white hover:bg-[#1a85e4] transition-all duration-200 shadow-[0_4px_14px_rgba(41,150,245,0.25)]"
          >
            Sign in
          </a>
        </div>
      </div>
      
      {/* Subtle border at bottom of nav */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E5E7EB]/50" />
    </nav>
  );
};

export default Navbar;