"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Extension', href: '/extension' },
    { name: 'Help', href: '/help' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB] h-[88px] flex items-center">
      <div className="container mx-auto px-10 flex items-center justify-between h-full max-w-[1240px]">
        <div className="flex items-center gap-1 bg-[#F3F4F6] rounded-full p-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-[14px] font-medium transition-colors rounded-full ${
                isActive(link.href)
                  ? 'bg-white text-black shadow-sm'
                  : 'text-[#666666] hover:text-black'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

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

        <div className="flex items-center gap-3">
          <a
            href="https://chrome.google.com/webstore/detail/marqly"
            className="px-5 py-[10px] text-[14px] font-semibold text-black border border-[#E5E7EB] rounded-full transition-colors hover:bg-[#F9FAFB]"
          >
            Install Extension
          </a>
          <a
            href="https://app.marqly.com"
            className="px-5 py-[10px] text-[14px] font-semibold text-white bg-[#30A2FF] rounded-full transition-opacity hover:opacity-90 shadow-[0_4px_14px_rgba(48,162,255,0.3)]"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;