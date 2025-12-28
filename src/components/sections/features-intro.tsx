import React from 'react';
import Image from 'next/image';

const FeaturesIntro = () => {
  return (
    <section 
      id="features1"
      className="flex flex-col items-center justify-center w-full px-6 py-[120px] md:py-[160px] bg-white text-center"
    >
      <div className="container mx-auto max-w-[1200px] flex flex-col items-center">
        {/* Bookmark Icon Container */}
        <div 
          className="flex items-center justify-center w-[72px] h-[72px] mb-8 bg-[#F0F7FF] rounded-[24px]"
          style={{
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 12px rgba(48, 162, 255, 0.08)'
          }}
        >
          {/* Using the bookmark icon asset from the provided list */}
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/svgs/ZrIeQyF9PKldcjj5pZPDamKvJDg-2.svg" 
              alt="Bookmark Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col items-center gap-4 max-w-[800px]">
          <h2 
            className="text-[40px] md:text-[56px] font-[800] leading-[1.1] tracking-[-0.02em] text-black text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The all-in-one<br /> bookmark manager
          </h2>
          
          <p 
            className="text-[18px] md:text-[20px] font-normal leading-[1.6] text-[#666666] mt-2 max-w-[600px]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Save and Organize Your Web Finds Seamlessly
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntro;