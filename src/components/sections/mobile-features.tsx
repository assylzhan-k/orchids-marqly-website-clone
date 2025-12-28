import React from 'react';
import Image from 'next/image';

const MobileFeatures = () => {
  return (
    <section 
      id="features2"
      className="relative w-full overflow-hidden bg-white py-[80px] md:py-[120px]"
    >
      <div className="container px-4 md:px-6">
        {/* Background Container for the Section */}
        <div 
          className="relative flex flex-col items-center justify-between rounded-[40px] bg-brand-light-blue px-6 pt-16 pb-16 md:px-12 md:pt-24 md:pb-24 overflow-hidden"
          style={{ 
            backgroundColor: '#e9f5ff',
            minHeight: '600px'
          }}
        >
          {/* Floating Decorative Elements */}
          <div className="absolute top-[15%] left-[10%] hidden md:block">
             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-2xl">🔖</span>
             </div>
          </div>
          <div className="absolute bottom-[20%] left-[20%] hidden md:block">
             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                <span className="text-xl">📁</span>
             </div>
          </div>
          
          <div className="z-10 w-full max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-block rounded-full border border-blue-100 bg-white/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-blue">
                Anywhere, Anytime.
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-[#333333] md:text-5xl">
              Mobile Experience
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mb-10 max-w-2xl font-body text-lg leading-relaxed text-[#666666]">
              Access Marqly seamlessly on the go. Enjoy a great experience on mobile devices, ensuring your bookmarks are always at your fingertips.
            </p>

            {/* Main CTA */}
            <div className="relative z-20 mb-16 md:mb-24">
              <a
                href="https://app.marqly.com"
                className="inline-flex items-center justify-center rounded-[12px] bg-brand-blue px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-[#2084da] hover:shadow-lg active:scale-95"
              >
                Try Marqly Now -&gt;
              </a>
            </div>
          </div>

          {/* iPhone Mockup Container */}
          <div className="relative mx-auto w-full max-w-[320px] md:max-w-[400px]">
            {/* iPhone Frame Mockup (Simplified structure matching styling) */}
            <div className="relative z-10 mx-auto transform transition-transform duration-700 hover:-translate-y-4">
              <div className="relative overflow-hidden rounded-[3rem] border-[8px] border-[#333333] bg-[#333333] shadow-2xl">
                {/* iPhone Screen Content */}
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/QupTxcgtZ3DtoXAOcqQxS11ic-7.png"
                  alt="Marqly Mobile App Interface"
                  width={400}
                  height={800}
                  className="h-auto w-full"
                  priority
                />
                {/* Notch */}
                <div className="absolute top-0 left-1/2 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-[#333333]"></div>
              </div>
            </div>

            {/* Background Glow/Shadow for iPhone */}
            <div className="absolute -bottom-10 left-1/2 h-1/2 w-full -translate-x-1/2 scale-x-110 rounded-full bg-white/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;