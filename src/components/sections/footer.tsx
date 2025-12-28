import React from 'react';
import Image from 'next/image';
import { Twitter } from 'lucide-react';

/**
 * Footer component for Marqly
 * Targets the dark footer section with Marqly logo, social links, and navigation vertical lists.
 * Theme: Light (The footer itself is dark/black as per the design system)
 */
export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-[1244px]">
        {/* Main Black Footer Card */}
        <div className="bg-[#000000] rounded-[32px] p-12 md:p-16 flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Logo and Tagline Section */}
          <div className="flex flex-col gap-6 max-w-[280px]">
            <div className="flex items-center">
              <Image 
                src="https://framerusercontent.com/images/hkZ7o9s2iJ5UbKZGZTPxMKTSQ.svg" 
                alt="Marqly Logo" 
                width={80} 
                height={32}
                className="invert brightness-0" // Ensuring the logo appears white on black
              />
            </div>
            <p className="text-[#666666] text-[18px] leading-relaxed">
              Save and organize the web.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://twitter.com/marqly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#30A2FF] hover:opacity-80 transition-opacity"
              >
                <Twitter size={20} fill="currentColor" />
              </a>
              <a 
                href="https://facebook.com/marqly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#30A2FF] hover:opacity-80 transition-opacity"
              >
                {/* Meta / Facebook icon replacement */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections Container */}
          <div className="flex flex-wrap gap-16 md:gap-32">
            
            {/* Project Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-[16px]">Marqly</h4>
              <nav className="flex flex-col gap-3">
                <a href="#features" className="text-[#666666] hover:text-white transition-colors text-[14px]">Features</a>
                <a href="/pricing" className="text-[#666666] hover:text-white transition-colors text-[14px]">Pricing</a>
                <a href="/contact" className="text-[#666666] hover:text-white transition-colors text-[14px]">Contact us</a>
              </nav>
            </div>

            {/* Download Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-[16px]">Download</h4>
              <nav className="flex flex-col gap-3">
                <a 
                  href="https://chrome.google.com/webstore" 
                  target="_blank" 
                  className="text-[#666666] hover:text-white transition-colors text-[14px]"
                >
                  Chrome extension
                </a>
                <a 
                  href="https://addons.mozilla.org" 
                  target="_blank" 
                  className="text-[#666666] hover:text-white transition-colors text-[14px]"
                >
                  Firefox extension
                </a>
                <a 
                  href="https://microsoftedge.microsoft.com" 
                  target="_blank" 
                  className="text-[#666666] hover:text-white transition-colors text-[14px]"
                >
                  Edge extension
                </a>
                <a 
                  href="#" 
                  className="text-[#666666] hover:text-white transition-colors text-[14px]"
                >
                  Safari extension
                </a>
              </nav>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#666666] text-[13px] px-2 font-medium">
          <div>
            © 2024 Marqly.com All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-black transition-colors underline underline-offset-2">Terms of Use</a>
            <a href="/privacy" className="hover:text-black transition-colors underline underline-offset-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}