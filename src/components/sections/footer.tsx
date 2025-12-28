import React from 'react';
import Image from 'next/image';
import { Twitter } from 'lucide-react';

/**
 * Footer component for Marqly.
 * Features a dark pill-shaped container with logo, links, and social icons.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white px-6 pb-12 pt-16 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Dark Footer Pill */}
        <div className="mb-10 flex flex-col justify-between rounded-[40px] bg-black p-10 md:flex-row md:items-start md:p-16">
          {/* Brand Info */}
          <div className="mb-12 md:mb-0">
            <div className="mb-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/svgs/hkZ7o9s2iJ5UbKZGZTPxMKTSQ-1.svg"
                alt="Marqly Logo"
                width={80}
                height={36}
                className="brightness-0 invert"
              />
            </div>
            <p className="mb-6 max-w-[240px] font-body text-[18px] leading-relaxed text-[#999999]">
              Save and organize the web.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/marqly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2996F5] transition-opacity hover:opacity-80"
              >
                <Twitter size={20} fill="currentColor" />
              </a>
              <a
                href="#"
                className="text-[#2996F5] transition-opacity hover:opacity-80"
              >
                {/* Meta/Infinite Icon approximation */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l-2-2a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 0l2 2a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            {/* Marqly Group */}
            <div>
              <h4 className="mb-6 font-display text-[14px] font-bold text-white uppercase tracking-wider">
                Marqly
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#features" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/contact" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Download Group */}
            <div>
              <h4 className="mb-6 font-display text-[14px] font-bold text-white uppercase tracking-wider">
                Download
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Chrome extension
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Firefox extension
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Edge extension
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-[14px] text-[#999999] transition-colors hover:text-white">
                    Safari extension
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-transparent pt-6 md:flex-row">
          <p className="mb-4 font-body text-[14px] text-[#666666] md:mb-0">
            © {currentYear} Marqly.com All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-[14px]">
            <a href="/terms" className="text-[#666666] transition-colors hover:text-[#333333]">
              Terms of Use
            </a>
            <a href="/privacy" className="text-[#666666] transition-colors hover:text-[#333333]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;