import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Adrian",
    text: "Fantastic way to organize bookmarks. Highly recommended!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/HdxMAOjEJY0eVOjFiSGiXFoi5vA-8.png"
  },
  {
    name: "Chenten",
    text: "Great bookmarking tool with a user friendly interface , Absolutely a great way to save your bookmarks",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/QN0uDRAZHZ9OUKufDBNiN6DlP4w-9.png"
  },
  {
    name: "Tina",
    text: "I love the simplicity of Marqly. It allows me to manage all of my bookmarks in a single place.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/Rc5TvNDrbvc1LvIuCtrkhLh4uoQ-10.png"
  },
  {
    name: "Michael",
    text: "My absolute favourite bookmarking tool. Really the love the UI and easy of use.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/P3wW5LIoCzcNGuEW8AuF4IamFTE-11.png"
  },
  {
    name: "Adrian",
    text: "Fantastic way to organize bookmarks. Highly recommended!",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/HdxMAOjEJY0eVOjFiSGiXFoi5vA-8.png"
  },
  {
    name: "Chenten",
    text: "Great bookmarking tool with a user friendly interface , Absolutely a great way to save your bookmarks",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68f767a9-f366-4f24-af37-949bee1eee0b-marqly-com/assets/images/QN0uDRAZHZ9OUKufDBNiN6DlP4w-9.png"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#EBFAF2] rounded-[40px] px-6 py-[120px] mx-4 md:mx-10 my-20">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="font-display text-[48px] font-bold text-[#333333] tracking-[-0.02em] leading-[1.1] mb-4">
          Loved by people.
        </h2>
        <p className="font-body text-[18px] text-[#666666] mb-10">
          What do people think about our product
        </p>
        <div className="flex justify-center mb-20">
          <a
            href="https://app.marqly.com"
            className="inline-flex items-center justify-center bg-[#2996F5] text-white font-body font-semibold text-[16px] px-6 py-3 rounded-full shadow-[0_4px_14px_0_rgba(41,150,245,0.39)] hover:brightness-110 transition-all"
          >
            Sign up now -&gt;
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Continuous scrolling container */}
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {/* Double the list for seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="inline-block min-w-[350px] bg-white rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <p className="whitespace-normal font-body text-[14px] text-[#555555] leading-snug mb-2">
                    {testimonial.text}
                  </p>
                  <p className="font-display font-bold text-[16px] text-[#333333]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}