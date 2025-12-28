import React from 'react';
import Image from 'next/image';

const FeaturesGrid = () => {
  return (
    <section id="features1" className="bg-white py-[120px] px-6 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[60px] text-center">
          <div className="w-[56px] h-[56px] bg-[#E9F5FF] rounded-2xl flex items-center justify-center mb-6 border border-[#E5E7EB]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" fill="#2996F5" stroke="#2996F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-display text-[48px] font-bold text-[#333333] leading-[1.1] mb-4">
            The all-in-one<br />bookmark manager
          </h2>
          <p className="font-body text-[18px] text-[#666666] max-w-[600px]">
            Save and Organize Your Web Finds Seamlessly
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Card 1: Organize Like a Pro (Large Left) */}
          <div className="md:col-span-12 lg:col-span-8 bg-[#F9FAFB] rounded-[32px] border border-[#E5E7EB] overflow-hidden flex flex-col min-h-[500px]">
            <div className="p-10 pb-0">
              <h3 className="font-display text-[24px] font-bold text-[#333333] mb-2">Organize Like a Pro</h3>
              <p className="font-body text-[16px] text-[#666666] mb-8">Effortless organization, unmatched simplicity.</p>
            </div>
            <div className="relative mt-auto px-10 overflow-hidden h-[400px]">
              <div className="absolute top-0 left-10 right-10 rounded-t-[20px] border-t border-x border-[#E5E7EB] bg-white shadow-2xl overflow-hidden min-h-[100%]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/X6Aa5sOkKY6vUFuanAadvnhD5z4-2.png"
                  alt="Dashboard Preview"
                  width={2420}
                  height={2668}
                  className="w-full h-auto object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Card 2: Customizable Views (Medium Top Right) */}
          <div className="md:col-span-12 lg:col-span-4 bg-[#E9F5FF] rounded-[32px] border border-[#E5E7EB] overflow-hidden flex flex-col min-h-[500px]">
            <div className="p-10">
              <h3 className="font-display text-[24px] font-bold text-[#333333] mb-2">Customizable Views</h3>
              <p className="font-body text-[16px] text-[#666666]">View your bookmarks your way</p>
            </div>
            <div className="relative flex-grow flex items-center justify-center p-10 mt-[-20px]">
              <div className="relative w-full aspect-square flex items-center justify-center group">
                <div className="absolute transform -rotate-[12deg] -translate-x-12 translate-y-4 shadow-lg rounded-xl overflow-hidden border border-[#E5E7EB] w-[70%]">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/tJPQbhR5NpiuNudEI8KRKL05Lc-6.png" width={400} height={400} alt="View Option" />
                </div>
                <div className="absolute transform -rotate-[4deg] -translate-x-4 -translate-y-4 shadow-xl rounded-xl overflow-hidden border border-[#E5E7EB] w-[70%] z-10">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/xgEeUNcyWsNF0ZcWGZET9AERRCQ-3.png" width={400} height={400} alt="View Option" />
                </div>
                <div className="absolute transform rotate-[8deg] translate-x-8 translate-y-2 shadow-2xl rounded-xl overflow-hidden border border-[#E5E7EB] w-[70%] z-20">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/iSA1SceunIgOPc9Vlzd59CikCdo-4.png" width={400} height={400} alt="View Option" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Personalize to Your Liking (Small Bottom Middle) */}
          <div className="md:col-span-12 lg:col-span-6 bg-[#EBFAF2] rounded-[32px] border border-[#E5E7EB] overflow-hidden flex flex-col justify-between p-10 min-h-[400px]">
            <div className="flex justify-center gap-4 mb-8">
              {/* Floating Folder Icons Mockup */}
              <div className="flex -space-x-4">
                <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-sm border border-emerald-200 transform -rotate-12 translate-y-4">
                  <span className="text-4xl">📁</span>
                </div>
                <div className="w-20 h-20 bg-emerald-200 rounded-2xl flex items-center justify-center shadow-md border border-emerald-300 transform rotate-6 z-10">
                  <span className="text-4xl text-[#10b981]">📁</span>
                </div>
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg border border-blue-200 transform -rotate-6 z-20 translate-y-2">
                  <span className="text-4xl">📁</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-[24px] font-bold text-[#333333] mb-2">Personalize to Your Liking</h3>
              <p className="font-body text-[16px] text-[#666666]">Tailored experience: custom boards, icons, a seamless browsing experience</p>
            </div>
          </div>

          {/* Card 4: Highlights (Small Bottom Right - Notebook Style) */}
          <div className="md:col-span-12 lg:col-span-6 bg-[#F3F0FF] rounded-[32px] border border-[#E5E7EB] overflow-hidden flex flex-col p-10 min-h-[400px]">
            <div className="mb-6">
              <h3 className="font-display text-[24px] font-bold text-[#333333] mb-2">Highlights</h3>
              <p className="font-body text-[16px] text-[#666666]">Highlight and save texts on the web, easily.</p>
            </div>
            <div className="relative bg-white rounded-lg p-8 shadow-sm border border-[#E5E7EB] rotate-1 mt-auto">
              {/* Notebook Lines Simulation */}
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ 
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #2996F5 28px)',
                backgroundPosition: '0 8px'
              }} />
              <div className="relative">
                <p className="font-body italic text-[#333333] text-[20px] leading-[28px]">
                  &ldquo;Everyone thinks of <span className="bg-[#FFD1FA] px-1">changing the world</span>, but no one thinks of changing himself.&rdquo;
                </p>
                <p className="font-body font-medium text-[#666666] mt-4 text-right">— Tolstoy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;