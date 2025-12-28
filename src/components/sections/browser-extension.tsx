import React from 'react';
import Image from 'next/image';

const BrowserExtension = () => {
  return (
    <section className="container px-4 py-8 md:px-0">
      <div 
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 md:py-32"
        style={{
          backgroundColor: '#82CDFF',
          borderRadius: '40px',
          minHeight: '600px'
        }}
      >
        {/* Decorative Floating Clouds */}
        <div className="absolute top-[10%] left-[5%] w-[150px] md:w-[220px] opacity-90 select-none pointer-events-none">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="absolute top-[5%] right-[8%] w-[120px] md:w-[180px] opacity-90 select-none pointer-events-none">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="" 
            className="w-full h-auto scale-x-[-1]"
          />
        </div>

        <div className="absolute bottom-[10%] left-[12%] w-[100px] md:w-[150px] opacity-80 select-none pointer-events-none">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="" 
            className="w-full h-auto"
          />
        </div>

        <div className="absolute bottom-[20%] right-[5%] w-[140px] md:w-[200px] opacity-90 select-none pointer-events-none">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/I4LDmoZObWqBB8SyJOdCdiThQ-12.png" 
            alt="" 
            className="w-full h-auto"
          />
        </div>

        {/* Browser Icons Asset */}
        <div className="relative z-10 mb-8 w-[280px] md:w-[320px]">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/CRYdEsbP8f95pFTmjg4v89xo09M-13.png" 
            alt="Browser extensions for Chrome, Firefox, Safari, and Edge" 
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 
            className="font-display text-[#FFFFFF] font-bold text-3xl md:text-[48px] leading-tight mb-2 tracking-tight"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
          >
            Surf the Clouds<br />
            Marqly on Every Browser
          </h2>
          
          <p className="font-body text-[#FFFFFF] text-base md:text-[18px] leading-[1.6] opacity-90 mb-10 max-w-lg mx-auto">
            Access Marqly through Chrome, Firefox, Safari, and Edge extensions, 
            enabling you to effortlessly save and organize all your crucial 
            web pages and information.
          </p>

          <button 
            className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-white text-brand-blue font-semibold text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{ 
              color: '#2996F5',
              boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)'
            }}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowserExtension;