import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center pt-[24px] pb-[80px] overflow-hidden bg-white"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Container for Rounded Light Blue Wash */}
      <div className="absolute inset-x-[30px] top-[24px] bottom-0 bg-[#E9F5FF] rounded-[40px] -z-10 overflow-hidden">
        {/* Grid Mesh Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: 'radial-gradient(#2996F5 0.5px, transparent 0.5px)', 
            backgroundSize: '40px 40px' 
          }}
        />
        
        {/* Decorative Ellipse Background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFFFFF] rounded-full blur-[120px] opacity-60"
        />
      </div>

      {/* Floating Elements Container */}
      <div className="absolute inset-0 pointer-events-none max-w-[1440px] mx-auto">
        {/* Emoji: Crazy Face Top Left */}
        <div className="absolute top-[180px] left-[15%] animate-bounce duration-[3000ms]">
          <div className="flex items-center justify-center w-[54px] h-[54px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-2xl border border-[#E5E7EB]">
            🤪
          </div>
        </div>

        {/* Emoji: Kiwi Mid Left */}
        <div className="absolute top-[320px] left-[20%] animate-pulse">
          <div className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-xl border border-[#E5E7EB]">
            🥝
          </div>
        </div>

        {/* Emoji: Heart Eyes Top Right */}
        <div className="absolute top-[150px] right-[18%] animate-bounce duration-[2500ms]">
          <div className="flex items-center justify-center w-[52px] h-[52px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-2xl border border-[#E5E7EB]">
            🤩
          </div>
        </div>

        {/* Emoji: Brain Mid Left (Dashboard level) */}
        <div className="absolute bottom-[28%] left-[10%] z-20">
          <div className="text-[64px] drop-shadow-xl transform -rotate-12">
            🧠
          </div>
        </div>

        {/* Floating Folders */}
        <div className="absolute top-[450px] left-[16%] -rotate-6">
           <div className="w-[44px] h-[44px] bg-white rounded-xl shadow-lg flex items-center justify-center border border-[#E5E7EB]">
              <div className="w-6 h-6 bg-[#A855F7] rounded-[4px] opacity-80" />
           </div>
        </div>

        <div className="absolute top-[420px] right-[22%] rotate-12">
           <div className="w-[48px] h-[48px] bg-white rounded-xl shadow-lg flex items-center justify-center border border-[#E5E7EB]">
              <div className="w-7 h-7 bg-[#2996F5] rounded-[4px] opacity-80" />
           </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 flex flex-col items-center text-center mt-[100px]">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 mb-8 bg-white border border-[#E5E7EB] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="text-[14px] font-semibold text-[#2996F5] tracking-tight">Introducing Marqly 3.0</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-[48px] md:text-[72px] font-[800] text-[#333333] leading-[1.05] tracking-[-0.04em] max-w-[900px]">
          Bookmark manager,<br />
          <span className="text-[#2996F5]">revolutionized.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-[18px] md:text-[20px] text-[#666666] leading-[1.6] max-w-[640px] font-body">
          Easy-to-use, Marqly lets you save, customize, and manage all your bookmarks and texts online like a breeze.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a 
            href="https://app.marqly.com/"
            className="group flex items-center gap-2 px-8 py-4 bg-[#2996F5] text-white rounded-full text-[18px] font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(41,150,245,0.3)]"
          >
            Get Started for Free
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          
          <div className="flex items-center gap-2 text-[#666666] text-[14px] font-medium opacity-80">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.5H15M15 6.5L9.5 1M15 6.5L9.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            No card required
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="container relative mt-[80px] z-10">
        <div className="relative mx-auto max-w-[1080px]">
          {/* Shadow behind image */}
          <div className="absolute inset-0 bg-[#2996F5] opacity-10 blur-[100px] -z-10 rounded-[32px]" />
          
          {/* Floating Blue Folder Decoration */}
          <div className="absolute -bottom-8 -right-8 w-[120px] h-[120px] z-20 pointer-events-none transform rotate-[15deg] hidden lg:block">
            <div className="relative w-full h-full bg-[#56C5FF] rounded-[24px] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-1/4 bg-[#2996F5] opacity-20" />
            </div>
          </div>

          {/* Main Screenshot Container */}
          <div className="bg-white rounded-[32px] p-2 shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[24px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/nFMSMCY857T3dPRqBJmS9Eu7iA-1.jpg"
                alt="Marqly Dashboard Preview"
                width={2160}
                height={1536}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;