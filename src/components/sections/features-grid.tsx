import React from 'react';
import Image from 'next/image';

const FeaturesGrid = () => {
  return (
    <section className="py-[160px] bg-white overflow-hidden" id="features1">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[80px]">
          <div className="mb-6 w-12 h-12 flex items-center justify-center bg-secondary rounded-2xl shadow-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[56px] leading-[1.2] font-[700] tracking-[-0.02em] text-foreground mb-4">
            The all-in-one<br />bookmark manager
          </h2>
          <p className="text-[18px] leading-[1.6] text-muted-foreground font-[400] max-w-[600px]">
            Save and Organize Your Web Finds Seamlessly
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Large Card: Organize Like a Pro */}
          <div className="md:col-span-4 bg-[#F3F4FB] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5">
            <div className="mb-8 z-10">
              <h3 className="text-[24px] font-[600] leading-[1.3] mb-2">Organize Like a Pro</h3>
              <p className="text-[16px] text-muted-foreground leading-[1.5]">
                Effortless organization, unmatched simplicity.
              </p>
            </div>
            <div className="relative -mb-10 -mr-10 mt-4 rounded-tl-[16px] border-l border-t border-border overflow-hidden bg-white shadow-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/X6Aa5sOkKY6vUFuanAadvnhD5z4-2.png"
                alt="App Sidebar Interface"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column Layout */}
          <div className="md:col-span-8 flex flex-col gap-6">
            
            {/* Top Wide Card: Customizable Views */}
            <div className="bg-[#F0F7FF] rounded-[32px] p-10 flex flex-col gap-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5">
              <div className="max-w-[300px]">
                <h3 className="text-[24px] font-[600] leading-[1.3] mb-2">Customizable Views</h3>
                <p className="text-[16px] text-muted-foreground leading-[1.5]">
                  View your bookmarks your way
                </p>
              </div>
              <div className="relative h-[200px] flex items-end justify-center">
                <div className="relative flex items-center justify-center w-full">
                   {/* Stacked Cards Visual */}
                  <div className="absolute transform -translate-x-[110px] translate-y-4 rotate-[-6deg] shadow-lg rounded-xl overflow-hidden border border-border w-[180px] z-0">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/xgEeUNcyWsNF0ZcWGZET9AERRCQ-3.png" alt="View Card 1" width={180} height={180} />
                  </div>
                  <div className="absolute transform -translate-x-[40px] -translate-y-2 rotate-[-2deg] shadow-lg rounded-xl overflow-hidden border border-border w-[180px] z-10">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/iSA1SceunIgOPc9Vlzd59CikCdo-4.png" alt="View Card 2" width={180} height={180} />
                  </div>
                  <div className="absolute transform translate-x-[60px] -translate-y-1 rotate-[3deg] shadow-lg rounded-xl overflow-hidden border border-border w-[180px] z-20">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/mzi8yIIlC650xtT7yYfrrERMjJg-5.png" alt="View Card 3" width={180} height={180} />
                  </div>
                  <div className="absolute transform translate-x-[130px] translate-y-4 rotate-[8deg] shadow-lg rounded-xl overflow-hidden border border-border w-[180px] z-10">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/tJPQbhR5NpiuNudEI8KRKL05Lc-6.png" alt="View Card 4" width={180} height={180} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Two Equal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              
              {/* Personalize to Your Liking */}
              <div className="bg-[#F1FAF5] rounded-[32px] p-10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5">
                <div className="flex gap-3 mb-6">
                  {/* Floating Folder Icons */}
                  <div className="w-12 h-10 bg-[#A6E3C0] rounded-lg shadow-sm transform -rotate-6"></div>
                  <div className="w-12 h-10 bg-[#B0A6F2] rounded-lg shadow-sm transform rotate-3"></div>
                  <div className="w-12 h-10 bg-[#96D6FF] rounded-lg shadow-sm transform -rotate-2"></div>
                </div>
                <div>
                  <h3 className="text-[24px] font-[600] leading-[1.3] mb-2">Personalize to Your Liking</h3>
                  <p className="text-[16px] text-muted-foreground leading-[1.5]">
                    Tailored experience: custom boards, icons, a seamless browsing experience
                  </p>
                </div>
              </div>

              {/* Highlights Section (Notebook Page) */}
              <div className="bg-[#F3F4FB] rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5">
                <div className="z-10">
                  <h3 className="text-[24px] font-[600] leading-[1.3] mb-2">Highlights</h3>
                  <p className="text-[16px] text-muted-foreground leading-[1.5]">
                    Highlight and save texts on the web, easily.
                  </p>
                </div>
                
                {/* Visual Notebook Elements */}
                <div className="mt-6 bg-white rounded-xl shadow-lg border border-border p-5 relative min-h-[160px] font-serif italic text-foreground">
                  {/* Subtle Notebook Lines */}
                  <div className="absolute inset-x-0 top-0 h-full pointer-events-none bg-[repeating-linear-gradient(transparent,transparent_23px,#E5E7EB_24px)] opacity-30"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center h-full text-center">
                    <p className="text-[18px] mb-2 leading-[1.4] px-4">
                      <span className="bg-[#FFCCF5] px-1">Everyone thinks of changing the world</span>, but no one thinks of changing himself.
                    </p>
                    <p className="text-[14px] text-muted-foreground font-sans not-italic font-medium">
                      — Tolstoy
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;