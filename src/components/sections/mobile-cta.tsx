import React from 'react';
import Image from 'next/image';

/**
 * MobileCTA Component
 * Clones the "Anywhere, Anytime. Mobile Experience" section.
 * Features a light blue large container, an iPhone mockup, floating icons, and a centered CTA.
 */
export default function MobileCTA() {
  const assets = {
    iphoneMockup: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/QupTxcgtZ3DtoXAOcqQxS11ic-7.png",
  };

  return (
    <section className="w-full py-20 px-4 md:px-0 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div 
          className="relative w-full max-w-[1200px] mx-auto min-h-[720px] rounded-[32px] bg-[#F0F7FF] flex flex-col items-center justify-center text-center p-8 md:p-16"
          style={{
            // Matches the high-level design system's Hero Background color
            backgroundColor: 'var(--color-hero-bg, #F0F7FF)',
          }}
        >
          {/* Floating Decorative Elements */}
          {/* Top Left Floating Folder Icon */}
          <div className="absolute top-[15%] left-[10%] hidden md:block animate-bounce-slow">
             <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 border border-blue-50">
               <div className="w-10 h-10 bg-[#30A2FF]/20 rounded-lg flex items-center justify-center">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30A2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                 </svg>
               </div>
             </div>
          </div>

          {/* Bottom Right Floating Bookmark Icon */}
          <div className="absolute bottom-[20%] right-[12%] hidden md:block animate-pulse-slow">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center transform rotate-12 border border-blue-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#30A2FF" stroke="#30A2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
              </svg>
            </div>
          </div>

          {/* Top Center "Anywhere, Anytime." Text */}
          <div className="mb-4">
            <span className="text-[#30A2FF] font-semibold text-lg md:text-xl tracking-tight">
              Anywhere, Anytime.
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-[40px] md:text-[56px] font-bold text-black mb-6 leading-[1.2] tracking-tight max-w-[800px]">
            Mobile Experience
          </h2>

          {/* Description */}
          <p className="text-[#666666] text-lg md:text-xl max-w-[600px] mb-12 leading-relaxed">
            Access Marqly seamlessly on the go. Enjoy a great experience on mobile devices, ensuring your bookmarks are always at your fingertips.
          </p>

          {/* Mobile Phone Mockup Area */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] h-[300px] md:h-[400px] mt-4 flex justify-center items-end overflow-hidden">
            <div className="relative w-[180px] md:w-[240px] z-10 transition-transform duration-500 hover:scale-105">
              <Image 
                src={assets.iphoneMockup} 
                alt="Marqly Mobile App Mockup" 
                width={240} 
                height={480}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* Visual background gradient circle behind the phone */}
            <div 
              className="absolute bottom-[-100px] w-[500px] h-[500px] rounded-full blur-[80px]"
              style={{
                background: 'radial-gradient(circle, rgba(48, 162, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)'
              }}
            />
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-12">
            <a 
              href="https://app.marqly.com" 
              className="inline-flex items-center justify-center bg-[#30A2FF] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#2587E0] hover:shadow-lg hover:-translate-y-1 active:scale-95 gap-2"
            >
              Try Marqly Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) rotate(12deg); opacity: 1; }
          50% { transform: scale(1.05) rotate(15deg); opacity: 0.9; }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}