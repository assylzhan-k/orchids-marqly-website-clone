import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center pt-[120px] pb-[80px] bg-[#F0F7FF] overflow-hidden"
      style={{ borderRadius: '0 0 80px 80px' }}
    >
      {/* Background Decorative Grid/Squares Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#C6E4FF 0.5px, transparent 0.5px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Floating Icons/Assets - Distributed around the hero content */}
        {/* These elements use absolute positioning mimicking the screenshot layout */}
        <div className="absolute left-[15%] top-[10%] drop-shadow-sm select-none animate-bounce" style={{ animationDuration: '4s' }}>
          <div className="bg-white p-3 rounded-2xl border border-white shadow-lg flex items-center justify-center w-[54px] h-[54px]">
            <span className="text-2xl">🤪</span>
          </div>
        </div>
        <div className="absolute right-[10%] top-[40%] drop-shadow-sm select-none animate-bounce" style={{ animationDuration: '3.5s' }}>
          <div className="bg-white p-3 rounded-2xl border border-white shadow-lg flex items-center justify-center w-[54px] h-[54px]">
            <span className="text-2xl">🤪</span>
          </div>
        </div>
        <div className="absolute left-[12%] top-[55%] drop-shadow-sm select-none animate-bounce" style={{ animationDuration: '4.5s' }}>
          <div className="bg-white p-3 rounded-2xl border border-white shadow-lg flex items-center justify-center w-[54px] h-[54px]">
            <span className="text-2xl">🥝</span>
          </div>
        </div>
        <div className="absolute right-[15%] top-[10%] drop-shadow-sm select-none animate-bounce" style={{ animationDuration: '5s' }}>
          <div className="bg-white p-3 rounded-2xl border border-white shadow-lg flex items-center justify-center w-[54px] h-[54px]">
            <span className="text-2xl">👨🏻‍🦱</span>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <span className="px-5 py-2 rounded-full border border-[#E5E7EB] bg-white text-[14px] font-semibold text-[#666666] tracking-tight backdrop-blur-sm">
            Introducing Marqly 3.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-[900px] mb-6 tracking-[-0.04em] text-black">
          Bookmark manager, <br />
          <span className="text-gradient">revolutionized.</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-[640px] mb-10 text-[20px] text-[#666666] font-normal leading-[1.6]">
          Easy-to-use, Marqly lets you save, customize, and manage all your bookmarks and texts online like a breeze.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <a
            href="https://app.marqly.com/"
            className="bg-[#30A2FF] text-white px-8 py-4 rounded-full font-bold text-[18px] flex items-center gap-2 hover:bg-[#2092EF] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200"
          >
            Get Started for Free <span className="text-xl">→</span>
          </a>
          
          <div className="flex items-center gap-2 text-[#666666] text-[14px] font-medium opacity-80">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            No card required
          </div>
        </div>

        {/* Mockup Dashboard */}
        <div className="relative mt-16 perspective-1000 w-full max-w-[1100px] mx-auto">
          {/* Main Screenshot */}
          <div 
            className="relative z-20 overflow-hidden border-[1px] border-white/50 shadow-2xl rounded-[32px] bg-white"
            style={{ 
              boxShadow: '0 40px 100px -20px rgba(0,0,0,0.15)',
              transform: 'rotateX(5deg)',
              transformOrigin: 'top center'
            }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/nFMSMCY857T3dPRqBJmS9Eu7iA-1.jpg"
              alt="Marqly Dashboard Mockup"
              width={2160}
              height={1536}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Floating Assets relative to the screen */}
          <div className="absolute -left-12 -bottom-10 z-30 select-none hidden md:block animate-bounce" style={{ animationDuration: '6s' }}>
            <div className="w-24 h-24 relative">
              <span className="text-[64px]">🧠</span>
            </div>
          </div>

          <div className="absolute right-[5%] -bottom-4 z-30 select-none hidden md:block">
            <div className="bg-[#30A2FF] w-[90px] h-[70px] rounded-xl shadow-xl flex items-center justify-center -rotate-12">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                 <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
               </svg>
            </div>
          </div>

          <div className="absolute -right-8 top-[20%] z-10 select-none hidden md:block">
             <div className="w-16 h-16 bg-[#70C1FF]/20 rounded-2xl backdrop-blur-md rotate-45 border border-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;