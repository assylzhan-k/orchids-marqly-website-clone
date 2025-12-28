import React from 'react';
import Image from 'next/image';

const BrowserSupport = () => {
  return (
    <section className="container px-4 py-8 md:px-0">
      <div 
        className="relative overflow-hidden w-full min-h-[580px] rounded-[32px] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24"
        style={{ 
          backgroundColor: '#70C1FF',
          backgroundImage: 'linear-gradient(180deg, #70C1FF 0%, #30A2FF 100%)'
        }}
      >
        {/* Floating Clouds Decoration - Top Left */}
        <div 
          className="absolute hidden md:block"
          style={{ 
            top: '10%', 
            left: '5%', 
            width: '240px', 
            height: '140px',
            opacity: 0.9
          }}
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="Cloud decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Floating Clouds Decoration - Bottom Left */}
        <div 
          className="absolute hidden md:block"
          style={{ 
            bottom: '15%', 
            left: '3%', 
            width: '180px', 
            height: '100px',
            opacity: 0.8
          }}
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="Cloud decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Floating Clouds Decoration - Top Right */}
        <div 
          className="absolute hidden md:block"
          style={{ 
            top: '5%', 
            right: '8%', 
            width: '260px', 
            height: '160px',
            opacity: 0.9
          }}
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="Cloud decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Floating Clouds Decoration - Center Right */}
        <div 
          className="absolute hidden md:block"
          style={{ 
            bottom: '25%', 
            right: '4%', 
            width: '220px', 
            height: '130px',
            opacity: 0.85
          }}
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="Cloud decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl">
          {/* Browser Logos */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-[180px] h-[60px] md:w-[220px] md:h-[70px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/CRYdEsbP8f95pFTmjg4v89xo09M-13.png" 
                alt="Chrome, Firefox, Safari, Edge support"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-4xl md:text-[56px] font-extrabold text-white leading-tight tracking-tight">
              Surf the Clouds<br />
              Marqly on Every Browser
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-[1.4] max-w-xl mx-auto">
              Access Marqly through Chrome, Firefox, Safari, and Edge extensions, 
              enabling you to effortlessly save and organize all your crucial web pages and information.
            </p>
          </div>

          <button 
            className="bg-white text-[#30A2FF] font-bold py-3.5 px-10 rounded-full text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            style={{ borderRadius: '100px' }}
          >
            Coming Soon
          </button>
        </div>

        {/* Smaller cloud at bottom */}
        <div 
          className="absolute block"
          style={{ 
            bottom: '-20px', 
            width: '140px', 
            height: '80px',
            opacity: 0.6
          }}
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="Cloud decoration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BrowserSupport;